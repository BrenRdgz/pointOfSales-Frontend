import Container from '@mui/material/Container';
import { getSales, updateSaleStatus } from '../components/sales/services';
import Grid from '@mui/material/Grid';
import ListSales from '../components/sales/ListSales';
import Loading from '../components/sales/LoadingSales';
import React, {useState, useEffect} from 'react';

export default function Sales() {
    const [isLoadingSales, setIsLoadingSales] = useState(true);
    const [sales, setSales] = useState([]);
    
    async function loadSales(){
        const response = await getSales();
        if(response.status ===200){
            setSales(response.data.sales);
        }
        setIsLoadingSales(false);
    }
    const handleStatusSale= async (id) =>{
        await updateSaleStatus(id);
        loadSales();
    }
    const handleDetails = (sale)=>{
        console.log(`date: ${sale.date}`);
        console.log(`total: ${sale.total}`);
        sale.products.map((product)=>{
          product.map((oneProduct)=>{          
            console.log(`product: ${oneProduct.name} price: ${oneProduct.price} quantity: ${oneProduct.qty}`)
          })
        })
      }

    useEffect(()=>{
        loadSales()
    },[]);

    return (
        <Container >
            <Grid container spacing={2}>
                <Grid xs={8}>    
                    <h1>Sales</h1>
                    {
                        isLoadingSales && <Loading/>
                    }
                    {
                        !isLoadingSales&&!sales.length && <h2>You don't have sales</h2>
                    }
                    {
                        !isLoadingSales && sales.length && <ListSales sales={sales} handleStatusSale={handleStatusSale} handleDetails={handleDetails}></ListSales>
                    } 
                </Grid>
            <Grid xs={4}>
                    <h1>Details</h1>
                    
                </Grid>
            </Grid>
        </Container>
    )
}
