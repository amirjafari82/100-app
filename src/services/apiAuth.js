import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/";

const LOGIN_URL = `${BASE_URL}accounts/token/`;
const LOGOUT_URL = `${BASE_URL}accounts/logout/`;
const AUTHENTICATED_URL = `${BASE_URL}accounts/authenticated/`;
const UPDATEPROFILE_URL = `${BASE_URL}accounts/update-profile/`;

axios.defaults.withCredentials = true;

export async function login(phone) {
    const payload = {
        phone,
        password: "12345678",
    };
    try {
        const response = await axios.post(LOGIN_URL, payload);
        return response.data;
    } catch (error) {
        console.error("Login Faild: ", error);
        return false;
    }
}

export async function logout() {
    try {
        await axios.post(LOGOUT_URL);
    } catch (error) {
        console.error("Logout Faild: ", error);
        return false;
    }
}

export async function updateProfile(data) {
    try {
        const formData = new FormData();
        console.log(data.image);
        for (var key in data) {
            if (key === "image") {
                if (data.image) formData.append(key, data[key][0]);
                else continue;
            } else formData.append(key, data[key]);
        }
        const response = await axios.post(UPDATEPROFILE_URL, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export async function getCurrentUser() {
    const response = await axios.post(AUTHENTICATED_URL, {
        withCredentials: true,
    });
    return response.data;
}
