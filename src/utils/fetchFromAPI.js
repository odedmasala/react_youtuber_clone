import axios from "axios";
const ENTRY_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  url: ENTRY_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key":process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${ENTRY_URL}/${url}`, options);
  
    return data;
  };
