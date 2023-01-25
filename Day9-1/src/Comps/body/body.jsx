import "./body.css"
import {BrowserRouter , Routes , Route} from "react-router-dom";
import AuthorRoute from "./routes/author";
import MostLiked from "./routes/MostLiked";
import MostComment from "./routes/MostCommented";

const Body = () =>{
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<AuthorRoute/>}/>
            <Route path="/mostliked" element={<MostLiked/>}/>
            <Route path="/mostcommented" element={<MostComment/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Body