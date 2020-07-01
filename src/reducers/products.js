import * as types from '.././contants/ActionTyes';

var initialState =  [];

var myReducer = (state = initialState, action)=>{
			console.log(types.PRODUCT_ALL)
	
	switch (action.type){
		case types.PRODUCT_ALL:
			return action.payload
		default: return state;
	}
	return state;
};

export default myReducer;

