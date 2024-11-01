import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";


export const getPosts = createAsyncThunk(
    'getPosts', 
    async function (_, {dispatch}) {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await response.json()
        dispatch(postsData(posts))
    }
) 

const postSlice = createSlice({ // Создаем reducer
    name: 'postSlice',
    initialState: {
        title: 'old title',
        posts: []
    },
    reducers: {
        postInfo: (state, action) => {
            state.title = 'newTitle'
        },
        withParams: (state, action) => {
            state.title = action.payload
        },
        postsData: (state, action) =>{
            state.posts = action.payload
        }
    }
})


export const { postInfo, withParams, postsData } = postSlice.actions // Экспортируем action, а не reducer


export default postSlice.reducer