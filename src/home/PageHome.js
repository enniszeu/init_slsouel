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
import MessengerCustomerChat from 'react-messenger-customer-chat';


import {
  Link
} from "react-router-dom";

 
class PageHome extends React.Component{
    constructor(props){
            super(props);
            this.state = {
                loader:"",
                cartId:0
        	}
    }

    componentDidMount(){
        {this.sestionCart()}
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
        const {loader, cartId, display} = this.state
        setInterval(() => {
            this.setState({ loader: "loaders" });
        }, 500);
        
    	return( 
            <div>
                <NavBar cartId={cartId}/>

                { loader === "loaders" ? "" : <div class="loader loader-black loader-1"></div>}
    		<div className={`container-fluid custom_fluid ${loader}` }>
    			<div className="row custom_row">
    				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 custom_col">
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
    					
    				    <Products />
                        <br/>
                        <OwlCarousels />
                        <Outsoure />
                        <div>
                            <MessengerCustomerChat
                                pageId="111619650459585"
                                appId="2800125130218333"
                              />
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
export default PageHome;