import React from 'react';
import callApi from './../../utils/apicaler';
import {
  Link
} from "react-router-dom";


class OwlCarousels extends React.Component{
	constructor(props){
            super(props);
            this.state = {
                tuideo:"Túi",
        	}
    }

	tuideo=()=>{
		this.setState({tuideo:"Túi"})
	}

	phukien=()=>{
		this.setState({tuideo:"Phụ kiện tiện ích"})
	}
	dungcu=()=>{
		this.setState({tuideo:"Văn phòng phẩm"})
	}
	latvat=()=>{
		this.setState({tuideo:"Lặt vặt"})
	}

	render(){
		const {products, redirct} = this.props
        var showTable = products.slice(0,4).map((product, index)=>{
            return ( 
                <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4" style={{paddingRight:"6px", paddingLeft: "6px"}} id={ product.conten === this.state.tuideo ? "" : "display_not"} key={index}>
                    <Link to={`product/${product._id}`}>
                        <div className="colection1" >
                        <img src={ product.imgeFile ? `https://planet-time-linseed.glitch.me/${product.imgeFile}` : ""} />

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
                        		<Link to="/">
	                        		<div className="tuideo" onClick={this.tuideo}>
	                        			<img src="https://cdn.glitch.com/ba72007a-b60d-4faa-b311-0093a53c208c%2FReal%20Love.png?v=1592183906811" />
	                        		</div>
                        		</Link>
                        	</div>
                        	<div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                        		<Link to="/">
	                        		<div className="sovo" onClick={this.phukien}>
	                        			<img src="https://cdn.glitch.com/ba72007a-b60d-4faa-b311-0093a53c208c%2FReal%20Love%20(1)f.png?v=1592184465856" />
	                        		</div>
                        		</Link>
                        	</div>
                        	<div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                        		<Link to="/">
	                        		<div className="ocean" onClick={this.dungcu}>
	                        			<img src="https://cdn.glitch.com/ba72007a-b60d-4faa-b311-0093a53c208c%2FReal%20Love%20(2)h.png?v=1592184987710" />
	                        		</div>
                        		</Link>
                        	</div>
                        	<div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                        		<Link to="/">
	                        		<div className="chanmeo" onClick={this.latvat}>
	                        			<img src="https://cdn.glitch.com/ba72007a-b60d-4faa-b311-0093a53c208c%2FReal%20Love%20(3)gjh.png?v=1592185546831" />
	                        		</div>
                        		</Link>
                        	</div>
                        </div>
                        <div className="box_main">
		                    {redirct === 200 ? showTable : <div className="loading" style={{marginTop:"0", padding:"40px"}}>Loading&#8230;</div>}
		                </div>
                    </div>
				</div>
	    	)
	    }
	}
export default OwlCarousels;