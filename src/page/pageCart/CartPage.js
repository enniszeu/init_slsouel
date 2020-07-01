import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import NavBar from "../.././home/pageChild/NavBar";
import Intagram from "../.././home/pageChild/Intagram";
import Footer from "../.././home/pageChild/Footer";
import End from "../.././home/pageChild/End";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {
  Link,
  Redirect
} from "react-router-dom";

class CartPage extends React.Component{
	constructor(props){
            super(props);

            this.state = {
                loader:"",
                carts:[],
                cartId:0,
                qty:1,
                errUpload:"",
                errPay:"",
                redirect:""
            }
        }

        componentDidMount(){
        	var cart = JSON.parse(sessionStorage.getItem('products'));
        	this.setState({carts:cart})
            if(cart === null){
                console.log("!")
            }else{
                cart.map((carts, index)=>{
                    this.setState({cartId: index + 1})
                })
            }
        }
        totalCart=(carts)=>{
        	var total = 0;
        	if(carts.length >0){
        		for( const i in carts){
        			total += carts[i].price * carts[i].qty;
        		}
        	}
        	return total;
        }
        incre=(id)=>{
        	let {carts} = this.state;
        	{this.findIndex(carts, id)}
        }
        uncre=(id)=>{
        	let {carts} = this.state;
        	{this.findIndexTru(carts, id)}
        }
        closeCart=(id)=>{
        	let {carts} = this.state;
        	{this.findIndexClose(carts, id)}
        }
        findIndex(carts, id){
	        carts.map((cart, index)=>{
	            if(cart._id === id){
	                return cart.qty += 1;
	            }
	        })
	    }

	    findIndexTru(carts, id){
	        carts.map((cart, index)=>{
	        	if(cart.qty < 2){
	        		return true;
	        	}
	            if(cart._id === id){
	                return cart.qty -= 1;
	            }
	        })
	    }
	    findIndexClose(carts, id){
	        carts.map((cart, index)=>{
	            if(cart._id === id){
	                return carts.splice(index, 1);
	            }
	        })
	    }

	    uploadCart=()=>{
	    	let {carts} = this.state;
	    	this.setState({errUpload:"Cập nhật giỏ thành công", loader:""})

	    	sessionStorage.setItem("products", JSON.stringify(carts));
	    	
	    }
	    checkPay=()=>{
	    	let {errUpload} = this.state;
	    	if(errUpload === ""){
	    		this.setState({errPay:"Hãy cập nhật lại giỏ trước khi thanh toán", loader:""})
	    	}else{
	    		this.setState({redirect:<Redirect to="/CPSHang" />})
	    	}
	    }
    
	render(){
		const {redirect, loader, carts, cartId, errUpload, errPay} = this.state;
        setInterval(() => {
            this.setState({ loader: "loaders" });
        }, 1000);

        var showCart = carts.map((cart, index)=>{
        	return (
        		<div key={index}><img src={`https://planet-time-linseed.glitch.me/${cart.imgeFile} `}/>
        			
        			<span>
        				<div className="qty_see bobile_no">
	                        <input type="text" onChange={this.onChangeQty} name="quantity" value={cart.qty} className="input_text"/>
	                        <span className="qty_sp1">
	                            <ArrowDropUpIcon onClick={()=> this.incre(cart._id)} style={{fontSize:"30px"}}
	                            />
	                        </span>
	                        <span className="qty_sp2" style={{display:"block"}}>
	                            <ArrowDropDownIcon onClick={()=> this.uncre(cart._id)} style={{fontSize:"30px"}}
	                            />
	                        </span>
	                    </div>
        			</span>

        			<span>&nbsp; &nbsp; {cart.products}</span>

        		</div>
        	)
        })
        var showQty = carts.map((cart, index)=>{
        	return (
        		<tr key={index}>
			  		<td>{cart.price} VND</td>
			  		<td>
			  			<div className="qty_see">
                            <input type="text" onChange={this.onChangeQty} name="quantity" value={cart.qty} className="input_text"/>
                            <span className="qty_sp1">
                                <ArrowDropUpIcon onClick={()=> this.incre(cart._id)} style={{fontSize:"30px"}}
                                />
                            </span>
                            <span className="qty_sp2" style={{display:"block"}}>
                                <ArrowDropDownIcon onClick={()=> this.uncre(cart._id)} style={{fontSize:"30px"}}
                                />
                            </span>
                        </div>
			  		</td>
			  		<td>{cart.price*cart.qty} .000 VND</td>
			  		<td>
				  		<div className="closeY">
				  			&nbsp; <CloseIcon onClick={()=> this.closeCart(cart._id)}/>
				  		</div>
			  		</td>
			  	</tr>
        	)
        })
			return ( 
			   	<div>
			   	
                { loader === "loaders" ? "" : <div className="loader loader-black loader-1"></div>}
	    		<div className={`container-fluid custom_fluid ${loader}`}>
	    			<div className="row custom_row">
	    				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 custom_col">
	    					<NavBar cartId={cartId} />
	    				</div>
	    			</div>
	    			<div className="row custom_row">
	    			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 custom_col">
	    				<div className="cart_img mypham" id="cartImg"></div>
	    				<div className="errUpload">
	    					<p>{errUpload}</p>
	    					<b>{errPay}</b>
	    					{redirect}
	    				</div>
	    				<div className="row size-cart custom_row">
	    					<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 custom_col">
	    						<div className="cart_product">
	    							<p>ITEM</p>
	    								{showCart}
	    							<div className="send_mail_cart">
			                            <input placeholder="COUPONE CODE"/>
		                           		<button className="button" type="button">APPLY COUPONE</button>
	                        		</div>
	    						</div>
	    					</div>
	    					<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
	    						<div className="cart_product display_bl">
	    							<table>
									  <thead>
									    <tr>
									      <th>PRICE</th>
									      <th>QUANTITY</th>
									      <th>TOTAL</th>
									      <th></th>
									    </tr>
									  </thead>
									  <tbody>
									  	{showQty}
									  </tbody>
									</table>
									
	    						</div>
	    						
	    					</div>
	    					<div className="row">
	    						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
	    							
	    						</div>
	    						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
	    							<div className="cart_total">
	    								<div style={{width:"100%"}}>
    										<div className="send_mail_cart" style={{marginBottom:"20px"}}>
				                           		<button style={{width:"100%"}} className="button" onClick={this.uploadCart} type="button">CẬP NHẬT GIỎ</button>
			                        		</div>
    									</div>
	    								<table>
		    								<tbody>
										    <tr>
										      <th>SUBTOTAL</th>
										      <td>{this.totalCart(carts)}.000 VND</td>

										    </tr>
										    <tr className="border_c">
										      <th>SHIPPING</th>
										      <td>Flat Rate</td>
										    </tr>
										    <tr>
										      <th className="font_cart">TOTAL</th>
										      <td>Flat Rate</td>
										    </tr>
										   </tbody>
		    							</table>
		    							<div className="send_mail_cart" style={{padding:"45px 0"}}>
		                           			<button style={{width:"100%"}} onClick={this.checkPay} className="button" type="button">THANH TOÁN</button>
	                        		  	</div>

	    							</div>
	    						</div>
	    					</div>
	    					 
	    				</div>
	    				<Intagram />

	                        <Footer />
	                        <End />
	    			</div>
	    		</div>
	    		</div>
	    		
			</div>
	   
    					
  
	    	)
	    }
	}
export default CartPage;