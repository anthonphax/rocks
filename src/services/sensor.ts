import { useDispatch } from "react-redux"
import SocketService from "./socket"
import api from "./api"
import { setData } from "../redux/slices/chart"

export const listData = async () => {
    try {
        const { data } = await api.get('/sensor');

    } catch (error) {

    }
}