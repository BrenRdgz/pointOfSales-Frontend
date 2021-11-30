import React from 'react'
import BarChart from './BarChart';

export default function Data({sales}) {
    let salesCancelledTotal = 0;
    let salesOKTotal = 0;
    let productsRanking = [];
    sales.map((sale)=>{
        sale.products.map((product) =>{
            product.map((oneProduct)=>{
                productsRanking.push({"name": oneProduct.name,"qty": oneProduct.qty});
            })
        })
    })
    sales.map((sale)=>{
    sale.products.map((product)=>{
        product.map((oneProduct)=>{
          productsRanking.push({"name": oneProduct.name,"qty": oneProduct.qty});
            //console.log(`product: ${oneProduct.name} price: ${oneProduct.price} quantity: ${oneProduct.qty}`)
        })
      })
    })
    sales.map((sale)=>{
        if(sale.isCancelled === true){
            salesCancelledTotal = salesCancelledTotal+sale.total;
        }
        else{
            salesOKTotal = salesOKTotal+sale.total;
        }
    })
    return (
        <div>
            <label>Total sales: ${salesOKTotal+salesCancelledTotal}</label>
            <br/>
            <label>Money Sales: ${salesOKTotal}</label>
            <br/>
            <label>Money Sales Cancelled: ${salesCancelledTotal}</label>
            <BarChart></BarChart>
        </div>
    )
}
