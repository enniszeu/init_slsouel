import * as types from '.././contants/ActionTyes';
import axios from 'axios';

const request = axios.get(`https://sdgfsdgdfgzsdfg.herokuapp.com`)


export const productAll =()=> {
	return {
		type: types.PRODUCT_ALL,
		payload: request
	}
}

