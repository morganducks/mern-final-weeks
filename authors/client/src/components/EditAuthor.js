import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
// import Header from "../components/Header"


const EditAuthor = (props) => {

    const { allAuthors, setAllAuthors } = props;
    const [authorName, setAuthorName] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setAuthorName(res.data.authorName)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, {
            authorName,
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                console.log("edited")
                navigate("/")
            })
            .catch((err) => {
                console.log(err)
                console.log("err.response:", err.response);
                console.log("err.response.data:", err.response.data);
                console.log("err.response.data.errors:", err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }


    return (
        <div>
        <form onSubmit={submitHandler}>
            <div
                style={{ marginTop: "40px", marginBottom: "40px" }}>

                <div className="productRow">
                    <label htmlFor="Name">Author Name</label>
                    <input value={authorName} type="text" name="Name" onChange={(e) => setAuthorName(e.target.value)}
                        
                    />
                                        {
                        errors.authorName?
                        <span>{errors.authorName.message}</span>
                        :null
                    }
                </div>

                <button>Edit Author</button>
                <button className="cancelButton"><Link to="/">Cancel</Link></button>
            </div>
        </form>
        </div>
    )

}

export default EditAuthor