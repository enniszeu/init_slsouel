import React from 'react';

class OwlCarousels extends React.Component{


	render(){
		const {products} = this.props
			return ( 
				<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
				  <ol class="carousel-indicators">
				    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
				    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
				    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
				  </ol>

				  <div class="carousel-inner" role="listbox">

				    <div class="row item active">
					  <div class="col-xs-6 col-md-3">
					    <a href="#" class="thumbnail">
					      <img src="https://elson.qodeinteractive.com/wp-content/uploads/2020/01/elson-main-rev-image-9.png" alt="..."/>
					    </a>
					  </div>
					  <div class="col-xs-6 col-md-3">
					    <a href="#" class="thumbnail">
					      <img src="https://elson.qodeinteractive.com/wp-content/uploads/2020/01/elson-main-rev-image-9.png" alt="..."/>
					    </a>
					  </div>
					  <div class="col-xs-6 col-md-3">
					    <a href="#" class="thumbnail">
					      <img src="https://elson.qodeinteractive.com/wp-content/uploads/2020/01/elson-main-rev-image-9.png" alt="..."/>
					    </a>
					  </div>
					  <div class="col-xs-6 col-md-3">
					    <a href="#" class="thumbnail">
					      <img src="https://elson.qodeinteractive.com/wp-content/uploads/2020/01/elson-main-rev-image-9.png" alt="..."/>
					    </a>
					  </div>

					</div>

				    <div class="item">
				      <img src="https://elson.qodeinteractive.com/wp-content/uploads/2020/01/elson-main-rev-image-9.png" alt="..."/>
				      <div class="carousel-caption">
				      </div>
				    </div>
				  </div>
				</div>
	    	)
	    }
	}
export default OwlCarousels;