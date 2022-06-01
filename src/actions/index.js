import gotApi from '../api/got';

export const fetchCharacters = () => async (dispatch) => {
    const response = await gotApi.get('/Characters');

    dispatch({
        type: 'FETCH_CHARACTERS',
        payload: response.data
    })
}
