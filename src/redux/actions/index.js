import { GET_COMERCIOS, FULL_SEARCH } from '../constants/index'

const axios = require("axios")

let url = `http://localhost:3000/comercios?_page=1&_limit=10&`
let queryParams = {}

export const getComercios = () => {
    return function (dispatch) {
        axios.get('http://localhost:3000/comercios?_page=1&_limit=10')
            .then(comercios => {
                dispatch({
                    type: GET_COMERCIOS,
                    payload: comercios.data
                })
            })
    }
}

export const fullSearch = (input) => {
    return async function (dispatch) {
        try {
            const result = await axios.get(`http://localhost:3000/comercios?_page=1&_limit=10&q=${input}`)
            return dispatch({
                type: FULL_SEARCH,
                payload: result.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const orderComercio = (input) => {
    return function (dispatch) {
        queryParams.comercio = input
        if (queryParams.cuit) {
            url = 'http://localhost:3000/comercios?_page=1&_limit=10&'
            url = url + `_sort=comercio,CUIT&_order=${queryParams.comercio},${queryParams.cuit}&`
        } else {
            url = 'http://localhost:3000/comercios?_page=1&_limit=10&'
            url = url + `_sort=comercio&_order=${input}&`
        }
        axios.get(url)
            .then(comercios => {
                dispatch({
                    type: GET_COMERCIOS,
                    payload: comercios.data
                })
            })
    }
}

export const orderCuit = (input) => {
    return function (dispatch) {
        queryParams.cuit = input
        if (queryParams.comercio) {
            url = 'http://localhost:3000/comercios?_page=1&_limit=10&'
            url = url + `_sort=CUIT,comercio&_order=${queryParams.cuit},${queryParams.comercio}&`
        } else {
            url = 'http://localhost:3000/comercios?_page=1&_limit=10&'
            url = url + `_sort=CUIT&_order=${input}&`
        }
        axios.get(url)
            .then(comercios => {
                dispatch({
                    type: GET_COMERCIOS,
                    payload: comercios.data
                })
            })
    }
}

export const filterActivo = (input) => {
    return function (dispatch) {
        if (queryParams.activo) {
            url = 'http://localhost:3000/comercios?_page=1&_limit=10&'
            url = url + `activo=${input}&`
        } else {
            queryParams.activo = input
            url = url + `activo=${input}&`
        }
        axios.get(url)
            .then(comercios => {
                dispatch({
                    type: GET_COMERCIOS,
                    payload: comercios.data
                })
            })
    }
}

export const nextPage = (page) => {
    return function (dispatch) {
        page = page + 1
        axios.get(`http://localhost:3000/comercios?_page=${page}&_limit=10&`)
            .then(comercios => {
                dispatch({
                    type: GET_COMERCIOS,
                    payload: comercios.data
                })
            })
    }
}

export const previousPage = (page) => {
    return function (dispatch) {
        page = page - 1
        axios.get(`http://localhost:3000/comercios?_page=${page}&_limit=10&`)
            .then(comercios => {
                dispatch({
                    type: GET_COMERCIOS,
                    payload: comercios.data
                })
            })
    }
}