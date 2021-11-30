import CustomPaginationActionsTable from "./TableProducts";
import {List} from '@mui/material';
import React from "react";

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };
  

const ListProducts = ({products, addToCart})=>{
    return (
        <List sx={style} component="nav" aria-label="mailbox folders">            
            <>
            <CustomPaginationActionsTable products={products} addToCart={addToCart}/>
            </>
     </List>
    )
}

export default ListProducts;