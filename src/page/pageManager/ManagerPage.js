import React from 'react';
import callApi from './../../utils/apicaler';
import {storage} from './../../utils/ConfigFirebase';
import Checkbox from '@material-ui/core/Checkbox';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import NavMeauBar from './const_childer/nav_meau';
import '.././puclic/scss/style.css';    
import {
  Link,
  Redirect
} from "react-router-dom";

    
class ManagerPage extends React.Component{
    constructor(props){
            super(props);

            this.state = {
                products : [],
                loader:"",
                showMeau:"",
                heyConten:"",
                active:true,
                redirct:0,
                showProductOpacity:"",
                showProductImage:"",
                showProductName:"",
                onshowProductImage:"",
                file:""
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
	showProduct=(name, image)=>{
		// console.log(name)
		this.setState({ showProductOpacity: "showProductOpacity", onshowProductImage:"onshowProductImage" ,showProductImage:image,	showProductName:name })
	}
	closeIconeImg=()=>{
		this.setState({ showProductOpacity: "", onshowProductImage:"" })
	}

	onChangeImage1=(e)=>{
        let file = e.target.files[0];
          this.setState({
            file: file
          }); 
    }

	callApiFunc = (name) => {
        var { file } = this.state;

        const formData = new FormData();
        formData.append('imgeFile1',file);
        formData.append('products',name);


        callApi('create/addimg', 'POST', formData).then(res =>{
            // this.setState({redirct : res.status})
        }) 
       	
       	setTimeout(function(){ window.location.reload() }, 500);
    }





    render(){
    	
		const {linkto, products, loader, showMeau, heyConten, redirct, showProductOpacity, showProductImage, onshowProductImage, showProductName} = this.state
		setInterval(() => {
    		if( redirct === 200){
    			this.setState({ loader: "loaders" });
    		}
     	}, 500);
     	// console.log(showProductName)
    	var showTableImgConten = products.map((product, index)=>{
    		return ( 
			    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" id={ product.off === "off" ? "" : "display_not"} key={index}>
					<div className="conten_image_product1" >
						<img style={ product.price ? {display:"none"} : {}} src={`https://glaze-playful-traffic.glitch.me/${product.imgeFile1}`} />
						<Checkbox style={ product.price ? {display:"none"} : {position:"absolute",left:"70%"}} onClick={()=> this.onDelete(product._id)}/>
					</div>
				</div>
    		)
    	})

    	var showTable = products.map((product, index)=>{
    		return ( 
			    <tr key={index} id={ product.off === "off" ? "display_not" : ""}>
			      <th scope="row">{index + 1}</th>
			      <td>
			      	<img src={ product.imgeFile ? `https://glaze-playful-traffic.glitch.me/${product.imgeFile}` : ""} style={{width:"50px", height:"50px"}} />
			      </td>
			      <td >{product.products}</td>
			      <td>{` ${product.price}$`}</td>
			      <td>{product.species}</td>
			      <td>
			      	<Checkbox onClick={()=> this.onDelete(product._id, product.imgeFile)}/>
			      		<div onClick={()=> this.showProduct(product.products, product.imgeFile)}>
			      			<Link to="/manager">
			      				<i className="fas fa-plus"></i>
			      			</Link>
			      		</div>
			      </td>
			    </tr>
    		)
    	})
        return(
        	<div>
        		{ loader === "loaders" ? "" : <div className="loader loader-black loader-1"></div>}
        		<div className={`showProductImage ${onshowProductImage}`}>
        			<div className="close_imgc1" onClick={this.closeIconeImg}><CloseIcon/> </div>
        			<div className="conten_image_product">
        				<img src={`https://glaze-playful-traffic.glitch.me/${showProductImage}`} />
        				<div className="row">
        					{showTableImgConten}
        					<input name="imgeFile1" className="form-control" type="file" onChange={this.onChangeImage1} />
        					<button type="submit" onClick={()=> this.callApiFunc(showProductName)} className="btn btn-default">button</button>
        				</div>
        			</div>
        		</div>
				<div className={`container-fluid custom-fluid ${loader} ${showProductOpacity}`}>
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