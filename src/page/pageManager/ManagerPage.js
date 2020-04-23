import React from 'react';
import callApi from './../../utils/apicaler';
import {storage} from './../../utils/ConfigFirebase';
import Checkbox from '@material-ui/core/Checkbox';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import NavMeauBar from './const_childer/nav_meau';
import '.././puclic/scss/style.css';    

    
class ManagerPage extends React.Component{
    constructor(props){
            super(props);

            this.state = {
                products : [],
                loader:"",
                showMeau:"",
                heyConten:"",
                active:true,
                redirct:0
            }
        }


    componentDidMount(){
    	callApi('manager', 'GET', null).then(res =>{
			this.setState({
				products : res.data,
				redirct : res.status
			})
		})

    }

    deleteCall = (id) =>{
    	var {products} = this.state;
    	callApi(`delete/${id}`, 'GET', null).then(res =>{
	   			if( res.status === 200){
	   				var index = this.findIndex(products, id);
	   				if(index !== -1){
	   					products.splice(index, 1);
	   					this.setState({
	   						products:products
	   					})
	   				}
	   			}
			})
    }

    onDelete = (id) =>{
		
	   	if(confirm('ban co chan chan muon xoa ? ')){ // eslint-disable-line

	   		{this.deleteCall(id)}
	   		
	   	}
		
	}
	findIndex = (products, id) =>{
		var result = -1;
			products.forEach((post, index)=>{
				if(post._id === id){
					result = index;
				}
			})
		return result;
	}
	showMeau = () =>{
		this.setState({
			showMeau:"showMeau",
			heyConten:"heyConten"
		})
	}
	closeMeau = () =>{
		this.setState({
			showMeau:"",
			heyConten:""
		}) 
	}




    render(){
    	
		const {products, loader, showMeau, heyConten, redirct} = this.state
		setInterval(() => {
    		if( redirct === 200){
    			this.setState({ loader: "loaders" });
    		}
     	}, 500);
    	var showTable = products.map((product, index)=>{
    		return ( 
			    <tr key={index}>
			      <th scope="row">{index + 1}</th>
			      <td>
			      	<img src={`http://localhost:4000${product.imgeFile}`}style={{width:"50px", height:"50px"}} />
			      </td>
			      <td >{product.products}</td>
			      <td>{` ${product.price}$`}</td>
			      <td>{product.species}</td>
			      <td>
			      	<Checkbox onClick={()=> this.onDelete(product._id, product.imgeFile)}/>
			      </td>
			    </tr>
    		)
    	})
        return(
        	<div>
        		{ loader === "loaders" ? "" : <div className="loader loader-black loader-1"></div>}
				<div className={`container-fluid custom-fluid ${loader}`}>
			    	<div className="row custom_row">
			    		<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 custom_col">
			    			<div className="wapper">
			    				<div className={`nav_bar ${showMeau}`}>
			    					<h3>elsoule</h3>
			    					<hr/>
			    					<NavMeauBar active={this.state.active}/>
			    				</div>
			    				<div className={`conten ${heyConten}`}>
			    						{ heyConten === "heyConten" ? <div className="meau_mobi" onClick={this.closeMeau}> <CloseIcon /> </div> : <div className="meau_mobi" onClick={this.showMeau}> <MenuIcon /> </div> }
			    					<h3>Table List</h3>
			    					<div className="table_list">
			    						<table className="table table-striped">
										  <thead>
										    <tr>
										      <th scope="col">ID</th>
										      <th scope="col">Image</th>
										      <th scope="col">Product</th>
										      <th scope="col">Price</th>
										      <th scope="col">Species</th>
										      <th scope="col">Master</th>
										    </tr>
										  </thead>
										  <tbody>
											{showTable}
										  </tbody>
										</table>
			    					</div>
			    				</div>
			    			</div>
			    		</div>
			    	</div>
			    </div>			    
			</div>			    
        	)
    }
    
}

export default ManagerPage;