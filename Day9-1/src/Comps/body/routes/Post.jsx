import { useEffect } from "react";
import axios from "axios";
import "./post.css";
import ShowDetails from "./showDetails";
import { useState } from "react";

const Post = (props)=>{
    const id = props.userId
    const users = props.data
    const [posts , setPosts] = useState([])
    const [postId , setPostId] = useState()
    const [details , setDetails] = useState(false)
    // console.log(users)

    useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
      setPosts(res.data)
      console.log(res.data)
    })
    .catch((e)=>{
        console.log(e.message)
    })
    },[])
    const filteredPost = posts.filter(item => item.userId === users[id].id)

    const handleViewPage = (idx)=>{
        // console.log(idx)
setPostId(idx)
setDetails(true)
    }
    // console.log(filteredPost)
    return (
        <>
        {!details && <div className="post-wrapper">
            <div className="card1">
                <div className="Uname">{users[id].name}  </div>
                <div className="mob">Mobile :{users[id].phone}</div>
                <div className="styl">Posts:{filteredPost.length}</div>
                <div className="styl">Likes:{Math.floor(Math.random()*1000)}</div>
            </div>
            <div className="card2">
                {filteredPost.map((items , idx)=>(
                    <div className="title" key={idx} onClick={()=>{handleViewPage(items.id)}}><div className="head">{items.title}</div> 
                    <div className="dat">Date:{Math.floor(Math.random()*30)}/{Math.floor(Math.random()*12)}/2022</div>
                     <div className="lik">Likes:{Math.floor(Math.random()*100)}</div></div>
                ))}
            </div>

        </div>}
        {details?<ShowDetails postId={postId} posts={filteredPost} author={users[id].name} />:''}
        </>
    )

}

export default Post