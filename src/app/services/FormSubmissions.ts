import axios from 'axios';

const AUTH_URL = "some URL";

const apiClient = axios.create({
    baseURL: AUTH_URL,
    headers: { "Content-Type": "application/json" },
})

export const authService = {
    login: async (LoginData: { userName: string; password: string }) => {
        try {
            const response = await apiClient.post("/login", LoginData);
            console.log("Authentication Successfull in Backend", response);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (error: any) {
            console.log("LOGIN FAILED", error);
        }
    }
}