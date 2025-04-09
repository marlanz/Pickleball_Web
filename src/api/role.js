import axios from "axios";
import { BASE_URL } from "../constants";

export const createSponor = async (body) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/Sponner/CreateSponner`,
      body
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const createPlayer = async (body) => {
  try {
    const response = await axios.post(`${BASE_URL}/Player/CreatePlayer`, body);
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    console.log(err);
  }
};
