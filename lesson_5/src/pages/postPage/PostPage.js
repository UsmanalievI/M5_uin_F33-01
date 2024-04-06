import React from 'react'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import { changeTitle, changeTitleParams, getPosts } from '../../redux/PostSlice'

function PostPage() {
    const dispatch=useDispatch()
    const {title, posts}=useSelector(state=>state.postsReducer)

    const changeTitlePost=()=>{
        dispatch(changeTitle())
    }
    console.log(posts);
  return (
    <div>
        <h1>{title}</h1>
        <button onClick={changeTitlePost}>change title</button>
        <button onClick={()=>dispatch(changeTitleParams('Hello GEEKS'))}>change title params</button>
        <button onClick={()=>dispatch(getPosts())}>get posts</button>
        <button>delete all</button>
    </div>
  )
}

export default PostPage