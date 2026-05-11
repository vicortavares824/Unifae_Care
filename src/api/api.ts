import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("TOKEN");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { api };
