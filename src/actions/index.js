import jsonPlaceHolder from '../api/jsonPlaceHolder'

//function that returns function, must use redux thunk to implement
export const fetchPosts = () => async dispatch=> {
    const response = await jsonPlaceHolder.get('/posts')
    dispatch({ type: 'FETCH_POSTS', payload: response.data})
}
