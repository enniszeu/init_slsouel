
import React from 'react';

class Addtion extends React.Component{
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
        		let {products} = this.props;
        		this.setState({ products: products});

        	}, 1000)
        }
	render(){
		var {products} = this.state;
			return ( 
			  <div className="row custom_row">
                 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 custom_col">
                    <div className="intro">
                        <h3>ADDITIONAL INFORMATION</h3>
                        <table>
                            <tbody>
                            <tr className="">
                                <th>KHO:</th>
                                <td><p>{products.kho}</p>
                                </td>
                            </tr>
                            <tr className="alt">
                                <th>THƯƠNG HIỆU:</th>
                                <td><p>Prinkni</p>
                                </td>
                            </tr>
                                <tr className="">
                                <th>XUẤT XỨ:</th>
                                <td><p>VIỆT NAME</p>
                                </td>
                            </tr>
                            <tr className="alt">
                                <th>MÀU SẮC:</th>
                                <td>
                                    <div className="set_color" style={{ background: products.color1}}></div>
                                    <div className="set_color" style={{ background: products.color2}}></div>
                                    <div className="set_color" style={{ background: products.color3}}></div>
                                    <div className="set_color" style={{ background: products.color4}}></div>
                                    <div className="set_color" style={{ background: products.color5}}></div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> 
	    	)
	    }
	}
export default Addtion;


