import React, { useState, useEffect } from "react";
import axios from "axios";
import ListAll from "../components/ListAll"



const Main = (props) => {

    const [allAuthors, setAllAuthors] = useState([]);



    return (
        <div>
            <ListAll allAuthors={allAuthors} setAllAuthors={setAllAuthors} />
        </div>
    )

}

export default Main