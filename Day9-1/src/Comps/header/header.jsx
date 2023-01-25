
import {useNavigate } from "react-router-dom";
import "./header.css";


const Header = ()=>{

    const navigate = useNavigate()

const handleMainRoute =()=>{

navigate("/")
}
function handleLikeRoute(){

    navigate("/mostliked")
    
}
const handleCommentRoute =()=>{
    navigate("/mostcommented")

}
    return (
        <>
        <div className="wrapper">
            <button className="btn1" onClick={handleMainRoute}>JSOM</button>
            <button className="white" onClick={handleMainRoute}>Authors</button>
           <button className="gray" onClick={handleLikeRoute}>MostLikedPost</button>
            <button className="gray" onClick={handleCommentRoute}>MostCommentedPost</button>
        </div>
        </>
    )
}

export default Header