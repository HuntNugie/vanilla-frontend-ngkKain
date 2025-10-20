import axios from "axios";

const api = import.meta.env.VITE_API_URL;

export const getData = async (url = "/") => {
  try {
    const res = await axios.get(`${api}${url}`, { withCredentials: true });
    return res;
  } catch (error) {
    throw new Error(error)
  }
};

export const postData = async (url = "/", data) => {
  try {
    const res = await axios.post(`${api}${url}`, data, {
      withCredentials: true,
    });
    return res;
  } catch (error) {
    throw new Error(error)
  }
};
