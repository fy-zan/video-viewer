import axios from "axios";
const KEY = "AIzaSyDqHSg-GxjMzK-7AspcZn0XDmQYoW3oMQI";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
})