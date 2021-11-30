import axios from 'axios';

const baseUrl = 'https://point-of-sales-api-bren.herokuapp.com/v1';

export async function getProducts(){
    try{
        const response = await axios({
            url: `${baseUrl}/products`,
            method: 'GET'
        })
        return response;
    }catch(e){
        console.log(e);
    }
}

export async function createProduct(productData){
    try{
        const response = await axios({
            url: `${baseUrl}/products`,
            method: 'POST', 
            data:productData
        })
        return response;
    }catch(e){
        console.log(e);
    }
}

