import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {
  Link
} from "react-router-dom";

class Baner extends React.Component{

    render(){
    	return(

			<div className="baner_">
				<div className="thanhtuan"></div>
				<div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
				 
				  <div className="carousel-inner" role="listbox">
				    <div className="item active">
				      <div className="img_c1"></div>
				      <div className="carousel-caption">
				        <h1>Into the Blue Collection </h1>
				        {/*<div className="shoppe">
				        	<Link to=""><div> shoppe colection</div></Link>
				        </div>*/}
				      </div>
				    </div>

				    <div className="item">
				      <div className="img_c2"></div>
				      <div className="carousel-caption">
				        
				        <h1>A Collection of Creative Prints </h1>
				        {/*<div className="shoppe">
				        	<Link to=""><div>shoppe colection</div></Link>
				        </div>*/} 
				      </div>
				    </div>
				  </div> 
				</div>
				<p></p>
			</div>
    	)
    }
}
export default Baner;