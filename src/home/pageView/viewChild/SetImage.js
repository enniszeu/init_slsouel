
import React from 'react';

class SetImage extends React.Component{
	constructor(props){
            super(props);

            this.state = {
            	redirct:0,
            	setImageMain:"",
            	products:[]
            } 
        }


        componentDidMount(){
        	setTimeout(()=>{
        		let {products, setImageMain, redirct} = this.props;
        		this.setState({ products: products, setImageMain: setImageMain, redirct:redirct});

        	}, 2000)
        	
        }

	

	render(){
		var {redirct, setImageMain, products} = this.state;
			return ( 
			  
	    	)
	    }
	}
export default SetImage;














