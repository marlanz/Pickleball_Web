import axios from "axios";

export const getAllProvinces = async () => {
  try {
    const response = await axios.get("https://provinces.open-api.vn/api/p/");
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    console.log(err);
  }
};
