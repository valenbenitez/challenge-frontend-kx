import { getComerciosList } from '../../services/commerces'
import { filterByAct, filterById } from '../../services/filtered'
import { orderCommercesByCuit, orderCommerces } from '../../services/ordinances'
import { changePage } from '../../services/pagination'
import { GET_COMERCIOS, FULL_SEARCH } from '../constants/index'

const axios = require('axios')

const host = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3001'
let url = `${host}/comercios?_page=1&_limit=10`
let queryParams = {}

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

// export const filterId = (id) => {
//   return async function (dispatch) {
//     try {
//       const data1 = await filterById(id)
//       dispatch({
//         type: GET_COMERCIOS,
//         payload: data1,
//       })
//     } catch (error) {
//       console.log(error)
//     }
//   }
// }

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