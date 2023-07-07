import { Buffer } from "buffer";
import { axiosInstance } from '@lib/axios';

const clientId = "AZHk7HJkI0gQfcgwEUCLwWXucezQt6a41EcSPdRRvqdOMolCrpNz8RFBK6Qv7VnjUJFlw8GGpofvx9Ds";
const clientSecret = "EG8e39PdJcFFvMIShRtnPHfz9yW4U78lScGbeNGnf6mJ5SKRElakAvH4Oq_yY1ARdgNsSU23iNB9xnRV"; 

export const getAccesTokenPaypal = async() => {

  const authPaypal = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const response = await axiosInstance.post(
    "https://api-m.sandbox.paypal.com/v1/oauth2/token",
    "grant_type=client_credentials",
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${authPaypal}`,
      },
    }
  ); //normal

  return response.data

}

export const DataApiPaypal = (quantity:string, amount:string) => {
  return {
    "intent": "CAPTURE",
    "purchase_units": [
      {
        "items": [
          {
            "name": "lot de " + `${quantity}` + " ticket",
            "description": "Green XL",
            "quantity": "1",
            "unit_amount": {
              "currency_code": "USD",
              "value": amount
            }
          }
        ],
        "amount": {
          "currency_code": "USD",
          "value": amount,
          "breakdown": {
            "item_total": {
              "currency_code": "USD",
              "value": amount
            }
          }
        }
      }
    ],
    "application_context": {
      "return_url": "https://example.com/return",
      "cancel_url": "https://example.com/cancel"
    }
  };
}

export const buyTicketPerPaypal = async(accessTokenPaypal:string, quantityOfTicket:string, amountTicketStringusd:string) => {
  const requestBody = DataApiPaypal(quantityOfTicket, amountTicketStringusd)
  let linkss
  try {
    const respons = await axiosInstance.post(
      "https://api-m.sandbox.paypal.com/v2/checkout/orders",
      requestBody,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessTokenPaypal}`,
        },
      }
    );
    const link: any = respons.data.links;
    linkss = link.filter((lin: any) => lin.rel === "approve").map((lin: any) => {
        return lin.href
      });
      return linkss
  } catch (error) {
    console.log("erreur lors du paiement par paypal", error)
  }
  
}

export const capturePayment = (id: any, token = "") => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return new Promise((resolve, reject) => {
    fetch(
      "https://api.sandbox.paypal.com" + `/v2/checkout/orders/${id}/capture`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log("result print", result);
        const res = JSON.parse(result);
        resolve(res);
      })
      .catch((error) => {
        console.log("error raised", error);
        reject(error);
      });
  });
};

export const paymentSucess  = async(identifiant:any, accessTokenPaypal:any) => {
  try {
    const res = await capturePayment(identifiant, accessTokenPaypal)
    return res
  } catch (error) {
    console.log("l'erreur final est", error)
  }
}
