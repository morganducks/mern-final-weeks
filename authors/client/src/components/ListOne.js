import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
// import DeleteButton from "../components/DeleteButton";
// import Header from "../components/Header"

const DisplayOne = (props) => {

    const { id } = useParams();
    const [oneAuthor, setOneAuthor] = useState({});
    const navigate = useNavigate();


    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + id)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setOneAuthor(res.data)
            })
            .catch((err) => console.log(err));
    }, [id])



    const handleDelete = (e) => {
        axios.delete("http://localhost:8000/api/authors/" + id)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/authors")
            })
            .catch((err) => console.log(err));
    }

    return (
        <div>
        <h1>{oneAuthor.authorName}</h1>
        <div>
        <button><Link to="/authors" style={{textDecoration: "none"}}>Back Home</Link></button>
        </div>
        <button className="deleteButton" onClick={handleDelete}>Delete</button>
        </div>

    )

}

export default DisplayOne