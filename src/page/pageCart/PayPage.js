import React from 'react';
import NavBar from "../.././home/pageChild/NavBar";
import Intagram from "../.././home/pageChild/Intagram";
import Footer from "../.././home/pageChild/Footer";
import End from "../.././home/pageChild/End";
import callApi from './../../utils/apicaler';
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
                shiping:30.000,
                CSKHS:[]
            }
        }
 
        componentDidMount(){
          var cart = JSON.parse(sessionStorage.getItem('products'));
          var CSKHS = JSON.parse(sessionStorage.getItem('CSKHS'));
          this.setState({carts:cart, CSKHS:CSKHS})
            if(cart === null){
                console.log("!")
            }else{
                cart.map((carts, index)=>{
                    this.setState({cartId: index + 1})
                })
            }
        }


    onSubmit(e){
        e.preventDefault();

        var CSKHS = JSON.parse(sessionStorage.getItem('CSKHS'));
        var cart = JSON.parse(sessionStorage.getItem('products'));
        console.log(CSKHS)
        console.log(cart)

        const formData = new FormData();
        formData.append('diachi',CSKHS.diachi);
        formData.append('email',CSKHS.email);
        formData.append('lastname',CSKHS.lastname);
        formData.append('name',CSKHS.name);
        formData.append('sdt',CSKHS.sdt);
        formData.append('sms',CSKHS.sms);
        formData.append('product',cart);

        callApi('khachhang', 'POST', formData).then(res =>{
            this.setState({redirct : res.status})
        }) 
         
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
    const {shiping,loader, carts, cartId, CSKHS} = this.state;
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
                            <div className="cart_img mypham"></div>
                        </div>
                    </div>
                    <div className="row custom_row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 custom_col">
                            
                            <div className="wapper_form">
                                <div className="title_pay">
                                    <br/>
                                    <br/>
                                    <p><i className="fas fa-map-marker-alt"></i> {`Địa chỉ nhận hàng : ${CSKHS.diachi}`}</p>
                                    <p>{`   Họ và tên : ${CSKHS.lastname + CSKHS.name}`}</p>
                                    <p>{`   Số điện thoại : (+84) ${CSKHS.sdt} `}</p>
                                    <hr/>
                                </div>
                               
                                <div className="row custom_row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="title_pay">
                                            <h3>YOUR ORDER</h3>
                                            {/*<hr/>*/}
                                        </div>
                                        <div className="cart_total tua">
                                            <table>
                                                <thead>
                                                    <tr>
                                                      <th>SẢN PHẨM</th>
                                                      <th>GIÁ</th>
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
                                                      <th>SUBTOTAL(* Tổng tiền SP)</th>
                                                      <td style={{textAlign:"right"}}>{this.totalCart(carts)}.000 VND</td>

                                                    </tr>
                                                    <tr className="border_c">
                                                      <th>VẬN CHUYỂN <i className="fas fa-truck-moving"></i></th>
                                                      <td style={{textAlign:"right"}}><span style={{fontWeight:"600", color:"#3cd3dd"}}>VNPost Nhanh</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {shiping}.000 VND</td>
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
                                                <button style={{width:"100%", marginTop:"15px"}} onClick={this.onSubmit} className="button" type="button">THANH TOÁN</button>
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