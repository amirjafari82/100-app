import axios from "axios";
import { format } from "date-fns";

const BASE_URL = "http://127.0.0.1:8000/card/";

const BALANCE = BASE_URL + "balance/";

axios.defaults.withCredentials = true;

export async function getBalance(data) {
    try {
        const response = await axios.post(BALANCE, {
            data,
        });
        return response;
    } catch (error) {
        return { status: error.status };
    }
}
