import axios from "axios";

// Authentication service
// The service uses Axios for HTTP requests and Local Storage for user information & Access Tokens.
// It provides following important functions:
// register(): POST {username, email, password}
// login(): POST {username, password} & save token to Local Storage
// logout(): remove token from Local Storage

const API_URL = 'https://recyskiapi.herokuapp.com/';

const register = async (
      username: string,
      password: string,
      email: string,
      first_name: string,
      last_name: string ) => {
  try{
  const response= await axios.post(API_URL + "register/", {
    username,
    email,
    password,
    first_name,
    last_name});
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

const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(API_URL + "login/", { email, password, });
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
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;