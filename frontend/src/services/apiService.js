import axios from "axios";
const postCreateNewUser = (email, ID, username, password, role, image) => {
  const data = new FormData();
  data.append("email", email);
  data.append("ID", ID);
  data.append("username", username);
  data.append("password", password);
  data.append("role", role);
  data.append("userImage", image);
  return axios.post("http://localhost:5000/api/v1/userlist", data);
};
const getAllUser = () => {
  return axios.get("/api/v1/userlist/all");
};
const deleteUser = () => {
  return axios.delete("/api/v1/userlist/all");
};
const putUpdateUser = (username, role, image) => {
  const data = new FormData();
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.post("http://localhost:5000/api/v1/userlist", data);
};

const postLogin = (email, password) => {
  return axios.post("/api/v1/auth/login", {
    email: email,
    password: password,
    delay: 5000,
  });
};

const postRegister = (email, id, username, password, confirmPassword) => {
  return axios.post("/api/v1/auth/register", {
    email,
    id,
    username,
    password,
    confirmPassword,
  });
};
export default {
  postCreateNewUser,
  getAllUser,
  putUpdateUser,
  postRegister,
  postLogin,
};
