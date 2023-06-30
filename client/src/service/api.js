import axios from "axios";

// const URL = "http://localhost:8000";

export const getNews = async () => {
    const URL = "http://localhost:8000";
  try {
    return await axios.get(`${URL}/news`);
    // return await axios.get(`${URL}/news?page=${page}&size=${size}`);
  } catch (error) {
    console.log("error while calling getNews API");
  }
};
