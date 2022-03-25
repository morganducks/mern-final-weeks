// import React, {useState} from 'react'
// import {useParams} from 'react-router-dom'
// import axios from 'axios';

// const DeleteButton = (props) => {

//     const {allAuthors, setAllAuthors } = props;

//     const { id } = useParams();

//     const deleteAuthor = (idFromBelow) => {
//         axios.delete(`http://localhost:8000/api/product/${idFromBelow}`)
//             .then((res) => {
//                 console.log(res);
//                 console.log(res.data);
//                 setAllAuthors(allAuthors.filter(author => author._id !== idFromBelow))
//             })
//             .catch((err) => console.log(err));
//     }



// return(
// <button className="deleteButton" onClick={() => deleteAuthor(author._id)}>Delete</button>
// )


// }

// export default DeleteButton