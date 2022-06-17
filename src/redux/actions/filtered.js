import { filterByAct } from '../../services/filtered'
import { GET_COMERCIOS, FULL_SEARCH } from '../constants/index'

const host = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3001'
const axios = require('axios')

export const filterActivo = input => {
    return async function (dispatch) {
        try {
            const filtered = await filterByAct(input)
            dispatch({
                type: GET_COMERCIOS,
                payload: filtered
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const filterId = id => {
    return function (dispatch) {
        axios.get(`${host}/comercios?_page=1&_limit=10&id=${id}`).then(comercios => {
            console.log(`${host}/comercios?_page=1&_limit=10&id=${id}`);
            dispatch({
                type: GET_COMERCIOS,
                payload: comercios.data,
            })
        })
    }
}