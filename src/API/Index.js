import axios from "axios";

const url = "https://todoapkapi.herokuapp.com/";

const apiUrl = {
  signUp: "login/signup",
  signIn: "login/signin",
};

export const signUpApi = async (body) => {
  try {
    const res = await axios.post(url + apiUrl.signUp, body);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
export const signinApi = async (body) => {
  try {
    const res = await axios.post(url + apiUrl.signIn, body);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
