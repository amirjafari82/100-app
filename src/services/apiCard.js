import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/";

axios.defaults.withCredentials = true;

export async function getCards() {
    try {
        const response = await axios.get(`${BASE_URL}/card`);
        return response.data;
    } catch (error) {
        console.error("GET Faild: ", error);
        return false;
    }
}
