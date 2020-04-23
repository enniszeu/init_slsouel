import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import {
  Link
} from "react-router-dom";

class NavBar extends React.Component{
	constructor(props){
            super(props);
            this.state = {
                backg:""
        	}
    }

	render(){
		const {cartId} = this.props;
		var scroll1 = window.pageYOffset;
        window.onscroll = function(){
        var scroll2 = window.pageYOffset;
        if (scroll2 === 0) {
        	document.getElementById('nav').style.background = "#fff0";
        }else{
        	document.getElementById('nav').style.background = "#fff";
        }
        	scroll1 = scroll2;
        }
			return ( 
			   <div className="menu_bar navbar-fixed-top" id="nav">
					<div className="show_nav">
						<MenuIcon/>
					</div>
					<div className="logo_">
						<Link style={{color:"#000"}} to=""><div style={{fontSize:"25px", }}><span style={{background:"#ccb48e", display:"inline-block", paddingLeft:"10px"}}>Slso</span>uel.</div></Link>
					</div>
					<div className="nav_">
						<ul>
							<li><Link to="">Home</Link></li>
							<li><Link to="">About</Link></li>
							<li><Link to="">shop</Link></li>
							<li><Link to="">action</Link></li>
							<li><Link to="">about</Link></li>
							<li><Link to="/create">help</Link></li>	
						</ul>
					</div>
					<div className="cart_">
						<p><Link to="/cart">Cart <div className="badge">{cartId}</div></Link></p>
					</div>
				</div>
	    	)
	    }
	}
export default NavBar;