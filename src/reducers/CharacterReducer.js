export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CHARACTER_INFO': {
            return [...state, action.payload]
        }
        default: {
            return state
        }
    }
}