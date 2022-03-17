import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



const DisplayAll = (props) => {


    const { allProducts, setAllProducts } = props;


    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setAllProducts(res.data)
            })
            .catch((err) => console.log(err));
    }, [])

    return (
        <div>
            <h2 style={{marginTop: "50px"}}>Product List</h2>

            {
                allProducts.map((product, index) => {
                    return (
                        <div className="listContainer" key={product._id}>
                            <p className="listStyles"><Link to={`/product/${product._id}`}>{product.productName}</Link></p>
                        </div>
                    )
                })
            }

        </div>

    )

}

export default DisplayAll