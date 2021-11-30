import axios from 'axios';

const baseUrl = 'https://point-of-sales-api-bren.herokuapp.com/v1';

export async function getData(){
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
