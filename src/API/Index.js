import axios from "axios";

const url = "http://localhost:5001/";

const apiUrl = {
  signUp: "login/signup",
};

export const signUpApi = async (body) => {
  try {
    const res = await axios.post(url + apiUrl.signUp, body);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
