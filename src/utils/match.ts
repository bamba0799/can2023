import { API_BASE_URL } from "@env";
import axios from "axios";



const getMatchs = async() => {
  const response = await axios.get(`${API_BASE_URL}/matchs`)
  const matchs = response.data
  return matchs

}
export {
  getMatchs
}
