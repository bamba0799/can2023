import React, { useState, useEffect } from "react";
import { View, Text, Pressable, Modal, TouchableOpacity, StyleSheet} from "react-native";
import { RegularButton } from "../../components/Buttons";
import { HomeIcon } from "@components/Icons";
import { Ionicons } from '@expo/vector-icons';
import { RegularInput } from "@components/Inputs";
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { Dropdown } from 'react-native-element-dropdown';
import { useRoute } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MatchsStackParamList } from "@navigation/app/home/matchs/types";
import WebView from "react-native-webview";
import queryString from "query-string";
import axios from "axios";
import { Buffer } from "buffer";
import dayjs from "dayjs";
import { Header } from "@components/Header";
import {capturePayment, DataApiPaypal, generatePdf, getAccesTokenOrange, buyTicketPerOrangeMoney} from "./api/index";


//vrai
const MatchsBuyTicket: React.FC<
  NativeStackScreenProps<MatchsStackParamList, "Matchs/MatchsBuyTicket">
> = ({ navigation }) => {
  dayjs.locale("fr");
  const data = useRoute().params as any;


  const matchsdate = dayjs(data.matchsdate).format("dddd DD MMMM YY");
  const [equipe1, setEquipe1] = useState("");
  const [equipe2, setEquipe2] = useState("");
  const matchStats = data.matchStats;
  const [accessToken, setAccessToken] = useState<any>("");
  const [accesTokenOrange, setAccesTokenOrange] = useState<any>("")
 
  console.log("le token d'orange est ",accesTokenOrange)
  const [paypalUrl, setPaypalUrl] = useState<any>(null);
  const [orangeMoneyUrl, setOrangeMoneyUrl] = useState<any>(null)
  console.log("le l'url d'orange est ", orangeMoneyUrl)

  const [quantityOfTicket, setQuantityOfTicket] = React.useState("1");
  const numberInt = parseInt(quantityOfTicket) * 2000;
  const amountTicketNusd = Math.ceil(numberInt / 612.56)
  const amountTicketStringusd = amountTicketNusd.toString()
  const amountTicket = numberInt.toString();
  
  const defaultTicketCategory = {id:"0", label:"Ordinaire", value:"1"}
  const [category, setCategory] = useState(defaultTicketCategory)
  console.log(category)
  const categoryData = [
    defaultTicketCategory,
    {id: "1",label:"VIP", value:"2"},
  ]
const defaultPaymentMethod = {id:"0",label: "Orange money", value: "money" }

 const paymentMethodData = [
  defaultPaymentMethod,
  {id:"1", label: "Carte bancaire", value: "carte" },
  ]
  const [paymentMethod, setPaymentMethod] = useState(defaultPaymentMethod);
  console.log(paymentMethod)

  const [modalAn, setModalAn] = useState(false)
  const [modalRn, setModalRn] = useState(false)

  useEffect(() => {
    matchStats.map((equipe: any, index: number) => {
      if (index == 0) {
        const equipe1 = equipe.team.name;
        setEquipe1(equipe1);
      } else {
        const equipe2 = equipe.team.name;
        setEquipe2(equipe2);
      }
    });
    getAccesToken().catch((er) => console.log(er));
    getAccesTokenOrange().then(
      (res) => setAccesTokenOrange(res)

      ).catch(err => console.log(err))
    

  }, []);

  const clientId = "AZHk7HJkI0gQfcgwEUCLwWXucezQt6a41EcSPdRRvqdOMolCrpNz8RFBK6Qv7VnjUJFlw8GGpofvx9Ds";
  const clientSecret = "EG8e39PdJcFFvMIShRtnPHfz9yW4U78lScGbeNGnf6mJ5SKRElakAvH4Oq_yY1ARdgNsSU23iNB9xnRV"; 

  const getAccesToken = async () => {
    const authPaypal = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
    const response = await axios.post(
      "https://api-m.sandbox.paypal.com/v1/oauth2/token",
      "grant_type=client_credentials",
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${authPaypal}`,
        },
      }
    ); //normal

    setAccessToken(response.data.access_token);
  };
  const buyTicketPerPaypal = async (accessToken: string) => {
    const requestBody = DataApiPaypal(quantityOfTicket, amountTicketStringusd)

    try {
      const respons = await axios.post(
        "https://api-m.sandbox.paypal.com/v2/checkout/orders",
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const link: any = respons.data.links;
      link
        .filter((lin: any) => lin.rel === "approve")
        .map((lin: any) => {
          setPaypalUrl(lin.href)
        });

      return respons.data.links;
    } catch (error) {
      console.log("erreur lors du paiement par paypal", error)
    }
  };


  const suivant = () => {
    if (paymentMethod.value == "carte") {
      buyTicketPerPaypal(accessToken)
    } else if (paymentMethod.value == "money") {
      buyTicketPerOrangeMoney(accesTokenOrange).then(
        (res) => setOrangeMoneyUrl(res)
        ).catch(err => console.log("erreur de paiement orange"))

    }
    else {
      alert("selectionnez un moyen de paiement")
    }

  }

  const paymentSucess = (identifiant: any) => {
    try {
      const res = capturePayment(identifiant, accessToken)
      console.log("la reponse final est", res)
      //alert("payment effectué avec succes")
      setModalRn(true)
      clearPaypalState()
    } catch (error) {
      console.log("l'erreur final est", error)
    }
  }
  console.log("l'url est", paypalUrl)

  const onUrlChangePaypal = (webviewState: any) => {
    console.log("le webviewState est", webviewState)
    if (webviewState.url.includes("https://example.com/cancel")) {
      clearPaypalState()
      setModalAn(true)
    }
    if (webviewState.url.includes("https://example.com/return")) {
      const urlValues = queryString.parseUrl(webviewState.url)
      console.log("mon url est value de bamba Mabo est ", urlValues)
      const { token } = urlValues.query
      console.log(token)
      if (token) {
        paymentSucess(token)
      }
    }
  }

  const clearPaypalState = () => {
    setPaypalUrl(null)
    setAccessToken(null)
  }

  const matchsConfrontation = equipe1 + " - " + equipe2;

 

 



  return (
   
      <View
        className="w-full "
      >
     <Header showBackIcon title={"Ticket"}/>
        <View className="mt-8 p-2">
          <View className=" gap-y-3">
            <Text className="text-3xl font-bold tracking-tight">
              Acheter des tickets
            </Text>
            <Text className="text-base tracking-tight text-[#595959]">
              Procurer vous des tickets ici
            </Text>
          </View>

{/* matchsConfrontation */}
          <View className="mt-2 h-20 flex-row space-x-2 p-2">
            <View className="w-1/2">
            <Input
              label="Date"
              editable={false}
              containerProps={{ className: 'flex-[1.75] space-y-1' }}
              textInputProps={{
                value: matchsdate,
              }}
            />
            
            </View>
            <View className=" w-1/2">
              <Input
                label="Match"
                editable={false}
                containerProps={{ className: 'flex-[1.75] space-y-1' }}
                textInputProps={{
                  value: matchsConfrontation,
                }}
              />
            </View>
          </View>


          <View className="mt-4 flex-row space-x-2 p-2 items-center justify-center">
            <View className="flex-1 space-y-1">
            <Text className="text-xs">Catégorie</Text>
                <Dropdown
                data={categoryData}
                value={category}
                labelField={'label'}
                valueField={'label'}
                style={styles.dropdown}
                selectedTextStyle={[styles.dropdown_text]}
                containerStyle={styles.dropdown_item_container}
                itemContainerStyle={{ borderRadius: 8 }}
                itemTextStyle={[styles.dropdown_text, { fontSize: 16 }]}
                iconStyle={styles.dropdown_icon}
                onChange={(value) => setCategory(value)}
                renderRightIcon={(visible) => (
                  <Ionicons name="ios-caret-down-outline" />
                )}
               
              />
              </View>
            
            
            <View className=" w-1/2 ">
            
                <Input
                  label="Nombre"
                  textInputProps={{
                    value: quantityOfTicket,
                    onChangeText: setQuantityOfTicket,
                    keyboardType: 'number-pad',
              }}
            />
            </View>
          </View>
          <View className="mt-4 flex-row space-x-2 p-2">
            <View className=" w-1/2 bg-gray-300 ">
              <View className="mb-[2px] flex-row bg-gray-100">
                <Text>Montant total à payer (FCFA)</Text>
                <Text className="text-red-700">*</Text>
              </View>
              <RegularInput editable={false} value={amountTicket} />
            </View>
            <View className=" w-1/2 ">
              <View className="mb-[2px] flex-row">
                <Text>Mode de paiement</Text>
                <Text className="text-red-700">*</Text>
              </View>

              {/* <RNPickerSelect
                onValueChange={(value) => setPaymentMethod(value)}
                items={paymentMethodData}
              /> */}
               <Dropdown
                data={paymentMethodData}
                value={paymentMethod}
                labelField={'label'}
                valueField={'label'}
                style={styles.dropdown}
                selectedTextStyle={[styles.dropdown_text]}
                containerStyle={styles.dropdown_item_container}
                itemContainerStyle={{ borderRadius: 8 }}
                itemTextStyle={[styles.dropdown_text, { fontSize: 16 }]}
                iconStyle={styles.dropdown_icon}
                onChange={(value) => setPaymentMethod(value)}
                renderRightIcon={(visible) => (
                  <Ionicons name="ios-caret-down-outline" />
                )}
               
              />

            </View>
          </View>
          <View className="mt-6">
          

          <Button className="mt-8 flex-row items-center justify-center rounded-lg bg-black"onPress={() => suivant()}  >
            <Text  className="p-3 text-center font-[semiBold] text-sm text-white"> Procéder au paiement</Text>
            <Ionicons  name="ios-arrow-forward" size={14}  color="white" />
          </Button>


            {/* <RegularButton onPress={generatePdf} background="bg-black mt-10">
              <Text className="font-semibold text-white">generer</Text>
            </RegularButton> */}

            {/* paiement sur paypal web */}
            <Modal visible={!!paypalUrl}>
              <TouchableOpacity onPress={clearPaypalState} className="mt-10 ml-3">
                <Text className="text-xl text-blue-500 font-medium">Retour</Text>
              </TouchableOpacity>
              <View className="flex-1">
                <WebView source={{ uri: paypalUrl }} onNavigationStateChange={onUrlChangePaypal} />
              </View>
            </Modal>
            {/* paiement orange money pour le web */}
            <Modal visible={!!orangeMoneyUrl}>
              <TouchableOpacity  className="mt-10 ml-3">
                
              </TouchableOpacity>
              <View className="flex-1">
                <WebView source={{ uri: orangeMoneyUrl }} onNavigationStateChange={onUrlChangePaypal} />
              </View>
            </Modal>

            <Modal visible={!!modalAn}>
              <View className="flex-1 justify-center items-center">
                {/* <Pressable className="self-start rounded-full bg-icon px-2 py-2" onPress={navigation.goBack} >
                        <BackIcon width={18} height={18} />
                      </Pressable> */}
                <Text className="text-2xl">Paiement annulé</Text>
              </View>
            </Modal>
            <Modal visible={!!modalRn}>
              <View className="flex-1 items-center justify-center">
                <LottieView source={require("../../assets/images/lottieFiles/checked.json")} duration={2000}></LottieView>
                <Text className="font-bold text-black" style={{ fontSize: 24 }}>Achat effectué avec succès</Text>
                <View className="mt-5 flex-row space-x-3">
                  <RegularButton background="bg-black" rounded>
                    <Text className="font-semibold text-white"> Voir le ticket </Text>
                  </RegularButton>
                  <View>
                    <Pressable className="self-start rounded-full bg-icon px-4 py-4" onPress={() => { navigation.navigate("Matchs/Main") }}>
                      <HomeIcon width={18} height={18} />
                    </Pressable>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </View>
  );
};
export default MatchsBuyTicket;

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
