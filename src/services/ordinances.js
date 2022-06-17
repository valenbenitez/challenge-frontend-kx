import axios from "axios";
import store from '../redux/store/index'

const host = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3001'
let url = `${host}/comercios?_page=1&_limit=10`
let queryParams = {}

export const orderCommercesByCuit = async (input) => {
    queryParams.cuit = input
    if (queryParams.comercio) {
        url = `${host}/comercios?_page=1&_limit=10`
        url = url + `&_sort=CUIT,comercio&_order=${queryParams.cuit},${queryParams.comercio}`
    } else {
        url = `${host}/comercios?_page=1&_limit=10&_sort=CUIT&_order=${input}`
    }
    console.log(url);
    const { data } = await axios.get(url)
    return data
}

export const orderCommerces = async (input) => {
    queryParams.cuit = input
    if (queryParams.comercio) {
        url = `${host}/comercios?_page=1&_limit=10`
        url = url + `&_sort=CUIT,comercio&_order=${queryParams.cuit},${queryParams.comercio}`
    } else {
        url = `${host}/comercios?_page=1&_limit=10&_sort=CUIT&_order=${input}`
    }
    console.log(url);
    const { data } = await axios.get(url)
    return data
}