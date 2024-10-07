import axios from "axios";

export async function getImages() {
    const res = await axios.get("http://127.0.0.1:8000/onboarding/images/");

    return res.data;
}
