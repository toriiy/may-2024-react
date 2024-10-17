import axios from "axios";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";


const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export const getUsers = async (): Promise<IUser[]> => {
    const {data} = await axiosInstance.get<IUser[]>('/users');
    return data
}

export const getPosts = async (): Promise<IPost[]> => {
    const {data} = await axiosInstance.get<IPost[]>('/posts');
    return data
}

export const getComments = async (): Promise<IComment[]> => {
    const {data} = await axiosInstance.get<IComment[]>('/comments');
    return data
}

export const getPostsOfUser = async (id: string): Promise<IPost[]> => {
    const {data} = await axiosInstance.get<IPost[]>('/posts?userId=' + id);
    return data
}

export const getPostComments = async (id: string): Promise<IComment[]> => {
    const {data} = await axiosInstance.get<IComment[]>('comments?postId=' + id);
    return data
}

