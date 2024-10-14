import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/";

axios.defaults.withCredentials = true;

export async function getCards() {
    try {
        const response = await axios.get(`${BASE_URL}/card`);
        return response.data.data;
    } catch (error) {
        console.error("GET Faild: ", error);
        return false;
    }
}

export async function getDesCards() {
    try {
        const res = await axios.get(`${BASE_URL}/card/des-card`);
        return res.data.data;
    } catch (error) {
        console.error("GET Faild: ", error);
        return false;
    }
}

export async function getBanksInfo() {
    try {
        const res = await axios.get(BASE_URL);
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.error("GET Faild: ", error);
        return false;
    }
}
