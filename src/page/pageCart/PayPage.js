import React from 'react';
import NavBar from "../.././home/pageChild/NavBar";
import Intagram from "../.././home/pageChild/Intagram";
import Footer from "../.././home/pageChild/Footer";
import End from "../.././home/pageChild/End";
import {
  Link
} from "react-router-dom";

class Pay extends React.Component{
  constructor(props){
            super(props);

            this.state = {
                loader:"",
                carts:[],
                cartId:0,
                shiping:30.000
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
        totalCartTong=(carts)=>{
            var total = 0;
            var {shiping} = this.state;
              if(carts.length >0){
                for( const i in carts){
                  total += carts[i].price * carts[i].qty;
                }
              }
          return total+shiping;
        }

    
  render(){
    const {shiping,loader, carts, cartId} = this.state;
        setInterval(() => {
            this.setState({ loader: "loaders" });
        }, 1000);
    var showQty = carts.map((cart, index)=>{
            return (
                <tr key={index}>
                    <td>{cart.products}<span>&nbsp; x{cart.qty}</span></td>
                    <td style={{textAlign:"right"}}>{cart.price*cart.qty} .000 VND</td>
                  
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
                            <div className="cart_img"></div>
                        </div>
                    </div>
                    <div className="row custom_row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 custom_col">
                            
                            <div className="wapper_form">
                                <div className="title_pay">
                                <h3>BILLING DETAILS</h3>
                                <hr/>
                            </div>
                                <form>
                                  <div className="form-row">
                                    <div className="form-group col-md-6">
                                      <label>FIRST NAME *</label>
                                      <input type="text" className="input"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                      <label>LAST NAME *</label>
                                      <input type="text" className="input"/>
                                    </div>
                                  </div>
                                  <div className="form-group" style={{padding:"0 14px"}}>
                                    <label>COMPANY NAME</label>
                                    <input type="text" className="input" placeholder="1234 Main St"/>
                                  </div>
                                  <div className="form-row">
                                    <div className="form-group col-md-6">
                                      <label>EMAIL ADDRESS *</label>
                                      <input type="email" className="input"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                      <label>PHONE *</label>
                                      <input type="number" className="input"/>
                                    </div>
                                  </div>
                                  <div className="form-row">
                                    <div className="form-group col-md-6">
                                      <label>City</label>
                                      <input type="text" className="input"/>
                                    </div>
                                    
                                    <div className="form-group col-md-2">
                                      <label>Zip</label>
                                      <input type="text" className="input"/>
                                    </div>
                                  </div>
                                  <div className="row custom_row">
                                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 custom_col">
                                          <div className="form-group" style={{padding:"0 14px"}}>
                                            <label>Example textarea</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                          </div>
                                      </div>
                                  </div>
                                 
                                </form>
                                <div className="row custom_row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="title_pay">
                                            <h3>YOUR ORDER</h3>
                                            <hr/>
                                        </div>
                                        <div className="cart_total tua">
                                            <table>
                                                <thead>
                                                    <tr>
                                                      <th>SẢN PHẨM</th>
                                                      <th>GÍA</th>
                                                      <th></th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    {showQty}
                                                  </tbody>
                                            </table>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                      <th>SUBTOTAL</th>
                                                      <td style={{textAlign:"right"}}>{this.totalCart(carts)}.000 VND</td>

                                                    </tr>
                                                    <tr className="border_c">
                                                      <th>PHÍ VẬN CHUYỂN</th>
                                                      <td style={{textAlign:"right"}}>{shiping}.000 VND</td>
                                                    </tr>
                                                    <tr>
                                                      <th className="font_cart">TOTAL</th>
                                                      <td style={{textAlign:"right"}}>{this.totalCartTong(carts)}.000 VND</td>
                                                    </tr>
                                               </tbody>
                                            </table>
                                            <div className="send_mail_cart" style={{padding:"45px 0", background:"#f5f5f5"}}>
                                                <div style={{padding:"0 20px"}}>
                                                    <b>Phương thức thanh toán</b>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                                    <label className="form-check-label">
                                                    Thanh toán tiền mặt khi nhận hàng (COD)
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                                    <label className="form-check-label">
                                                    PayPal &nbsp;
                                                    <img src="https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg" alt="PayPal Acceptance Mark" style={{width: "105px"}}/>
                                                    </label>
                                                </div>
                                                <button style={{width:"100%", marginTop:"15px"}} onClick={this.checkPay} className="button" type="button">THANH TOÁN</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                  {/*  <Intagram />

                  <Footer />
                  <End />*/}
                  </div>
          
      </div>
     
              
  
        )
      }
  }
export default Pay;