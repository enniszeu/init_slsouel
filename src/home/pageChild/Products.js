import React from 'react';
import callApi from './../../utils/apicaler';
import {
  Link
} from "react-router-dom";

class Products extends React.Component{
 	constructor(props){
            super(props);
            this.state = {
                redirct:0,
                products:[]        	}
    }

    componentDidMount(){
        {this.apiExpress()}
    }

    apiExpress = () =>{
        callApi('', 'GET', null).then(res =>{
            this.setState({
                redirct : res.status,
                products : res.data
            })
        })
    }

    render(){
    	const {products, redirct} = this.state
    	var showTable = products.map((product, index)=>{
    		return ( 
			    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" id={ product.price ? "" : "display_not"} key={index}>
					<Link to={`product/${product._id}`}>
						<div className="colection1" >
						<img src={ product.imgeFile ? `https://glaze-playful-traffic.glitch.me/${product.imgeFile}` : ""} />

						</div>
						<div className="title_product">
							<p>NEW PRINTS</p>
							<b>{product.products}</b>
							<hr/>
						</div>
					</Link>
				</div>
    		)
    	})
    	return(
    		<div className="row custom_row">
				<div className="box_main">
					{redirct === 200 ? showTable : <div className="loading" style={{marginTop:"0", padding:"40px"}}>Loading&#8230;</div>}
				</div>
                <div className="send_mail">
                    <button type="button">Xem Them</button>
                </div>
			</div>
			
    	)
    }
}
export default Products;