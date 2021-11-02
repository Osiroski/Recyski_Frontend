import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://recyskiapi.herokuapp.com/";
const user =JSON.parse(localStorage.getItem('user') || '{}');
const getHistory = () => {
  return axios.get(API_URL + "history/" + user.id,{ headers: authHeader() });
};
const getProfile = () => {
  return axios.get(API_URL + "profile/" + user.id, { headers: authHeader() });
};
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
  getProfile,
  changePassword,
};

export default userService