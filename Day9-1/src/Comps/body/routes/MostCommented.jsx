import { useEffect , useState } from "react"
import Header from "../../header/header"
import axios from "axios"
const MostComment = ()=>{
    const [posts , setPosts] = useState([])
 

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
  
    let Id = Math.floor(Math.random()*10)
    const filteredPost = posts.filter(item => item.userId === Id)
    return (
        <>
        <Header/>
        { filteredPost.map((items , idx)=>(
                    <div className="title" key={idx} ><div className="head">{items.title}</div> 
                    <div className="dat">Date:{Math.floor(Math.random()*30)}/{Math.floor(Math.random()*12)}/2022</div>
                     <div className="lik">Comments:{Math.floor(Math.random(5)*10)}</div></div>
                ))}
                
       </>
    )
}

export default MostComment