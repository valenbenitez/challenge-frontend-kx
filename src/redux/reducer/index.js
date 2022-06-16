import { GET_COMERCIOS, FULL_SEARCH } from "../constants"

const initialState = {
    comercios: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMERCIOS:
            return {
                ...state,
                comercios: action.payload
            }

        case FULL_SEARCH:
            return {
                ...state,
                comercios: action.payload
            }

        default:
            return {
                ...state
            }
    }
}

export default rootReducer
