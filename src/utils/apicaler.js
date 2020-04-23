import axios from 'axios';
import * as Config from './Config';

export default function callApi(endpoin, method = 'GET', body,){
	return axios({
    		method:method,
    		url:`${Config.API_URL}/${endpoin}`,
    		data:body,
    		headers: {
                    "content-type": "application/json"
                },
    	})
		.catch(err => {
    		console.log(err)
    	})
}