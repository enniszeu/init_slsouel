import React from 'react';
import NavBar from "../.././home/pageChild/NavBar";
import Intagram from "../.././home/pageChild/Intagram";
import Footer from "../.././home/pageChild/Footer";
import End from "../.././home/pageChild/End";
import {
  Link,
  Redirect
} from "react-router-dom";

var CSKH = [];
class CPSHang extends React.Component{
  constructor(props){
            super(props);

            this.state = {
                loader:"",
                carts:[],
                cartId:0,
                shiping:30.000,
                name:"",
                lastname:"",
                diachi:"",
                email:"",
                sdt:"",
                sms:"",
                ERRname:"",
                ERRlastname:"",
                ERRdiachi:"",
                ERRemail:"",
                ERRsdt:"",
                ERRsms:"",
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

        onChangeName=(e)=>{
              this.setState({
                name:e.target.value
              })
        }

        onChangeLastName=(e)=>{
              this.setState({
                lastname:e.target.value
              })
        }
        onChangeDiaChi=(e)=>{
              this.setState({
                diachi:e.target.value
              })
        }
        onChangeEmail=(e)=>{
              this.setState({
                email:e.target.value
              })
        }
        onChangeSdt=(e)=>{
              this.setState({
                sdt:e.target.value
              })
        }
        onChangeSms=(e)=>{
              this.setState({
                sms:e.target.value
              })
        }

        checkCSKH=()=>{
            var {name, lastname, diachi, email, sdt, sms} = this.state;
                if(name === ""){
                  this.setState({ERRname:"ERRname", loader:"", errPay:"Không được để trống"})
                  return true;
                }else{
                    this.setState({ERRname:"ERRtrue"})
                }
                if(lastname === ""){
                  this.setState({ERRlastname:"ERRlastname",loader:"", errPay:"Không được để trống"})
                  return true;
                }else{
                    this.setState({ERRname:"ERRtrue"})
                }
                if(diachi === ""){
                  this.setState({ERRdiachi:"ERRdiachi",loader:"", errPay:"Không được để trống"})
                  return true;
                }else{
                    this.setState({ERRname:"ERRtrue"})
                }
                if(email === ""){
                  this.setState({ERRemail:"ERRemail",loader:"", errPay:"Không được để trống"})
                  return true;
                }else{
                    this.setState({ERRname:"ERRtrue"})
                }
                if(sdt === ""){
                  this.setState({ERRsdt:"ERRsdt",loader:"", errPay:"Không được để trống"})
                  return true;
                }else{
                    this.setState({ERRname:"ERRtrue"})
                }
                if(sms === ""){
                  this.setState({ERRsms:"ERRsms",loader:"", errPay:"Không được để trống"})
                  return true;
                }else{
                    this.setState({ERRname:"ERRtrue"})
                }

                var objectKH = {
                    name:name,
                    lastname:lastname,
                    diachi:diachi,
                    email:email,
                    sdt:sdt,
                    sms:sms
                }

                sessionStorage.setItem("CSKHS", JSON.stringify(objectKH));
                this.setState({redirect:<Redirect to="/pay" />})
        }




    
  render(){
    const {shiping,loader, carts, cartId, errPay, redirect} = this.state;
        setInterval(() => {
            this.setState({ loader: "loaders" });
        }, 1000);
      return ( 
            <div>
                {redirect}
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
                                <h3>Thông tin khách hàng</h3>
                                <p style={{color:"red", textAlign:"center"}}>{errPay}</p>
                                <hr/>

                            </div>
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>FIRST NAME *( Tên )</label>
                                            <input type="text" className={`input ${this.state.ERRname}`} name="name" onChange={this.onChangeName}/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>LAST NAME *( Họ )</label>
                                            <input type="text" className={`input ${this.state.ERRlastname}`} onChange={this.onChangeLastName}/>
                                        </div>
                                    </div>
                                    <div className="form-group" style={{padding:"0 14px"}}>
                                        <label>COMPANY NAME ( Địa chỉ nhận hàng )</label>
                                        <input type="text" className={`input ${this.state.ERRdiachi}`} placeholder="1234 Main St" onChange={this.onChangeDiaChi}/>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>EMAIL ADDRESS *( Địa chỉ email )</label>
                                            <input type="email" className={`input ${this.state.ERRemail}`} onChange={this.onChangeEmail}/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>PHONE *( Số điện thoại )</label> 
                                            <input type="number" className={`input ${this.state.ERRsdt}`} onChange={this.onChangeSdt}/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>City</label>
                                            <input type="text" className={`input`} disabled id="disabledTextInput" placeholder="**********"/>
                                        </div>
                                        <div className="form-group col-md-2">
                                            <label>Zip</label>
                                            <input type="text" className={`input`} disabled placeholder="**********"/>
                                        </div>
                                    </div>
                                    <div className="row custom_row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 custom_col">
                                            <div className="form-group" style={{padding:"0 14px"}}>
                                                <label>Example textarea( Lời nhắn )</label>
                                                <textarea className={`form-control ${this.state.ERRsms}`} id="exampleFormControlTextarea1" rows="3" onChange={this.onChangeSms} ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                        <div className="send_mail">
                                            <button type="button" onClick={this.checkCSKH}>TIP THEO</button>
                                        </div>
                                 </form>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        )
      }
  }
export default CPSHang;