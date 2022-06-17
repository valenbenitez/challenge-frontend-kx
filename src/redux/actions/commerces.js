import { GET_COMERCIOS, FULL_SEARCH } from '../constants/index'
import { getComerciosList } from '../../services/commerces'

const axios = require('axios')

const host = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3001'


export const getComercios = () => {
    return async function (dispatch) {
        try {
            const list = await getComerciosList()
            dispatch({
                type: GET_COMERCIOS,
                payload: list
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const fullSearch = input => {
    return async function (dispatch) {
        try {
            const result = await axios.get(`${host}/comercios?_page=1&_limit=10&q=${input}`)
            console.log(`${host}/comercios?_page=1&_limit=10&q=${input}`);
            return dispatch({
                type: FULL_SEARCH,
                payload: result.data,
            })
        } catch (error) {
            console.log(error)
        }
    }
}