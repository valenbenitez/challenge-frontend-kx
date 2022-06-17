import axios from "axios";
import store from '../redux/store/index'

const host = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3001'
let url = `${host}/comercios?_page=1&_limit=10`
let queryParams = {}

export const filterByAct = async (input) => {
    if (queryParams.activo) {
        url = `${host}/comercios?_page=1&_limit=10`
        url = url + `&activo=${input}&`
    } else {
        queryParams.activo = input
        url = url + `&activo=${input}&`
    }
    console.log(url);
    const { data } = await axios.get(url)
    return data
}

export const filterById = async (id) => {
    const { data } = axios.get(`${host}/comercios?_page=1&_limit=10&id=${id}`)
    console.log(`${host}/comercios?_page=1&_limit=10&id=${id}`);
    return data
}