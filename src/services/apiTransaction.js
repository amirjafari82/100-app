import axios from "axios";
import { format } from "date-fns";

const BASE_URL = "http://127.0.0.1:8000/card/";

const TRANSACTION = BASE_URL + "transaction";
const LAST_SENDS = BASE_URL + "last-sends";

axios.defaults.withCredentials = true;

export async function getTransactions() {
    try {
        const response = await axios.get(TRANSACTION);
        return response.data;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function transfer(data) {
    try {
        const date = format(new Date(), "hh:mm b - MMMM dd , yyyy");
        const response = await axios.post(TRANSACTION, {
            data,
            creted_at: date,
            type: "Transfer",
        });
        if (response.status === 406) return new Error("Not Enough Money");
        return response.data;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function last_sends() {
    try {
        const response = await axios.get(LAST_SENDS);
        return response.data;
    } catch (error) {
        console.error(error);
        return false;
    }
}
