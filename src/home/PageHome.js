import React from 'react';
import './puclic/scss/style.css';  
import Baner from "./pageChild/Baner";
import Products from "./pageChild/Products";
import Outsoure from "./pageChild/Outsoure";
import Footer from "./pageChild/Footer";
import End from "./pageChild/End";
import OwlCarousels from "./pageChild/OwlCarousels";
import Intagram from "./pageChild/Intagram";
import NavBar from "./pageChild/NavBar";
import callApi from './../utils/apicaler';
import axios from 'axios';
import MessengerCustomerChat from 'react-messenger-customer-chat';


import {
  Link
} from "react-router-dom";

 
class PageHome extends React.Component{
    constructor(props){
            super(props);
            this.state = {
                loader:"",
                cartId:0,
                products:[],
                redirct:0
        	}
    }

    componentDidMount(){
        {this.sestionCart()}
        {this.apiExpress()}
    }

    apiExpress = () =>{
        axios.get(`https://sdgfsdgdfgzsdfg.herokuapp.com`)
          .then(res => {
            this.setState({
                redirct : res.status,
                products : res.data
            })
          })
        
    }


    sestionCart = () =>{
        var cart = JSON.parse(sessionStorage.getItem('products'));
        if(cart === null){
            console.log("!")
        }else{
            cart.map((carts, index)=>{
                this.setState({cartId: index + 1})
            })
        }
    }

   
    render(){
        const {loader, cartId, display, products, redirct} = this.state
        if(redirct === 200){
            setInterval(() => {
                this.setState({ loader: "loaders" });
            });
        
        }
        
    	return( 
            <div>

                { loader === "loaders" ? "" : <div class="loader loader-black loader-1"></div>}
    		<div className={`container-fluid custom_fluid ${loader}` }>
    			<div className="row custom_row">
    				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 custom_col">
                        <NavBar cartId={cartId}/>

    					<Baner />

                           		
                        <div className="row custom_row">
    						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 custom_col">
    							<div className="table1">
    								<Link to="/mypham">
                                        <div className="table1_img_mypham">
                                            <div className="overlow"></div>
                                            <h3>My Pham</h3>
                                        </div>
                                    </Link>
    								
    							</div>
    						</div>
    						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 custom_col">
    							<div className="table2">
                                    <Link to="/thoitrang">
        								<div className="table2_img_thoitrang">
        									<div className="overlow"></div>
        									<h3>Thoi Trang</h3>
        								</div>
                                        </Link>
    							</div>
    						</div>
    					</div>
    					
    				    <Products/>
                        <div className="send_mail">
                            <button type="button">Xem Them</button>
                        </div>
                        <br/>
                        <OwlCarousels products={products} redirct={redirct}/>
                        <div className="send_mail">
                            <button type="button">Xem Them</button>
                        </div>
                        <Outsoure />
                        <div>
                            <MessengerCustomerChat
                                pageId="111619650459585"
                                appId="2800125130218333"
                              />
                        </div> 
                       {/* <Intagram />
                        <Footer />
                        <End /> */}
    				</div>
    			</div>
    		</div>
            </div>
    	)
    }
}
export default PageHome;