import CartProducts from "../components/products/CartProducts";
import Container from '@mui/material/Container';
import { createProduct, getProducts} from "../components/products/services";
import FormAddProduct from "../components/products/FormAddProduct";
import Grid from '@mui/material/Grid';
import ListProducts from "../components/products/ListProducts";
import Loading from "../components/products/Loading";
import React, {useState, useEffect} from "react";
import { saveSale } from "../components/sales/services";

export default function Store(){
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [itemsCart,setItemsCart] = useState([]);
    const [totalSale, setTotalSale] = useState(0);
    const [amount, setAmount] = useState(0);
    const [disabledButton, setDisabledButton] = useState(true);
   
    const removeFromCart = (product) => {
        const exist = itemsCart.find((x) => x._id === product._id);
        if (exist.qty === 1) {
            setItemsCart(itemsCart.filter((x) => x._id !== product._id));
        } else {
            setItemsCart(
            itemsCart.map((x) =>
              x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
            )
          );
        }
      };
    const addToCart = (product) => 
    {
        const exist = itemsCart.find((x) => x._id === product._id);
        if (exist) {
            setItemsCart(
            itemsCart.map((x) =>
              x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
            )
          );
          setTotalSale(totalSale+parseInt(product.price));
        } else {
            setItemsCart([...itemsCart, { ...product, qty: 1 }]);
          setTotalSale(totalSale+parseInt(product.price));
        }
      };

    async function loadProducts(){
        const response = await getProducts();
        if(response.status ===200){
            setProducts(response.data.products)
        }
        setIsLoading(false);
    }

    useEffect(()=>{
        loadProducts();
    },[]);

    const handleOnSubmit=async (data) =>{
        if(data.name && !isNaN(data.price)){
            await createProduct(data);
            loadProducts();
        }
        else{
            alert("Missing information");
        }
        
    }
    const activateButton = (e)=>{
        setAmount(e.target.value);
        if(amount < totalSale)
          setDisabledButton(false);
    }

    const handleSale = async ()=>{
        alert("successful sale");
        const newDate = new Date();
        //const dateSale = newDate.toLocaleDateString();
        const saleData = {
            date: newDate,
            total: totalSale,
            products:[itemsCart]
        }
        await saveSale(saleData);
        //console.log(saleData);
        setItemsCart([]);
        setTotalSale([]);        
    }
    
    return(
        <Container >
            <Grid container spacing={2}>
                <Grid xs={8}>
                <h1>Products</h1>
                <FormAddProduct handleOnSubmit={handleOnSubmit}/>
            {
                isLoading && <Loading/>
            }
            {
                !isLoading&&!products.length && <h2>You don't have products</h2>
            }
            {
                !isLoading && products.length && <ListProducts products={products} addToCart={addToCart}></ListProducts>
            }
            
                </Grid>
                <Grid xs={4}>
                    <h1>Cart</h1>
                    {
                        !itemsCart.length&&<h2>Cart is empty</h2>
                    }
                    {
                        itemsCart.length&&
                        (
                        <>
                        <CartProducts itemsCart={itemsCart} addToCart={addToCart} removeFromCart={removeFromCart}/>
                        
                        <label>Total: {`$ ${totalSale}`} </label>
                        <div>
                        <label>Amount: </label> 
                        <br/>
                        <input type="text"value={amount} id="amount" onChange={activateButton}></input>
                        <br/>
                        <label>Change: {`$ ${parseInt(amount) - totalSale}`}</label>
                        <br/>
                        <button id="finishSale" disabled={disabledButton} onClick = {handleSale}>Finish sale</button>
                        </div>
                        </>
                        )
                    }
                </Grid>
            </Grid>
        </Container>
    )
}