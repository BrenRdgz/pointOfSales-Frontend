import Data from '../components/dashboard/Data';
import { getSales } from '../components/sales/services';
import LoadingDashboard from '../components/dashboard/LoadingDashboard';
import React, {useState,useEffect} from 'react'

export default function Dashboard() {
    const [isLoadingDashboard, setIsLoadingDashboard] = useState(true);
    /*const [sales, setSales] = useState([]);
    
    async function loadSalesDash(){
        const response = await getData();
        if(response.status ===200){
            setSales(response.data.sales);
        }
        setIsLoadingDashboard(false);
    }*/
    const [sales, setSales] = useState([]);
    
    async function loadSales(){
        const response = await getSales();
        if(response.status ===200){
            setSales(response.data.sales);
        }
        setIsLoadingDashboard(false);
    }
    useEffect(()=>{
        loadSales()
    },[]);

    return (
        <div>
            <h1>Dashboard</h1>
                    {
                        isLoadingDashboard && <LoadingDashboard/>
                    }
                    {
                        !isLoadingDashboard&&!sales.length && <h2>You don't have graphs</h2>
                    }
                    {
                        !isLoadingDashboard && sales.length && <Data sales={sales}></Data>
                    } 
        </div>
    )
}
