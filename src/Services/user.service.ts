import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://recyskiapi.herokuapp.com/";
const user =JSON.parse(localStorage.getItem('user') || '{}');
const getHistory = async (id:number) => {
  try{
  const response = await axios.get(API_URL + "orders/history/?user=" + id,{ headers: authHeader() });
  if (response.status===200) {
    return response;
  }
}catch (error: any) {
  if (error.request) {
    return error.request;
  }
}
  
};
const getBuyOrders = async (ordering:string) => {
  try{
  const response = await axios.get(API_URL + "orders/sell/?ordering=" +ordering,{ headers: authHeader() });
  if (response.status===200) {
    return response;
  }
}catch (error: any) {
  if (error.request) {
    return error.request;
  }
}
  
};
const getProfile = async (id:number) => {
  try{
  const response= await axios.get(API_URL + "profile/" + id, { headers: authHeader() });
  if (response.data) {
    return response;
  }
  }
  catch (error: any) {
    if (error.request) {
      return error.request;
    }
  }
};
const updateProfile = async (data:any) => {
  try{
  const response= await axios.put(API_URL + "profile/" + user.id+'/',data, { headers: authHeader() });
  if (response.data) {
    return response;
  }
  }
  catch (error: any) {
    if (error.request) {
      return error.request;
    }
  }
};
const uploadProfileImage= async(id:number,file:any)=>{
  try{
  const response= await axios.put(API_URL + "profile/" + id +'/',file, { headers: authHeader() });
  if (response.data) {
    return response;
  }
  }
  catch (error: any) {
    if (error.request) {
      return error.request;
    }
  }

}
const getProfileImage=(path:string)=>{
  return API_URL + path.slice(1)

}
const changePassword = async (password: string) => {
  try {
    const response = await axios.post(API_URL + "changepassword/", { password},{ headers: authHeader() });
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    }
  }
  catch (error: any) {
    if (error.request) {
      return error.request;
    }
  }
};
const userService = {
  getHistory,
  getBuyOrders,
  getProfile,
  updateProfile,
  getProfileImage,
  changePassword,
  uploadProfileImage
};

export default userService