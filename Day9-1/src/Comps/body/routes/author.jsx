import { useEffect, useState } from "react";
import Header from "../../header/header";
import "./author.css"
import axios from "axios"
import Post from "./Post";


const AuthorRoute = ()=>{
    const [users , setUsers] = useState([])
    const [Click,setClick] = useState(false)
    const [loading , setLoading] = useState(true)
    const [id , setId] = useState()
   
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            setUsers(res.data)
            console.log(res.data)
            setLoading(false)
        })
        .catch((e)=>{
            alert(e.message)
        })

    },[])
    const handleRoute = (idx) =>{
        console.log(idx)
        setClick(true)
        setId(idx)
    }
   
    return (
        <>
        <Header/>
        {loading?(<div>Loading Please Wait....</div>):''}
        <div className="card-wrapper">
            {!Click && !loading && users.map((data , idx)=>(
                <div className="card" key={idx}>
                    <div className="name">{data.name}</div>
                    <button onClick={()=>{handleRoute(idx)}}>Click to View Profile</button>
                </div>
            ))}
        </div>
        {Click?(<Post userId={id} data={users}/>):''}
        </>
    )
}

export default AuthorRoute;