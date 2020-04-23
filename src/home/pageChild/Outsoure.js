import React from 'react';
import {
  Link
} from "react-router-dom";

class Outsoure extends React.Component{


	render(){
			return ( 
			   <div className="row custom_row">
	                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 custom_col">
	                    <div className="out_soure">
	                        <div className="img_out">
	                            <h3>Our Story</h3>
	                            <hr/>
	                            <p>Our story covering interesting stories around culture and design.
	                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.
	                            </p>
	                            <Link to="">READ OUR STORY</Link>
	                        </div>
	                    </div>
	                </div>
	            </div> 
	    	)
	    }
	}
export default Outsoure;