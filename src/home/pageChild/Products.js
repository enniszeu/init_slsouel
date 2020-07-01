import React from 'react';
import callApi from './../../utils/apicaler';
import { connect } from 'react-redux';
import {
  Link
} from "react-router-dom";

class Products extends React.Component{

    render(){
        console.log(this.props.products)
        const {products} = this.props
        var showTable = products.slice(0,6).map((product, index)=>{
            return ( 
                <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4" style={{paddingRight:"6px", paddingLeft: "6px"}} id={ product.price ? "" : "display_not"} key={index}>
                    <Link to={`product/${product._id}`}>
                        <div className="colection1" >
                        <img src={ product.imgeFile ? `https://planet-time-linseed.glitch.me/${product.imgeFile}` : ""} />

                        </div>
                        <div className="title_product">
                            <p>NEW</p>
                            <b>{product.products}</b>
                            <hr/>
                            <span>Giá {product.price}.000 Vnd</span>
                        </div>
                    </Link>
                </div>
            )
        })
        return(
            <div className="row custom_row">
                <div className="out_soure">
                    <div className="img_out" style={{background:"none", padding:"80px 400px", height:"300px"}}>
                        <div className="deb"><span class="t1">TAKE A LOOK</span></div>
                        <h3>Sản phẩm mới</h3>
                        <hr/>
                        <p>Latest news and researches from printing industry
                        </p>
                    </div>
                </div>
                <div className="box_main">
                    {products ? showTable : <div className="loading" style={{marginTop:"0", padding:"40px"}}>Loading&#8230;</div>}
                </div>
                
            </div>
            
        )
    }
}

const mapStateToProps = (state) =>{
    return { 
        products : state.products
    }
}

export default connect(mapStateToProps, null)(Products);