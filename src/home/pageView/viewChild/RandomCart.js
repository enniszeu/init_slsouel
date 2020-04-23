
import React from 'react';
import callApi from './../../../utils/apicaler';
import {
  Link
} from "react-router-dom";

class RandomCart extends React.Component{
	constructor(props){
            super(props);

            this.state = {
            	random1:"",
                random2:"",
                random3:""
            }
        }


        componentDidMount(){
        	callApi('manager', 'GET', null).then(res =>{
            this.setState({
                random1 : res.data[Math.floor(Math.random() * res.data.length)],
                random2 : res.data[Math.floor(Math.random() * res.data.length)],
                random3 : res.data[Math.floor(Math.random() * res.data.length)]
            })
        	
        })
    }


	render(){
		var {random1, random2, random3} = this.state;
			return ( 
			  <div className="row custom_row">
                 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 custom_col">
                    <div className="related">
                        <div className="title_render">
                            <h3>Sản Phẩm Liên Quan</h3>
                            <hr/>
                        </div>
                        
                       <div className="row custom_row">
                            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <Link to={random1._id}>
                                <div className="colection1" style={{background:"#fff"}} >
                                    <img src={random1.imgeFile} />
                                    <div className="title_product">
                                        <b>{random1.products}</b>
                                        <hr/>
                                        <span>${random1.price}</span>
                                    </div>
                                </div>
                            </Link>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <Link to={random2._id}>
                                <div className="colection1" style={{background:"#fff"}} >
                                <img src={random2.imgeFile} />
                                <div className="title_product">
                                    <b>{random2.products}</b>
                                    <hr/>
                                    <span>${random2.price}</span>
                                </div>
                                </div>
                            </Link>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <Link to={random3._id}>
                                <div className="colection1" style={{background:"#fff"}} >
                                <img src={random3.imgeFile} />
                                <div className="title_product">
                                    <b>{random3.products}</b>
                                    <hr/>
                                    <span>${random3.price}</span>
                                </div>
                                </div>
                            </Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

	    	)
	    }
	}
export default RandomCart;


