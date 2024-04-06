import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts=createAsyncThunk(
    'getPosts',
    async function (user, {dispatch}){
        const options={
            method: "POST",
            headers:{
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(user)
        }
        const response=await fetch('https://jsonplaceholder.typicode.com/posts', options)
        const data= await response.json()
        dispatch(postsInfoPosts(data))
    }
)

const postsSlice=createSlice({
    name: 'postsSlice',
    initialState:{
        user: []
    },
    reducers: {
        postsInfoPosts:(state, action)=>{
            state.posts=action.payload
        }
    }
})

export const { postsInfoPosts}=postsSlice.actions

export default postsSlice.reducer