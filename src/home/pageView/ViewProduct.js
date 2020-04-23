import React from 'react';
import callApi from './../../utils/apicaler';
import Outsoure from ".././pageChild/Outsoure";
import Footer from ".././pageChild/Footer";
import Intagram from ".././pageChild/Intagram";
import NavBar from ".././pageChild/NavBar";
import AddCart from ".././pageChild/AddCart";
import End from ".././pageChild/End";
import Simple from ".././pageChild/Simple";
import CartPage from "../.././page/pageCart/CartPage";
import Addtion from "./viewChild/Addtion";
import RandomCart from "./viewChild/RandomCart";
import  { Redirect } from 'react-router-dom';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CloseIcon from '@material-ui/icons/Close';
import {
  Link
} from "react-router-dom";


var carts = [];
class ViewProduct extends React.Component{
	constructor(props){
            super(props);

            this.state = {
                products : [],
                setImageMain:"",
                loader:"",
                cartId:0,
                qty:[],
                addQ:1,
                errQty:"",
                showCart:"",
                fixedQty:"",
                op:"",
                redirct:0,
                errAdd:"",
               
            }
        }



	componentDidMount(){
            var {match} = this.props;
            var {qty} = this.state

            if(match){
                var id = match.params.id;
                callApi(`product/${id}`, 'GET', null).then(res =>{
                	this.setState({
                        redirct : res.status,
						products : res.data,
                        setImageMain : res.data.imgeFile
					})
                  
                })
            }
            
    
            var cart = JSON.parse(sessionStorage.getItem('products'));
            if(cart === null){
                console.log("!")
            }else{
                cart.map((carts, index)=>{
                    this.setState({cartId: index + 1})
                })
            }
    }
    addCart = () =>{
        var {products, addQ, qty} = this.state;

        if( qty[0] === undefined ){
            this.setState({errQty:"errQty"})
            return true
        }else if( qty[0].qty === 0 ){
            this.setState({errQty:"errQty"})
            return true
        }else{
            this.setState({errQty:""})
        }
        
        {this.addQty(qty, products)}
        
        sessionStorage.setItem("products", JSON.stringify(carts));

        carts.map((cart, index)=>{
            this.setState({cartId: index+1})
        })

        
        
            

    }

    offCart=()=>{
        this.setState({showCart: "", fixedQty: "", op:""})
    }
   
    addQty = (qty,products) =>{

        qty.map((qtys, index)=>{
            var cart = JSON.parse(sessionStorage.getItem('products'));
            var productsCart = Object.assign(qtys, products);


            if(cart === null){
                console.log("null")
                carts.push(productsCart) 
                this.setState({showCart: "showCart", fixedQty: "fixedQty", op:"op"})
            }else{
                var index = -1;
                index = this.findProduct(cart, productsCart)
                if(index !== -1){
                    this.setState({ errAdd: "Sản phẩm này đã được thêm vào giỏ" });
                }else{
                    carts.push(productsCart) 
                    this.setState({showCart: "showCart", fixedQty: "fixedQty", op:"op"})
                }
                
            }

        })
    }


    findProduct=(cart, productsCart)=>{
        var index = -1;
        if(cart.length > 0){
            for (var i =0; i < cart.length; i++){
                if(cart[i]._id === productsCart._id){
                    index = i;
                    break;
                }
            }
        }
        return index;
    }

    incre = () =>{
        var {products, addQ, qty} = this.state;

        this.setState({addQ:addQ + 1})
        let qtye = [
            {
                qty:addQ
            }
        ]

        this.setState({
            qty : qtye
        })

    }
    uncre = () =>{
        var {products, addQ, qty} = this.state;
        if( addQ < 2){

        }else{
            this.setState({addQ:addQ - 1})
             let qtye = [
                {
                    qty:addQ-2
                }
            ]

            this.setState({
                qty : qtye
            })

            }
               
    }
   

   delete = (id) =>{
        const index = this.findIndex(id);
        sessionStorage.setItem("products", JSON.stringify(carts));
    }

    findIndex(id){
        carts.map((cart, index)=>{
            this.setState({cartId: index+1})
            if(cart._id === id){
                return carts.splice(index, 1);
            }
        })
        return -1;
    }

    totalCart=(carts)=>{
        var total = 0;
        if(carts.length > 0){
            for (const i in carts){ 
                total += carts[i].price * carts[i].qty
            }
        }
        return total;
    }

    setImage1=(p)=>{
        this.setState({setImageMain: p})
    }
    setImage2=(p)=>{
        this.setState({setImageMain: p})
    }
    setImage3=(p)=>{
        this.setState({setImageMain: p})
    }
    setImage4=(p)=>{
        this.setState({setImageMain: p})
    }

    
  
	render(){
		var {boderColor, setImageMain, loader, products, cartId, addQ, showCart, errQty, fixedQty, op, redirct, errAdd} = this.state;
        setInterval(() => {
            this.setState({ loader: "loaders" });
        }, 500);
        var showComple = carts.map((cart, index)=>{
            return ( 
                <tbody>
                    <tr key={index}>
                    <td>
                        <img src={cart.imgeFile} />
                    </td>
                    <td>x{cart.qty}</td>
                    <td>{cart.products}</td>
                    <td><CloseIcon onClick={()=> this.delete(cart._id)}/></td>
                </tr>

                </tbody>
            )
        })
        
			return ( 
			   <div>
                { loader === "loaders" ? "" : <div className="loader loader-black loader-1"></div>}
        		<div className={`container-fluid custom_fluid ${loader}`}>
        			<div className="row custom_row">
        				<div className={`col-xs-12 col-sm-12 col-md-12 col-lg-12 custom_col ${fixedQty}`}>
                            <div className="row custom_row" >
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div className={`nav_cart navbar-fixed-top ${showCart}`} style={{overflowY: "auto"}}>
                                        <div className="cart_comple">
                                            <div className="close_qty">
                                                <CloseIcon onClick={this.offCart}/>
                                            </div>
                                            <h3>Your basket</h3>
                                            <table>
                                              <thead>
                                                <tr>
                                                  <th></th>
                                                  <th></th>
                                                  <th></th>
                                                  <th></th>
                                                </tr>
                                              </thead>
                                                <tbody>
                                                    {showComple}
                                                </tbody>

                                            </table>
                                            <hr/>
                                            <table>
                                                <tr>
                                                    <th>Tổng</th>
                                                    <th>{this.totalCart(carts)}.000 VND</th>
                                                </tr>
                                            </table>
                                            <div className="send_mails">
                                                <Link to="/cart" ><button type="button" className="qty_button">ĐI ĐẾN GIỎ</button></Link>
                                                <Link to="/" ><button className="qty_button" type="button" style={{background:"#ccb48e",border: "1px solid #ccb48e"}}>TIẾP TỤC MUA HÀNG</button></Link>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
        				    <NavBar cartId={cartId} />
        					<div className="row custom_row">
        						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        							<div className="link_nav">
        								<Simple />
        							</div>
        						</div>	
        					</div>
        					<div className={`row custom_row ${op}`}>
                                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                    <div className="view-wapper">
                                        {redirct === 200 ? 
                                            <div className="img_view">
                                                <img src={setImageMain} />
                                            </div>:
                                            <div className="img_view" style={{height:"430px", paddingTop:"50%"}}>
                                              <div className="loading" style={{marginTop:"0"}}>Loading&#8230;</div>
                                            </div>
                                        }
                                        <div className="row custom_row">
                                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 custom_col">
                                                {products.image1 === "" ? 
                                                    <div className="notImg"></div> :
                                                    <div className="img_views" onClick={()=> this.setImage1(products.image1)}>
                                                        <img src={products.image1} id={setImageMain === products.image1 ? "active" : ""}/>
                                                    </div>
                                                }
                                            </div>
                                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 custom_col">
                                                {products.image2 === "" ? 
                                                    <div className="notImg"></div> :
                                                    <div className="img_views" onClick={()=> this.setImage2(products.image2)}>
                                                        <img src={products.image2} id={setImageMain === products.image2 ? "active" : ""}/>
                                                    </div>
                                                }
                                            </div>
                                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 custom_col">
                                                {products.image3 === "" ? 
                                                    <div className="notImg"></div> :
                                                    <div className="img_views" onClick={()=> this.setImage3(products.image3)}>
                                                        <img src={products.image3} id={setImageMain === products.image3 ? "active" : ""}/>
                                                    </div>
                                                }
                                            </div>
                                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 custom_col">
                                                {products.image4 === "" ? 
                                                    <div className="notImg"></div> :
                                                    <div className="img_views" onClick={()=> this.setImage4(products.image4)}>
                                                        <img src={products.image4} id={setImageMain === products.image4 ? "active" : ""}/>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                        <div className="conten_view">
                                            <b>NEW PRINTS</b>
                                            <h3>{products.products}</h3>
                                            <hr/>
                                            <span>{`${products.price} VND`}</span>
                                            <br/>
                                            <div className="qty_see">
                                                <input type="text" onChange={this.onChangeQty} name="quantity" value={addQ - 1} className="input_text"/>
                                                <span className="qty_sp1">
                                                    <ArrowDropUpIcon onClick={this.incre} style={{fontSize:"30px"}}
                                                    />
                                                </span>
                                                <span className="qty_sp2" style={{display:"block"}}>
                                                    <ArrowDropDownIcon onClick={this.uncre} style={{fontSize:"30px"}}
                                                    />
                                                </span>
                                            </div>
                                            {errQty === "" ? "" : <p className={`${errQty}`}>Xin mời thêm số lượng</p>}
                                            <p className="errAdd">{errAdd}</p>                                        <br/>
                                            <button className="button"
                                                type="button"
                                                onClick={this.addCart}
                                            >ADD TO CART
                                            </button>
                                            <p>{products.describe}</p>
                                            <hr/>
                                            <h4>DATE : <b>{products.date}</b></h4>
                                            <h4>CATEGORY: <b> NEW PRINTS </b></h4>
                                            <h4>TAG : <b>{products.species}</b></h4>
                                        </div>
                                    </div>
        					</div>
                            <Addtion products={products}/>

                           
                             <div className="row custom_row">
                                 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 custom_col">
                                    <div className="out_soure">
                                        <div className="img_out" style={{height:"615px",padding:"0px"}}>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <RandomCart />
                            <hr/>
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
export default ViewProduct;