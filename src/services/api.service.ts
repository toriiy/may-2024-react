import axios from "axios";
import {IComment} from "../models/IComment";
import {DJResponseType} from "../models/ResponseType";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {"Content-Type": "application/json"}
});

export const apiService = {
    commentService: {
        getAll: async (page: number): Promise<DJResponseType & { comments: IComment[] }> => {


            const limit = 50
            const skip = (page - 1) * limit;

            const {data} = await axiosInstance.get<DJResponseType & { comments: IComment[] }>('/comments', {
                params: {
                    limit: limit,
                    skip: skip
                }
            });
            return data
        },
    }
}