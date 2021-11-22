import React from "react";

function Product({productName, productPrice, productImage, productLabel}) {

    return (
        <article className="product">
            <span>{productLabel}</span>
            <img src={productImage} alt={productName}/>
            <p>{productName}</p>
            <h4>&euro;{productPrice},-</h4>
        </article>
    );
}

export default Product;



