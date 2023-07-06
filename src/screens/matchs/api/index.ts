import { Buffer } from "buffer";
import axios from "axios";
import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
import { Asset } from "expo-asset";
// import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib'; 


const CodeTicket = (ballonImage:any, qrCode:any, canLogo:any) => {
  return  `
  <html lang="en">
  <body>
  <div>
      <div style="background-image: linear-gradient(25deg, rgb(54, 190, 73) 5%, rgb(5, 152, 93) 50%); width: 600px; height: 330px; ">
          <div style="display: flex; font-weight: bold; justify-content: space-between;">

              <div style="  display: flex; margin-top: 15px; justify-content: space-between;">
                  <img src="${canLogo}" alt="can" style="width: 58px; height: 65px;">
                  <div style="margin-top: 17px; margin-left: 3px;">
                      <span style="color: aliceblue; font-size:23px; font-family: Arial, Helvetica, sans-serif; ">Coupe d'Afrique des Nations</span><br>
                      <span style="color:aliceblue; font-size:18px ;">Côte d'Ivoire 2023</span>
                  </div>
                  <img src="${qrCode}" alt="qrcode" style="width:70px; height: 70px; border-radius: 9px; margin-left: 30px; margin-top: 30px;">
              </div>
              <div style="display: block; position: absolute; top: 130px; left: 8px;  height: 128px;">
                  <div style="display: flex; align-items: center;">
                      <hr style="border: 1px solid yellow; background-color: yellow; height: 0.5px; width: 40px; margin-left: 0px;"></hr>
                      <span style="color: rgb(229, 222, 21); font-size: 30px; font-weight: bold; margin-right: 30px;">Stades Felix Houphouet Boigny</span>
                  </div>
                  <div style="display: flex; margin-top: 30px; padding: 10px; overflow: hidden;">
                      <div style="background-color: rgb(80, 158, 2); width: 140px; height: 50px; margin-left: -70px; transform: rotate(20deg); display: flex; justify-content: flex-end; border-radius: 100%;">
                          <img src="${ballonImage}" alt="ballon" style="width: 55px; height: 55px;">
                      </div>
                      <div>
                          <span style="color: yellow; font-size: 24px;"> Lundi 10 janvier 2024</span>
                          <div style="border: 1px solid white  ; width: 150px;"></div>
                          <!-- <div style="border-left: 2px solid white; position: absolute; top: 35px; left: 60%; height: 85px;"></div> -->
                          <div style="margin-top: 10px;">
                              <span style="font-size: 16px; color: aliceblue;">Côte d'Ivoire vs Cameroun <span style="color:yellow" >18:30</span></span><br>
                              <span style="font-size: 16px; color: aliceblue;">Burkina Faso vs Sénégal <span style="color:yellow" >20:30</span></span>
                          </div>
                          </span>
                      </div>
                      <div>
                          <div style="display: flex; width: 120px;">
                              <div style="margin-left: 10px;">
                                  <span style="font-size: 15px; color: aliceblue; ">Portail</span>
                                  <div style="background-color: rgb(9, 194, 182); height: 50px; width: 100%; display: flex; align-items: center; ">
                                      <span style="color: aliceblue; padding: 10px; font-size: 25px; ">03</span>
                                  </div>
                              </div>
                              <div style="margin-left: 10px;">
                                  <span style="font-size: 15px; color: aliceblue; ">Rangée</span>
                                  <div style="background-color: rgb(9, 194, 182); height: 50px; width: 100%; display: flex; align-items: center; ">
                                      <span style="color: aliceblue; padding: 10px; font-size: 25px; ">20</span>
                                  </div>
                              </div>
                              <div style="margin-left: 10px;">
                                  <span style="font-size: 15px; color: aliceblue; display: flex ; justify-content:center;">Siège</span>
                                  <div style="background-color: rgb(9, 194, 182); height: 50px; width: 100%; display: flex; align-items: center; ">
                                      <span style="color: aliceblue; padding: 10px; font-size: 25px; ">A3</span>
                                  </div>
                              </div>
                          </div>
                          <div style="border: 1px solid black; height: 35px; width: 163px; background-color: aliceblue; margin-top: 5px; margin-left: 10px; display: flex; justify-content: space-around; align-items: center; ">
                              <span style="font-size: 17px; color: rgb(5, 152, 93); ">prix: 2000F</span>
                              <div style="border-left: 2px solid black; height: 35px; "></div>
                              <span style="font-size: 17px; ">standard</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div style="display: flex; ">
                  <div style=" border-left: 3px dashed white; width: 1px ;height: 350px; opacity: 0.8; "></div>
                  <div>
                      <span style="color: aliceblue;border: 1px dashed white; font-size: 16px; ">Ticket d'entrée</span>
                      <div>
                          <img src=" " alt=" ">
                      </div>
                  </div>
              </div>
          </div>
      </div>
</body>
  </html>
  `;
}


const generatePdf = async (quantityOfTicket:string) => {
  // Charger les images locales
  const ballonImage = Asset.fromModule(require('../../../assets/images/imTicket/ballon.png')).uri;
  const qrCode = Asset.fromModule(require('../../../assets/images/imTicket/qrcode.png')).uri;
  const canLogo = Asset.fromModule(require('../../../assets/images/imTicket/can.png')).uri;
  let quantity = parseInt(quantityOfTicket)
  let nb:number = 0
  while( nb < quantity){
    const file = await Print.printToFileAsync({
      html: CodeTicket(ballonImage,  qrCode, canLogo),
      base64: false,
    });
    await Sharing.shareAsync(file.uri);
    nb++
  }  
};

// const generatePdf = async () => {
//   const ballonImage = Asset.fromModule(require('../../../assets/images/imTicket/ballon.png')).uri;
//   const qrCode = Asset.fromModule(require('../../../assets/images/imTicket/qrcode.png')).uri;
//   const canLogo = Asset.fromModule(require('../../../assets/images/imTicket/can.png')).uri;

//   const pdfDoc = await PDFLib.PDFDocument.create();

//   let nb = 0;
//   while (nb < 3) {
//     const page = pdfDoc.addPage();
//     const pageContent = CodeTicket(ballonImage, qrCode, canLogo);
//     await page.drawImage(pageContent, {
//       x: 0,
//       y: 0,
//       width: page.getWidth(),
//       height: page.getHeight(),
//     });

//     nb++;
//   }

//   const pdfBytes = await pdfDoc.save();

//   // Enregistrer et partager le fichier PDF généré
//   const pdfUri  = FileSystem.cacheDirectory + 'tickets.pdf';
//   await FileSystem.writeAsStringAsync(pdfUri, pdfBytes, {
//     encoding: FileSystem.EncodingType.Base64,
//   });
//   await Sharing.shareAsync(pdfUri);
// };


const getAccesToken = async (idClient:any, secretClient:any) => {
  const auth = Buffer.from(`${idClient}:${secretClient}`).toString("base64");
  const response = await axios.post(
    "https://api-m.sandbox.paypal.com/v1/oauth2/token",
    "grant_type=client_credentials",
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${auth}`,
      },
    }
  );

  return response.data.access_token;
}

const clientIdOm = "jKv9EnAoBHaiAZfPdswW8aK8JGGGa8KC"
const clientSecretOm = "uGiOmEeDozyLp8Oe"

const getAccesTokenOrange = async() => {
  const authOrange = Buffer.from(`${clientIdOm}:${clientSecretOm}`).toString("base64");
  const response = await axios.post(
    "https://api.orange.com/oauth/v3/token",
    "grant_type=client_credentials",
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${authOrange}`,
      },
    }
  )
  return response.data.access_token
}
// TestOPE_0019h01gvot
const buyTicketPerOrangeMoney = async(accesTokenOrange:string) => {
  const requestBody = {
    "merchant_key": "a42dca79",
    "currency": "OUV",
    "order_id": `${accesTokenOrange}`+"bb",
    "amount": 1500,
    "return_url": "http://www.merchant-example.org/return",
    "cancel_url": "http://www.merchant-example.org/cancel",
    "notif_url": "http://www.merchant-example.org/notif",
    "lang": "fr",
    "reference": "ref Merchant"
}
try {
  const response = await axios.post(
    "https://api.orange.com/orange-money-webpay/dev/v1/webpayment",
    requestBody,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accesTokenOrange}`,
      },
    }
  );
  const orangePaymentUrl = response.data.payment_url
  return orangePaymentUrl
  
} catch (error) {
  
}

}


export { 

  CodeTicket, 
  generatePdf, 
  getAccesToken, 
  getAccesTokenOrange,
  buyTicketPerOrangeMoney
}
