import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';
import queryString from 'query-string';
import { dayjs } from '@lib/dayjs';
import { ScreenContentLayout } from '@layouts/ScreenContentLayout';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useMatch } from '@screens/matchs/hooks';
import { ScreenLoader } from '@components/ScreenLoader';
import { Center } from '@components/Center';
import { DropdownPaymentMethod, DropdownTicketCategory } from './types';
import { useNavigation } from '@react-navigation/native';
import { useMainStore } from '@store';
import { WebView } from 'react-native-webview';
import { usePayUsingPaypal, usePaypalAccessToken } from '../hooks/payment';
import { getTotalTicketPriceAsUSD } from '@utils/payment';
import { capturePayment } from '../api/payment';

type Props = {
  matchId: string;
};

const DEFAULT_TICKET_CATEGORY: DropdownTicketCategory = {
  id: '0',
  label: 'Ordinaire',
  value: 'regular',
};

const TICKET_CATEGORIES: Array<DropdownTicketCategory> = [
  { ...DEFAULT_TICKET_CATEGORY, id: '1' },
  { id: '2', label: 'VIP', value: 'vip' },
];

const DEFAULT_PAYMENT_METHOD: DropdownPaymentMethod = {
  id: '0',
  label: 'Orange Money',
  value: 'om',
};

const PAYMENT_METHODS: Array<DropdownPaymentMethod> = [
  { ...DEFAULT_PAYMENT_METHOD, id: '1' },
  { id: '2', label: 'PAYPAL', value: 'visa' },
];

export const Main: React.FC<Props> = () => {
  const { navigate } = useNavigation();
  const { matchId, setMatchId } = useMainStore();
  const store = useMainStore((state) => state);

  const { data: match, isLoading, isError } = useMatch(matchId!, true);
  const { data: paypalAccessToken } = usePaypalAccessToken(true);
  const { data: paypalRes, mutateAsync: payUsingPaypal } = usePayUsingPaypal();
  const formattedDate = dayjs(match?.date).format('DD-MM-YYYY');

  // States
  const [ticketQuantity, setTicketQuantity] = useState<string>('1');
  const [category, setCategory] = useState(DEFAULT_TICKET_CATEGORY);
  const [paymentMethod, setPaymentMethod] = useState(DEFAULT_PAYMENT_METHOD);
  const [paypalURL, setPaypalURL] = useState<string | null>();

  // Get the total ticket price
  function getTicketPrice(): string {
    let pricePerUnit: number; // TODO: make "pricePerUnit" property dynamic
    let totalPrice: number;
    const ticketQuantityAsNumber = ticketQuantity
      ? parseFloat(ticketQuantity)
      : 0;

    if (category.value === 'regular') {
      pricePerUnit = 2000;
    } else {
      pricePerUnit = 10000;
    }

    totalPrice = ticketQuantityAsNumber * pricePerUnit;
    return totalPrice.toString();
  }

  const buyTicketPerCard = async () => {
    const totalAsNumber = parseFloat(getTicketPrice());
    const totalTicketPriceAsUSD = getTotalTicketPriceAsUSD(totalAsNumber);

    const requestBody = {
      intent: 'CAPTURE',
      purchase_units: [
        {
          items: [
            {
              name: 'Ticket',
              description: 'Green XL',
              quantity: '1',
              unit_amount: {
                currency_code: 'USD',
                value: totalTicketPriceAsUSD,
              },
            },
          ],
          amount: {
            currency_code: 'USD',
            value: totalTicketPriceAsUSD,
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: totalTicketPriceAsUSD,
              },
            },
          },
        },
      ],
      application_context: {
        return_url: 'https://example.com/return',
        cancel_url: 'https://example.com/cancel',
      },
    };

    try {
      await payUsingPaypal(
        {
          accessToken: paypalAccessToken.access_token,
          requestPayload: requestBody,
        },
        {
          onSuccess(data, variables, context) {
            data.links
              .filter((link: any) => link.rel === 'approve')
              .map((link: any) => setPaypalURL(link.href));
          },
        }
      );
    } catch (e) {
      console.log('erreur lors du paiment', e);
    }
  };

  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////
  const paymentSucess = (identifiant: any) => {
    try {
      const res = capturePayment(identifiant, paypalAccessToken.access_token);
      console.log('la reponse final est', res);
      alert('payment effectué avec succes');
      clearPaypalState();
    } catch (error) {
      console.log("l'erreur final est", error);
    }
  };

  const clearPaypalState = () => {
    setPaypalURL(null);
    store.setPaypalAccessToken(null);
  };

  const onUrlChange = (webviewState: any) => {
    console.log('le webviewState est', webviewState);

    if (webviewState.url.includes('https://example.com/cancel')) {
      clearPaypalState();
      alert('fermé');
    }

    if (webviewState.url.includes('https://example.com/return')) {
      const urlValues = queryString.parseUrl(webviewState.url);
      console.log('mon url est value de bamba Mabo est ', urlValues);
      const { token } = urlValues.query;
      console.log(token);
      if (token) {
        paymentSucess(token);
      }
    }
  };
  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    getTicketPrice();
  }, [category, ticketQuantity]);

  useEffect(() => {
    if (paypalAccessToken) {
      store.setPaypalAccessToken(paypalAccessToken.access_token);
    }
  }, [paypalAccessToken]);

  // Waiting for the match to be fetched...
  if (isLoading) {
    return <ScreenLoader />;
  }

  // On fetch error
  if (isError) {
    return (
      <Center>
        <Text>Erreur lors du chargement des données.</Text>
      </Center>
    );
  }

  return (
    <View className="flex-1">
      <Header
        title="Ticket 🎫"
        showBackIcon
        onNavigateBack={() => navigate('Extra/Main' as never)}
      />
      <ScreenContentLayout>
        {/* Intro */}
        <View className="space-y-2">
          <Text className="font-[extraBold] text-2xl">Acheter des tickets</Text>
          <Text className="text-sm">Procurer vous des tickets ici</Text>
        </View>

        {/* Form */}
        <View className="mt-8">
          <View
            className="flex-row"
            style={{ columnGap: 12 }}
          >
            {/* Match date */}
            <Input
              label="Date"
              editable={false}
              containerProps={{ className: 'flex-[1.75] space-y-1' }}
              textInputProps={{
                value: formattedDate,
              }}
            />

            {/* Matchup */}
            <Input
              label="Match"
              editable={false}
              containerProps={{ className: 'flex-[4] space-y-1' }}
              textInputProps={{
                value: `${match.matchStats[0].team.name}  -  ${match.matchStats[1].team.name}`,
              }}
            />
          </View>

          <View
            className="mt-4 flex-row"
            style={{ columnGap: 16 }}
          >
            {/* Category */}
            <View className="flex-1 space-y-1">
              <Text className="text-xs">Catégorie</Text>
              <Dropdown
                data={TICKET_CATEGORIES}
                value={category}
                labelField={'label'}
                valueField={'label'}
                style={styles.dropdown}
                selectedTextStyle={[styles.dropdown_text]}
                containerStyle={styles.dropdown_item_container}
                itemContainerStyle={{ borderRadius: 8 }}
                itemTextStyle={[styles.dropdown_text, { fontSize: 16 }]}
                iconStyle={styles.dropdown_icon}
                onChange={(item: DropdownTicketCategory) => {
                  setCategory(item);
                }}
                renderRightIcon={(visible) => (
                  <Ionicons name="ios-caret-down-outline" />
                )}
              />
            </View>

            {/* Ticket quantity */}
            <Input
              label="Nombre"
              textInputProps={{
                value: ticketQuantity,
                onChangeText: setTicketQuantity,
                keyboardType: 'number-pad',
              }}
            />
          </View>

          <View
            className="mt-4 flex-row"
            style={{ columnGap: 16 }}
          >
            {/* Total price */}
            <Input
              label="Montant total (FCFA)"
              editable={false}
              textInputProps={{
                value: getTicketPrice(),
              }}
            />

            {/* Payment method */}
            <View className="flex-1 space-y-1">
              <Text className="text-xs">Moyen de paiement</Text>
              <Dropdown
                data={PAYMENT_METHODS}
                value={paymentMethod}
                labelField={'label'}
                valueField={'label'}
                style={styles.dropdown}
                selectedTextStyle={[styles.dropdown_text]}
                containerStyle={styles.dropdown_item_container}
                itemContainerStyle={{ borderRadius: 8 }}
                itemTextStyle={[styles.dropdown_text, { fontSize: 16 }]}
                iconStyle={styles.dropdown_icon}
                onChange={(item: DropdownPaymentMethod) => {
                  setPaymentMethod(item);
                }}
                renderRightIcon={(visible) => (
                  <Ionicons name="ios-caret-down-outline" />
                )}
              />
            </View>
          </View>

          <Button
            className="mt-8 flex-row items-center justify-center rounded-lg bg-black"
            onPress={buyTicketPerCard}
          >
            <Text className="p-3 text-center font-[semiBold] text-sm text-white">
              Procéder au paiement
            </Text>
            <Ionicons
              name="ios-arrow-forward"
              size={14}
              color="white"
            />
          </Button>
        </View>
      </ScreenContentLayout>

      {/* <WebView
        source={{ uri: paypalURL! }}
        className="absolute bottom-0 left-0 flex-1"
        onNavigationStateChange={onUrlChange}
      ></WebView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgb(209 213 219)',
    paddingHorizontal: 10,
    flexGrow: 1,
  },
  dropdown_text: {
    fontSize: 14,
    lineHeight: 18,
    color: 'rgb(31 41 55)',
  },
  dropdown_item_container: {
    borderRadius: 8,
    borderWidth: 1,
    padding: 4,
    borderColor: 'rgb(209 213 219)',
    shadowColor: 'transparent',
  },
  dropdown_icon: {
    width: 14,
    height: 18,
  },
});
