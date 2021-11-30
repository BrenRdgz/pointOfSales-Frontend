import axios from 'axios';

const baseUrl ='https://point-of-sales-api-bren.herokuapp.com/v1';

export async function saveSale(saleData){
    try{
        const response = await axios({
            url:`${baseUrl}/sales`,
            method: 'POST', 
            data:saleData 
        })
    return response;
}catch(e){
    console.log(e);
}
}

export async function getSales(){
    try{
        const response = await axios({
            url: `${baseUrl}/sales`,
            method: 'GET'
        })
        return response;
    }catch(e){
        console.log(e);
    }
}

export async function updateSaleStatus(id){
    try{
        const response = await axios ({
            url:  `${baseUrl}/sales/${id}`,
            method: 'POST',
        })
        return response;
    }catch(e){
        console.log(e);
    }
}
