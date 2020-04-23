
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

        	}, 1000)
        	
        }

	setImage1=(p)=>{
        this.setState({setImageMain: p})
    }
    setImage2=(p)=>{
        this.setState({setImageMain: p})
    }
    setImage3=(p)=>{
        this.setState({setImageMain: p})
    }
    setImage4=(p)=>{
        this.setState({setImageMain: p})
    }

	render(){
		var {redirct, setImageMain, products} = this.state;
			return ( 
			  
	    	)
	    }
	}
export default SetImage;














