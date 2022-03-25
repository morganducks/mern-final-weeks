import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'


const Form = (props) => {

    const { allAuthors, setAllAuthors } = props;
    const [authorName, setAuthorName] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();



    const submitHandler = (e) => {

        e.preventDefault();
        axios.post("http://localhost:8000/api/authors", {
            authorName,
        })

            .then((res) => {
                console.log(res);
                console.log(res.data);
                setAuthorName("");
                navigate("/");
            })
            .catch((err) => {
                console.log(err)
                console.log("err.response:", err.response);
                console.log("err.response.data:", err.response.data);
                console.log("err.response.data.errors:", err.response.data.errors);
                setErrors(err.response.data.errors);

            })
    }

//w6d2 code
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div
                    style={{ marginTop: "40px", marginBottom: "40px" }}>
                    <h1>Add an Author</h1>
                    <div className="authorRow">
                        <label htmlFor="Name">Author Name</label>
                        <input type="text" name="Name" onChange={(e) => setAuthorName(e.target.value)}
                            value={authorName}
                        />
                                                                {
                        errors.authorName?
                        <span>{errors.authorName.message}</span>
                        :null
                    }
                        <button>Add author</button>
                    </div>
                </div>
            </form>
            <button className="cancelButton"><Link to="/">Cancel</Link></button>
        </div>
    )

}

export default Form;