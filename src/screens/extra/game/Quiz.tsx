import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  StyleSheet,
} from 'react-native'
import { Header } from '@components/Header'
import { FontAwesome } from '@expo/vector-icons'
import { shuffleArray } from '@utils/mixArray'
import io from 'socket.io-client'
import { useAuthStore } from '@store/auth'
import { axiosInstance } from '@lib/axios'
import { Button } from '@components/Button'
import { ScreenLoader } from '@components/ScreenLoader';
import LottieView from 'lottie-react-native'



export const Quiz = ({ navigation }: any) => {

  const { user, TOKEN_KEY, setUser } = useAuthStore((state) => state);
  
  const [displayPoint, setDisplayPoint] = useState('')
  const [point, setPoint] = useState<number>(0)
  const [emoji, setEmoji] = useState<any>('❌');
  const [responseStatus, setResponseStatus] = useState('Temps écroulé');
  const [textColor, setTextColor] = useState<string>('text-red-500')

  const [geometric, setGeometric] = useState<any>(["circle", "square", "star", "cloud"])
  const [color, setColor] = useState<any>(["z"])

  const [quizStatu, setQuizStatu] = useState<boolean>()
  const [quizId, setQuizId] = useState<string>()
  const [question, setQuestion] = useState<any>('')  
  const [responses, setResponses] = useState<any>([])
  const [rankOfQuestion, setRankOfQuestion] = useState<number>(0)
  const [numberOfQuestion, setNumberOfQuestion] = useState<number>()

  const [waitTimeCount, setWaitTimeCount] = useState<any>()
  const [waitTimeModal, setWaitTimeModal] = useState(false)
  const [startResponseTimer, setStartResponseTimer] = useState(false)
  const [responseCount, setResponseCount] = useState(10)  //recoit le temp de reponse de la question
  
  const [resultModal, setResultModal] = useState(false)
  const [displayTotal,setDisplayTotal] = useState(false)
  const [totalOfPoint, setTotalOfPoint] = useState(0)
  const [displayFinalResult, setDisplayFinalResult] = useState(false) // je dois initialiser a false mais travailler je mets a true

  const socket = io('http://192.168.252.91:7100')

  const [ownerPoint, setOwnerPoint] = useState<any>([])
  const [userConnectPoint, setUserConnectPoint] = useState<any>(0)
  
  const getOwnerData = async(ownerId:string) => {
    console.log("ssssssssssssss");
      try {
        const response = await axiosInstance.get(`http://192.168.252.91:3100/api/user/userPerId/${ownerId}`)
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
  }
  const getUser = async() => {
    try{
      const response = await axiosInstance.get(`http://192.168.252.91:3100/api/quiz/sumPoint/1`)
      const sortResponse = response.data.sort((a: any, b: any) => b.totalPoints - a.totalPoints)
      setOwnerPoint(sortResponse[0])
      const userConnectPoint = response.data.filter((data:any) => data.userId == user?.id)
      setUserConnectPoint(userConnectPoint[0].totalPoints)
      console.log("point user connect", userConnectPoint[0].totalPoints)//hbsh
      
    }catch(e){
      console.log('erreur chargement des point users', e);
    }
  }
 
  const waitTimeCountDown = () => {
    const intervalId: any = setInterval(() => {
      setWaitTimeCount((prev:any) => --prev)
    }, 1000)
    return intervalId
  }

  const responseCountDown = () => {
    const intervalId: any = setInterval(() => {
       setResponseCount((prev:any) => --prev)
    }, 1000)
    return intervalId
  }
  const disconnect = () => {
    socket.disconnect()
    console.log("l'utilisateur s'est deconnecté")
    navigation.goBack()

  }

  const chooseResponse = async (response:any, timeOfResponse:number) => {
    console.log("quizzzzzzId",quizId)
   
    let point:number
    if(response.isCorrect){
      point = (100 * timeOfResponse)/10
      setPoint(point)
      setEmoji('✅')
      setResponseStatus('Bonne réponse')
      setTextColor('text-orange-500')
    }else{
      point = 0
      setPoint(point)
      setEmoji('❌')
      setResponseStatus('Mauvaise réponse')
    }

    

    const data = {
      "questionId": question?.id,
      "quizId":"1",
      "responseId":response?.id,
      "userId":user?.id,
      "point":point
    }
    try {
      const res = await axiosInstance.post("http://192.168.252.91:3100/api/quiz/givePointToUser", data)
      console.log("point attribué avec succes")
    }catch(e) {
      console.log("erreur lors de l'attribution", e)
    }
    setTotalOfPoint((prev:number) => prev + point)
    setResultModal(true)
  }

  const resultat = () => {
    setDisplayFinalResult(true)
    getUser()
  }

  useEffect(() => {
    setResultModal(false)
  }, [])
  useEffect(() => {
    socket.on('receive_message', (msg) => { 
        setQuestion(msg.question)
        setResponseCount(msg.question.duration)
        setWaitTimeCount(msg.waitTime)
        setWaitTimeModal(true)
        setResultModal(false)     
        setResponses(shuffleArray(msg.question.suggestedResponses))
        setNumberOfQuestion(msg.numberOfquestion)
        setRankOfQuestion(msg.rankOfQuestion)
        setQuizStatu(msg.finish)
        setQuizId(msg.quizId)
        const color = shuffleArray([
          'bg-blue-500',
          'bg-green-500',
          'bg-purple-500',
          'bg-yellow-500',
        ])
        setColor(color)
  
        const shuffleGeometric = shuffleArray([
          'circle',
          'square',
          'star',
          'cloud',
        ])
        setGeometric(shuffleGeometric)
    })
  }, [])

  // c'est par la qu'on recoit les question du quiz
  useEffect(() => {
    socket.on("welcome", (msg:any) => {
      if(msg != null){
        setQuestion(msg.question)
        setQuizStatu(msg.finish)
        setResponseCount(msg.question.duration)
        setWaitTimeCount(msg.waitTime) // setWaitTimeCount(msg.waitTime)
        setNumberOfQuestion(msg.numberOfquestion)
        setRankOfQuestion(msg.rankOfQuestion)
        setWaitTimeModal(true)
        setResultModal(false)     
        setResponses(shuffleArray(msg.question.suggestedResponses))

    
        const color = shuffleArray([
          'bg-blue-500',
          'bg-green-500',
          'bg-purple-500',
          'bg-yellow-500',
        ])
        setColor(color)
  
        const shuffleGeometric = shuffleArray([
          'circle',
          'square',
          'star',
          'cloud',
        ])
        setGeometric(shuffleGeometric)
      
      }
      (msg)

    })
  }, [])

  useEffect(() => {
   let intervalId:any
   if(waitTimeCount == 0){
    clearInterval(intervalId)
    setWaitTimeModal(false)
    setStartResponseTimer(true)
   }
   if(waitTimeModal){
    intervalId = waitTimeCountDown()
   }
   return () => clearInterval(intervalId)
   
  }, [waitTimeCount, waitTimeModal])

  useEffect(() => {
    let intervalId:any
    if(responseCount == 0){
      clearInterval(intervalId)
      setResultModal(true)
      setStartResponseTimer(false)
    }
    if(startResponseTimer){
      intervalId = responseCountDown()
    }
    return () => clearInterval(intervalId)
  }, [responseCount, startResponseTimer])
  if(!question){
    return(
      <View className='flex-1'>
        <Header showBackIcon onNavigateBack={disconnect} title={"quiz"} />
        <View className='flex-1 justify-center items-center h-full '>
          <Text>pas de quiz pour le moment</Text>
        </View>
      </View>
    )
    } else{
  return (
    <View className='flex-1  bg-white'>
      <Header showBackIcon onNavigateBack={disconnect} title={"quiz"} />
      <View className="mt-10 items-center">
        <View
          className={`${'mb-3 h-7 w-7 items-center justify-center rounded-full bg-black'} `}
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
          <Text className="text-lg font-bold text-black">{question.label}</Text>
        </View>
       
      </View>
       {/* affichage des reponses */}
      <View className="flex-col justify-evenly p-4 ">
        {responses.length !== 0
          ? responses.map((respo: any, index: number) => (
          
            <TouchableOpacity
              activeOpacity={0.8}
              key={index}
              onPress={() => {chooseResponse(respo, responseCount)}}
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
                  <Text className="text-lg text-white">{respo.value}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
          : null}
      </View>
      <View style={styles.modalBody}>
        {/* resultModal */}
        <Modal visible={resultModal} transparent>
          <SafeAreaView style={styles.centered}>
          <Text className='absolute top-20 z-10 right-10 text-lg text-orange-500 '>{rankOfQuestion+1}/{numberOfQuestion}</Text>
            { displayFinalResult == false?
               <View className="items-center justify-center bg-slate-100  "style={styles.modalContentResu}>
               { responseCount != 0 ? //je dois mettre !=0 mais pour faire le bouton je garde cette 
                <View className={`${displayPoint}`} style={styles.lottieView}>
                  <LottieView style={styles.lottie} source={require('@assets/images/imTicket/lottieWaitResult.json')} autoPlay loop/>
                  <Text className='text-xl font-bold text-orange-500'>patientez...</Text>
                </View>
                :<View className='items-center justify-between h-80 w-80'>
                  <Text style={{fontSize:35}} className={`${textColor} font-bold`}>{responseStatus}</Text>
                  <Text style={{fontSize:60}} className='t'>{emoji}</Text>
                  <View className='bg-black border w-64 items-center  justify-center '>
                    <Text style={{fontSize:35}} className=' text-white font-bold'>{point} pts</Text>
                  </View>
                  {quizStatu  ?
                  <View className='items-end w-64'>
                    <Button onPress={() => resultat()} className='bg-orange-500 w-32 h-10 justify-center rounded-md items-center'>
                     <Text className='text-2xl text-white font-bold'>Résultat</Text>
                    </Button>
                  </View>
                   :null
                 }
                </View>
                }
              </View>
              :
              <View className="items-center justify-center bg-slate-100 mt-[-20rem]"style={styles.modalContentResu}>
                <View className='pl-10  w-full flex flex-row items-center '>
                  <Text style={{fontSize:32}} className='font-semi-bold  text-orange-500'>Vainqueur : </Text>
                  {/* affichage du vainqueur */}
                  <Text style={{fontSize:23}} className='font-bold mt-2'>{ownerPoint?.contact}</Text>
                </View>
                <View className='  w-full  h-60 justify-center'>
                  <View className='pl-10 flex flex-row items-center '>
                    <Text style={{fontSize:32}} className='text-orange-500 '>Point final : </Text>
                    <Text style={{fontSize:23}} className='font-bold mt-2'>{userConnectPoint?userConnectPoint:0} pts</Text>
                  </View>
                </View>
                <Button onPress={() => {setResultModal(false) ; setQuestion(null)} } className='w-80 h-10 bg-black justify-center items-center rounded-md absolute bottom-40'>
                  <Text style={{fontSize:20}} className='text-white'>Retour</Text>
                </Button>
              </View>
            }
          </SafeAreaView>
        </Modal>
        {/* waitTime modal */}
        <Modal visible={waitTimeModal} transparent>
          <SafeAreaView >
            <View style={styles.modalContent} className="flex-col items-center justify-evenly  bg-white ">
              <View className={`h-24 w-24 items-center justify-center rounded-full border bg-black p-2 `}>
                <Text className='text-white text-3xl'>{waitTimeCount}</Text>
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      </View>
    </View>
  )
    }
}

const styles: any = StyleSheet.create({
  modalBody: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  modalContent: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },

  modalContentResu: {
    width: 400,
    height: 700,
    borderRadius: 20,
  },

  centered: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },

  lottieView: {
    width:200,
    height:200,
    alignContent:'center',
    alignItems:'center'
  },

  lottie:{
    height:150,
    marginBottom:-60
  }
})
