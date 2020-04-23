import React from 'react';
import NavBar from ".././pageChild/NavBar";
import Intagram from ".././pageChild/Intagram";
import Footer from ".././pageChild/Footer";
import End from ".././pageChild/End";
import Products from ".././pageChild/Products";
import callApi from './../../utils/apicaler';
import {
  Link
} from "react-router-dom";

class Girl extends React.Component{
  constructor(props){
            super(props);

            this.state = {
                redirct:0,
                products:[],
                loader:"",
                carts:[],
                cartId:0,
                start:0,
                end:9
            }
        }

        componentDidMount(){
            {this.apiExpress()}
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

        apiExpress = () =>{
            callApi('manager', 'GET', null).then(res =>{
                let {start, end} = this.state;
                this.setState({
                    redirct : res.status,
                    products : res.data
                })
            })
        }
        addSplice = () =>{
            let {end} = this.state;
            this.setState({end: end+3})
        }
  render(){
    const {products, redirct, loader,cartId, start, end} = this.state;
        setInterval(() => {
            this.setState({ loader: "loaders" });
        }, 1000);
    var productsSp = products.slice(start,end)

    var showTable = productsSp.map((product, index)=>{
            return ( 
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" id={(product.species === "girl") ? " display_man" : "display_yi"} key={index}>
                    <Link to={`product/${product._id}`}>
                        <div className="colection1"  >
                        <img src={product.imgeFile} />

                        </div>
                        <div className="title_product">
                            <p>NEW PRINTS</p>
                            <b>{product.products}</b>
                            <hr/>
                            <span>${product.price}</span>
                        </div>
                    </Link>
                </div>
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
                        <div className="cart_img"></div>
                    </div>
                </div>
                <div className="row custom_row">
                    <div className="title_pay">
                        <h3>ĐỒ NỮ</h3>
                        <hr/>
                    </div>
                    <div className="box_main">
                        {redirct === 200 ? showTable : <div className="loading" style={{marginTop:"0", padding:"40px"}}>Loading&#8230;</div>}
                    </div>
                </div>
                <div className="send_mail">
                    <button type="button" onClick={this.addSplice}>XEM THEM</button>
                </div>
                <Intagram />
                <Footer />
                <End />
            </div>
          
            </div>
     
              
  
        )
      }
  }
export default Girl;