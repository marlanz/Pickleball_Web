import axios from "axios";
import { BASE_URL } from "../constants";

export const getPublicMatches = async () => {
  try {
    const repsonse = await axios.get(`${BASE_URL}/Match/public`);
    if (repsonse.status === 200) {
      return repsonse.data.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getRoomOwner = async (id) => {
  try {
    const repsonse = await axios.get(`${BASE_URL}/User/GetUserById/${id}`);
    if (repsonse.status === 200) {
      return repsonse.data.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getVenuesById = async (id) => {
  try {
    const repsonse = await axios.get(`${BASE_URL}/Venues/GetVenues/${id}`);
    if (repsonse.status === 200) {
      return repsonse.data.data;
    }
  } catch (err) {
    console.log(err);
  }
};
