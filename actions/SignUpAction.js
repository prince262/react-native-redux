import {SIGN_UP} from '../Types'
import axios from 'axios'
import {URL} from '../../color'
export const signup = (name,email,password)=>async dispatch => {

try {
  console.log('data here',email,password,name)
  const {data}=await  axios.post( `${URL}/user/signup`,  { "password": password,  "name": name, "email": email, "avatar": "", "location": "mp" })
 //console.log('data here',data)
 return data;
  
} catch (error) {
 return error.response && error.response.data.message
  ? error.response.data.message
  : error.message
  
}
 
  
    // return {
    //   type: SIGN_UP,
    //   payload: number
    // }
  }