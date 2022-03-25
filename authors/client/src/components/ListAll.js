import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";




const ListAll = (props) => {

    const { allAuthors, setAllAuthors } = props;


    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setAllAuthors(res.data)
            })
            .catch((err) => console.log(err));
    }, [])

    const deleteAuthor = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/authors/${idFromBelow}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setAllAuthors(allAuthors.filter(author => author._id !== idFromBelow))
            })
            .catch((err) => console.log(err));
    }

    return (
        <div style={{marginTop: "40px", marginBottom: "40px"}}>
            <h2 style={{ marginTop: "50px" }}>Author List</h2>
            <Link to={"/authors/add"}>Add Author</Link>
            {
                allAuthors.map((author, index) => {
                    return (
                        <div className="authorBackground" key={index}>
                            <div className="listContainer" key={author._id}>
                                <p className="listStyles">{author.authorName}</p>
                                <button className="deleteButton" onClick={() => deleteAuthor(author._id)}>Delete</button>
                            </div>
                            
                            <div className="editLink"><Link to={`/authors/edit/${author._id}`}>Edit</Link>
                            </div>
                        </div>
                    )
                })
            }

        </div>

    )

}

export default ListAll