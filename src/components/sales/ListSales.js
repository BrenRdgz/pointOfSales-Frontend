import {List} from '@mui/material';
import React from "react";
import SalesTable from "./TableSales";

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };
  

const ListSales = ({sales, handleStatusSale, handleDetails})=>{
    return (
        <List sx={style} component="nav" aria-label="mailbox folders">            
            <>
            <SalesTable sales={sales} handleStatusSale={handleStatusSale} handleDetails={handleDetails} />
            </>
     </List>
    )
}

export default ListSales;