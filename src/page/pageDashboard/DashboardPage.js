import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import  { Redirect } from 'react-router-dom';
import NavMeauBar from '.././pageManager/const_childer/nav_meau';
import '.././puclic/scss/style.css';   


class DashboarPage extends React.Component{
    constructor(props){
            super(props);

            this.state = {
                loader:"",
                heyConten:"",
                showMeau:"",
                active:true
            }


        }

        


    showMeau = () =>{
        this.setState({
            showMeau:"showMeau",
            heyConten:"heyConten"
        })
    }
    closeMeau = () =>{
        this.setState({
            showMeau:"",
            heyConten:""
        })
    }


    render(){
        setInterval(() => {
            this.setState({ loader: "loaders" });
        }, 1000);
        const   {
                    loader, heyConten, showMeau
                    
                } = this.state
        return(
            <div>
                { loader === "loaders" ? "" :<div className="custom_loader"> <div className="loader"></div></div>}
                
                <div className={`container-fluid custom-fluid ${loader}`}>
                    <div className="row custom_row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 custom_col">
                            <div className="wapper" >
                                <div className={`nav_bar ${showMeau}`}>
                                    <h3>elsoule</h3>
                                    <hr/>
                                    <div className="nav_meau">
                                            <NavMeauBar activeDashboard={this.state.active} />
                                    </div>
                                </div>
                                <div className={`conten ${heyConten}`}>
                                        { heyConten === "heyConten" ? <div className="meau_mobi" onClick={this.closeMeau}> <CloseIcon /> </div> : <div className="meau_mobi" onClick={this.showMeau}> <MenuIcon /> </div> }
                                    <h3>Dashboard</h3>
                                        
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>              
                        
            )
    }
        

    }

export default DashboarPage;