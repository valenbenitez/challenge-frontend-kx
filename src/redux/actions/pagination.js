import { changePage } from '../../services/pagination'
import { GET_COMERCIOS } from '../constants/index'

export const nextPage = page => {
    return async function (dispatch) {
        page = page + 1
        try {
            const data = await changePage(page)
            dispatch({
                type: GET_COMERCIOS,
                payload: data,
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const previousPage = page => {
    return async function (dispatch) {
        page = page - 1
        try {
            const data = await changePage(page)
            dispatch({
                type: GET_COMERCIOS,
                payload: data,
            })
        } catch (error) {
            console.log(error)
        }
    }
}