import React, { useState } from "react";

const FormAddProduct = ({handleOnSubmit})=>{
    const [name, setNameProduct] = useState();
    const [price, setPriceProduct] = useState();

    const _handleOnSubmit=(e)=>{
        e.preventDefault();
        handleOnSubmit({name, price});
        setNameProduct('');
        setPriceProduct('');
    }

    return(
        <>
        <div>
            <form onSubmit={_handleOnSubmit}>
                <label>Name: </label>
                <input type='text' onChange={(e)=>setNameProduct(e.target.value)}
                value={name} id="name"></input>
                <br/>
                <label>Price: </label>
                <input type="number" onChange={(e) => setPriceProduct(parseInt(e.target.value))} value={price} id="price"></input>
                <br/>
                <button onClick={_handleOnSubmit}>Add Product</button>
            </form>
        </div>
        </>
    )
}

export default FormAddProduct;