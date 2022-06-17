import axios from "axios";
import store from '../redux/store/index'

const host = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3001'
let url = `${host}/comercios?_page=1&_limit=10`
let queryParams = {}

export const changePage = async (page) => {
    const { data } = await axios.get(`${host}/comercios?_page=${page}&_limit=10`)
    console.log(`${host}/comercios?_page=${page}&_limit=10`);
    return data
}