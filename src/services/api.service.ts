import axios from "axios";
import {IUser} from "../models/IUser";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {"Content-Type": "application/json"}
});

export const getUsers = async () => {
    let response = await axiosInstance.get('/users');
    return response.data
}

export const getPostsOfUser = async (user: IUser) => {
    let response = await axiosInstance.get('/posts?limit=251');
    return response.data
}
