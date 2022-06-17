import { GET_COMERCIOS } from '../constants/index'
import { orderCommercesByCuit, orderCommerces } from '../../services/ordinances'

const axios = require('axios')

export const orderComercio = input => {
    return async function (dispatch) {
        try {
            const order = await orderCommerces(input)
            dispatch({
                type: GET_COMERCIOS,
                payload: order
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const orderCuit = input => {
    return async function (dispatch) {
        try {
            const sorted = await orderCommercesByCuit(input)
            dispatch({
                type: GET_COMERCIOS,
                payload: sorted,
            })
        } catch (error) {
            console.log(error)
        }
    }
}