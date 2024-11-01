import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts, postInfo, withParams } from '../../store/PostSlice'

export default function PostPage() {

    const {title, posts} = useSelector(state => state.PostReducer)
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const changePostTitle = () =>{
        dispatch(postInfo())
    }

    const changePostWithParams = () =>{
        dispatch(withParams(input))
    }

    const clearTitle = () =>{
        dispatch(withParams(''))
    }

    useEffect(() =>{
        dispatch(getPosts())
    },[])

    console.log(posts);
    

  return (
    <div>
        <h1>{title}</h1>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        <button onClick={changePostTitle}>change title</button>
        <button onClick={changePostWithParams}>change with params</button>
        <button onClick={clearTitle}>clear title</button>

        {/* <button>Get posts</button>
        <button>Delete all</button> */}
    </div>
  )
}
