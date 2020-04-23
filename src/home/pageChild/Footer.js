import React from 'react';
import {
  Link
} from "react-router-dom";

const uls =[
		{
			title:"SUPPORT",
			name:"SHIPPING & RETURN",
			name1:"PRIVACY & POLICY",
			name2:"FAQ",
			name3:"CONTACT US"
		},
		{
			title:"SOCIALS",
			name:" FACEBOOK",
			name1:" TWITTER",
			name2:" INSTAGRAM",
			name3:" PINTEREST"
		},
		{
			title:"SHOP",
			name:"ABSTRACT PRINTS",
			name1:"GREETING CARDS",
			name2:"ILLUSTRATED PRINTS",
			name3:"JOURNALS",
			name4:"NEW PRINTS"
		}
	]


class Footer extends React.Component{


	render(){
		var showUl = uls.map((ul, index)=>{
    		return ( 
			   <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2" key={index}>
                    <div className="support">

                        <ul >
                            <p>{ul.title}</p>
                            <hr/>
                            <li><Link to=""> {ul.name}</Link></li>
                            <li><Link to="">{ul.name1}</Link></li>
                            <li><Link to="">{ul.name2}</Link></li>
                            <li><Link to="">{ul.name3}</Link></li>
                            <li><Link to="">{ul.name4}</Link></li>
                            
                        </ul>
                    </div>
                </div>
    		)
    	})
			return ( 
			   <div className="row custom_row">
	                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 custom_col">
	                    <div className="footer">
	                        <div className="row custom_row">
	                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
	                                <div className="support">

	                                    <ul>
	                                        <p>SUPPORT</p>
	                                        <hr/>
	                                        <li>We are a family of creators – close knit and a little crazy – handcrafting goods at our workshop New York, USA. We make beautiful products from quality materials because believe each one is a representation of who we are close.</li>
	                                       
	                                    </ul>
	                                </div>
	                            </div>
	                           {showUl}
	                        </div>
	                    </div>
	                </div>
	            </div>
	    	)
	    }
	}
export default Footer;