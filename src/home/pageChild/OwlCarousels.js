import React from 'react';
import callApi from './../../utils/apicaler';
import {
  Link
} from "react-router-dom";


class OwlCarousels extends React.Component{
	constructor(props){
            super(props);
            this.state = {
                redirct:0,
                products:[]         }
    }

    componentDidMount(){
        {this.apiExpress()}
    }

    apiExpress = () =>{
        callApi('manager', 'GET', null).then(res =>{
            this.setState({
                redirct : res.status,
                products : res.data.posts
            })
        })
    }

	render(){
		const {products, redirct} = this.state
        var showTable = products.map((product, index)=>{
            return ( 
                <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4" style={{paddingRight:"6px", paddingLeft: "6px"}} id={ product.price ? "" : "display_not"} key={index}>
                    <Link to={`product/${product._id}`}>
                        <div className="colection1" >
                        <img src={ product.imgeFile ? `https://glaze-playful-traffic.glitch.me/${product.imgeFile}` : ""} />

                        </div>
                        <div className="title_product">
                            <p>NEW PRINTS</p>
                            <b>{product.products}</b>
                            <hr/>
                            <span>Gia {product.price}.000 Vnd</span>
                        </div>
                    </Link>
                </div>
            )
        })
			return ( 
				<div>
					<div className="out_soure">
                        <div className="img_out" style={{background:"none", padding:"80px 400px", height:"189px"}}>
                            <span class="t1">TAKE A LOOK</span>
                            <h3>Chủ đề mới</h3>
                            <hr/>
                        </div>
                        <div class="row active custom_row">
                        	<div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                        		<div className="tuideo">
                        			<img src="https://cdn.glitch.com/ba72007a-b60d-4faa-b311-0093a53c208c%2FReal%20Love.png?v=1592183906811" />
                        		</div>
                        	</div>
                        	<div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                        		<div className="sovo">
                        			<img src="https://cdn.glitch.com/ba72007a-b60d-4faa-b311-0093a53c208c%2FReal%20Love%20(1)f.png?v=1592184465856" />
                        		</div>
                        	</div>
                        	<div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                        		<div className="ocean">
                        			<img src="https://cdn.glitch.com/ba72007a-b60d-4faa-b311-0093a53c208c%2FReal%20Love%20(2)h.png?v=1592184987710" />
                        		</div>
                        	</div>
                        	<div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                        		<div className="chanmeo">
                        			<img src="https://cdn.glitch.com/ba72007a-b60d-4faa-b311-0093a53c208c%2FReal%20Love%20(3)gjh.png?v=1592185546831" />
                        		</div>
                        	</div>
                        </div>
                        <div className="box_main">
		                    {redirct === 200 ? showTable : <div className="loading" style={{marginTop:"0", padding:"40px"}}>Loading&#8230;</div>}
		                </div>
		                <div className="send_mail">
		                    <button type="button">Xem Them</button>
		                </div>
                    </div>
				</div>
	    	)
	    }
	}
export default OwlCarousels;