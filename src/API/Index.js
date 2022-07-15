import axios from "axios";

const url = "https://todoapkapi.herokuapp.com/";

const apiUrl = {
  signUp: "login/signup",
  signIn: "login/signin",
  getTodo: "todo/get",
  createTodo: "todo/create",
  updateTodo: "todo/update",
  deleteTodo: "todo/delete",
};

export const deleteTodoApi = async (body) => {
  try {
    const res = await axios.post(url + apiUrl.deleteTodo, body);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

export const updateTodoApi = async (body) => {
  try {
    const res = await axios.post(url + apiUrl.updateTodo, body);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

export const createTodoApi = async (body) => {
  try {
    const res = await axios.post(url + apiUrl.createTodo, body);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
export const getTodoApi = async (body) => {
  try {
    const res = await axios.post(url + apiUrl.getTodo, body);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
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
