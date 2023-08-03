import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { Header } from '@components/Header';
import { FontAwesome } from '@expo/vector-icons';
import { shuffleArray } from '@utils/mixArray';
import io from 'socket.io-client';
import { useAuthStore } from '@store/auth';
import { axiosInstance } from '@lib/axios';


export const Quiz = () => {

  const { user, TOKEN_KEY, setUser } = useAuthStore((state) => state);
  // console.log(user?.contact);
  const userId = user?.id

  const [firstMessage, setFirstMessage] = useState('Le quiz commence a 13h45 ');
  const [showModal, setShowModal] = useState(false);
  const [emoji, setEmoji] = useState<any>('❌');
  const [responseStatus, setResponseStatus] = useState('Mauvaise réponse');
  const [color, setColor] = useState<any>([]);

  const [answered, setAnswered] = useState(false);

  const [geometric, setGeometric] = useState<any>([]);

  const [question, setQuestion] = useState<any>('');
  const [responses, setResponses] = useState<any>([]);
  const [trueResponse, setTrueResponse] = useState<any>([]);

  const [startQuizCount, setStartQuizCount] = useState(5);
  const [startQuizTimer, setStartQuizTimer] = useState(false);
  const [displayStartQuizCount, setDisplayStartQuizCount] = useState('hidden')


  const [responseCount, setResponseCount] = useState(9);
  const [displayResponseCount, setDisplayResponseCount] = useState('');
  const [responseTimer, setResponseTimer] = useState(false);

  const [continueResponseCount, setContinueResponseCount] = useState(4);
  const [continueResponseTimer, setContinueResponseTimer] = useState<any>('z');
  const [displayContinueResponseCount, setDisplayContinueResponseCount] = useState('hidden')

  const [quizStatu, setQuizStatu] = useState();

  const [time, setTime] = useState<any>()


  const allPoints = [
    { time: 9, value: 900, observation: 'très très bien' },
    { time: 8, value: 800, observation: 'très bien ' },
    { time: 7, value: 700, observation: 'c\'est bien continuez' },
    { time: 6, value: 600, observation: 'c\'est bien continuez' },
    { time: 5, value: 500, observation: 'continuez' },
    { time: 4, value: 400, observation: 'Encore plus d\'efforts' },
    { time: 3, value: 300, observation: 'travaillez en plus' },
    { time: 2, value: 200, observation: 'travaillez en plus' },
    { time: 1, value: 100, observation: 'travaillez en plus' },
  ]
  const [point, setpoints] = useState<any>([{ time: 0, value: 0, observation: 'du courage continuez' }])

  const heure: number = 13;
  const minute = 40;

  const socket = io('http://192.168.252.146:3500');

  const startQuizCountDown = () => {
    const intervalId: any = setInterval(() => {
      setStartQuizCount((prev) => --prev);
    }, 1000);
    return intervalId;
  };

  const responseCountDown = () => {
    const intervalId: any = setInterval(() => {
      setResponseCount((prev) => --prev);
    }, 1000);
    return intervalId;
  };

  const continueResponseCountDown = () => {
    const intervalId: any = setInterval(() => {
      setContinueResponseCount((prev) => --prev);
    }, 1000);
    return intervalId;
  };

  const sendResponse = async (responseId: any, userId: any, pointValue?: any) => {
    const data = {
      resId: responseId,
      usId: userId
    }
    const url = 'http://192.168.252.146:9203/api/quiz/receive/response'
    const response = axiosInstance.post(url, data)
  }

  const answerQuiz = (res: any) => {
    setAnswered(true);
    setTime(responseCount)

    setDisplayContinueResponseCount('hidden')
    setShowModal(true);

    if (res.label === trueResponse) {
      const point = allPoints.filter((alpoint: any) => alpoint.time == responseCount)
      const pointValue = point[0].value
      const id = res.id
      // sendResponse(id, userId)
      setpoints(point)
      setEmoji('✅');
      setResponseStatus('Bonne réponse');
    } else {
      setpoints([{ value: 0, observation: "du courage continuez" }])
      setResponseStatus('Mauvaise reponse');
      setEmoji('❌');
    }
  };

  useEffect(() => {
    socket.on('receive_message', (msg) => {
      setQuestion(msg.message.label);
      setResponses(shuffleArray(msg.message.responses))
      setTrueResponse(msg.message.trueResponse);
      setpoints([{ time: 0, value: 0, observation: 'du courage continuez' }])
      setQuizStatu(msg.statu);
      if (msg.statu === true) {
        setStartQuizTimer(msg.statu);
        setDisplayStartQuizCount('d')
      } else if (msg.statu == 'continue' || msg.statu == 'finish') {
        setDisplayContinueResponseCount('d')
        setResponseStatus('Mauvaise reponse')
        setEmoji('❌');
        if (msg.statu == 'continue') {
          setContinueResponseTimer(msg.statu);
          setDisplayStartQuizCount('hidden')
        } else {
          setContinueResponseTimer(msg.statu);
          setQuizStatu(msg.statu);
        }
      }
      const color = shuffleArray([
        'bg-blue-500',
        'bg-green-500',
        'bg-purple-500',
        'bg-yellow-500',
      ]);
      setColor(color);

      const shuffleGeometric = shuffleArray([
        'circle',
        'square',
        'star',
        'cloud',
      ]);
      setGeometric(shuffleGeometric);
    });
    if (heure == 13 && minute >= 40 && minute <= 45) {
      setFirstMessage('Le quiz a commmencé patientez quelques secondes');
    }
  }, []);

  useEffect(() => {
    let intervalId: any;
    if (startQuizCount == 0) {
      setStartQuizTimer(false);
      clearInterval(intervalId);
      setResponseTimer(true);
    }
    if (startQuizTimer) {
      intervalId = startQuizCountDown();
    }
    return () => clearInterval(intervalId);
  }, [startQuizCount, startQuizTimer]);

  useEffect(() => {
    let intervalId: any;
    if (responseCount === 0) {
      setDisplayResponseCount('hidden');
      setResponseTimer(false);
      clearInterval(intervalId);
      setContinueResponseCount(4);
      setDisplayContinueResponseCount('hidden')
      setShowModal(true);
    }
    if (responseTimer) {
      intervalId = responseCountDown();
    }
    return () => clearInterval(intervalId);
  }, [responseTimer, responseCount]);

  useEffect(() => {
    let intervalId: any;
    if (continueResponseCount === 0) {
      setContinueResponseTimer('e');
      clearInterval(intervalId);
      setShowModal(false);
      setResponseCount(9);
      setResponseTimer(true);
      setDisplayResponseCount('');

      //
    }
    if (
      continueResponseTimer == 'continue' ||
      continueResponseTimer == 'finish'
    ) {
      intervalId = continueResponseCountDown();
    }
    return () => clearInterval(intervalId);
  }, [continueResponseCount, continueResponseTimer]);

  if (quizStatu == undefined || startQuizCount != 0) {
    return (
      <View className='flex-1'>
        <Header
          showBackIcon
          title="Jouez a un quiz 🏆"
        />
        <View className="h-screen flex-1 items-center justify-center">
          <View className={`${"h-10 w-10 items-center justify-center rounded-full border bg-black p-2"} ${displayStartQuizCount}`}>
            <Text className={`${'text-lg text-white'}`}>{startQuizCount}</Text>
          </View>
          <Text className="text-bold text-md">{firstMessage}</Text>
        </View>
      </View>

    );
  }
  return (
    <View className="flex-1 bg-white ">
      <Header
        showBackIcon
        title="Quiz 🏆"
      />

      <View className="mt-10 items-center ">
        <View
          className={`${'mb-3 h-7 w-7 items-center justify-center rounded-full bg-black'} ${displayResponseCount}`}
        >
          <Text className="text-lg text-white ">{responseCount}</Text>
        </View>
        {/* affichage de la question  */}
        <View className=" w-80  rounded-2xl bg-gray-300 pb-1 pl-2 pr-2 pt-1">
          <View className="absolute right-0 top-[-20px] items-center">
            <FontAwesome
              name="question-circle"
              size={30}
              color="black"
            />
          </View>
          <Text className="text-lg font-bold text-black">{question} ?</Text>
        </View>
        {/* affichage des reponses */}
      </View>
      <View className="flex-col justify-evenly p-4 ">
        {responses.length !== 0
          ? responses.map((respo: any, index: number) => (
            <TouchableOpacity
              activeOpacity={0.8}
              key={index}
              onPress={() => answerQuiz(respo)}
            >
              <View
                className={`${'mt-2 h-14 flex-row rounded-2xl'} ${color[index]
                  } `}
              >
                <View className="grow flex-row items-center justify-center">
                  <View
                    className="absolute"
                    style={{
                      top: '50%',
                      left: 15,
                      transform: [
                        {
                          translateY: -15,
                        },
                      ],
                    }}
                  >
                    <FontAwesome
                      name={`${geometric[index]}` as any}
                      size={30}
                      color="white"
                    />
                  </View>
                  <Text className="text-lg text-white">{respo.label}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
          : null}
      </View>
      <View style={styles.modalBody}>
        <Modal
          visible={showModal}
          transparent
        >
          <SafeAreaView style={styles.centered}>
            <View
              className="flex-col items-center justify-evenly  bg-slate-100 "
              style={styles.modalContent}
            >
              <View className={`h-10 w-10 items-center justify-center rounded-full border bg-black p-2 ${displayContinueResponseCount}`}>
                <Text className='text-white text-lg'>{continueResponseCount}</Text>
              </View>
              {displayContinueResponseCount == 'hidden' ?
                <View className={`items-center fixed w-full justify-around h-80 `}>
                  <Text className="text-3xl font-bold text-orange-400">{responseStatus}</Text>
                  <Text style={{ fontSize: 60 }}>{emoji}</Text>
                  <View className='bg-black w-36 h-12 items-center justify-center'>
                    <Text className=" text-3xl font-bold text-white">+ {point[0].value} pts</Text>
                  </View>
                  {quizStatu != 'finish' ?
                    <Text className="text-xl">{point[0].observation}</Text>
                    :
                    <Text className="text-xl text-red-700">Ceci marque la fin de ce quiz</Text>
                  }
                </View>
                : <View className='mb-20'>
                  <Text className='text-lg'>Attention prochaine question</Text>
                </View>
              }
              <View className={`items-end  w-80 ${quizStatu == 'finish' && displayContinueResponseCount == 'hidden' ? '' : 'hidden'}`}>
                <TouchableOpacity onPress={() => console.log("resultat")} activeOpacity={0.7} className='bg-black w-24 h-10 rounded-lg items-center justify-center'>
                  <Text className='text-white text-lg'>Resultat</Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      </View>
    </View>
  );
};

const styles: any = StyleSheet.create({
  modalBody: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  modalContent: {
    width: 400,
    height: 660,
    borderRadius: 20,
  },
  centered: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
});
