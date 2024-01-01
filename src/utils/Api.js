import axios from "axios";

const Api = async (url) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    return false;
  }
};

export default Api;
