import React from 'react';


class Intagram extends React.Component{


	render(){
			return ( 
			   <div>
				   	<div className="row custom_row  hover_end2">
	                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 hover_end">
	                        <div className="intagram">
	                            <h3>Instagram</h3>
	                            <span>@ forpreview</span>
	                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.</p>
	                        </div>
	                    </div>
	                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
	                        <div className="intagram_conten">
	                            <p>Instagram has returned invalid data.</p>
	                        </div>
	                    </div>
	                </div>
	                <div className="row custom_row hover_send">
	                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
	                        <div className="send_mail">
	                            <h3>Sign up for the newsletter</h3>
	                            <hr/>
	                            <input placeholder="Enter your email"/>
	                            <button type="button">SUBSCRIBE</button>
	                        </div>
	                    </div>
	                </div>
			   </div>
	    	)
	    }
	}
export default Intagram;