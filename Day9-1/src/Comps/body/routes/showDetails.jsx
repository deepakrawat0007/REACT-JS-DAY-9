import { useEffect, useState } from "react"
import axios from "axios"
import "./post.css"

const ShowDetails = (props)=>{
    const {postId , posts , author} = props
    const [comments , setComments] = useState([])
    const post =  posts.find(element => element.id === postId)
//    console.log(post)
useEffect(()=>{
axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
.then((res)=>{
    console.log(res.data)
    setComments(res.data)
})
.catch((e)=>{
    console.log(e.message)
})
},[])
    
    return (
        <>
        <div className="details">
            <div className="heading">{post.title}</div>
            <div className="Body">{post.body}</div>
            <div className="date">Date:{Math.floor(Math.random()*30)}/{Math.floor(Math.random()*12)}/2022</div>
            <div className="auth">Author:{author}</div>
            <div>likes:{Math.floor(Math.random()*100)}</div>
            </div>
            <div className="comments">
                <h3>Comments</h3>
              {comments.map((items,idx)=>(
                <div className="comm-card" key={idx}>
                    <div className="Name"><strong><i>{items.name}</i></strong></div>
                    <div className="Email"><strong><i>{items.email}</i></strong></div>
                    <div className="comm"><strong>Comment:</strong>{items.body}</div>
                </div>
              ))}
            </div>
       
        </>
    )
}

export default ShowDetails