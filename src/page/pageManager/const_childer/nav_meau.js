import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import TocIcon from '@material-ui/icons/Toc';    
import SmsIcon from '@material-ui/icons/Sms';
import RoomIcon from '@material-ui/icons/Room';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import {
  Link
} from "react-router-dom";



class NavMeauBar extends React.Component{
    constructor(props){
            super(props);

            this.state = {
                active:false,
                active1:false,
                active2:false,
                active3:false,
                active4:false,
                active5:false,
                active6:false
            }
        }



        shouldComponentUpdate(){
        	return false
        }

        render(){

        	const {active,active1,active2,active3,active4,active5,active6} = this.state
        	const navMeau = [
						{
							nav:<li className={this.props.activeDashboard === true ? "active" : ""}><Link to="/dashboard"><DashboardIcon /><span> DASHBOARD</span> </Link></li>
						},
						{
							nav:<li className={this.props.activeProduct === true ? "active" : ""}><Link to="/create"><CreateNewFolderIcon /><span>Create Product</span> </Link></li>
						},
						{
							nav:<li className={this.props.active === true ? "active" : ""}><Link to="/manager"><TocIcon /> <span>TABLE LIST</span> </Link></li>
						},
						{
							nav:<li className={this.props.activeBlog === true ? "active" : ""}><Link to="create/blog"><SmsIcon /> <span>Create Blog</span> </Link></li>
						},
						{
							nav:<li className={active4 === true ? "active" : ""}><Link to="manager"><TocIcon /><span> ICONS</span> </Link></li>
						},
						{
							nav:<li className={active5 === true ? "active" : ""}><Link to="manager"><RoomIcon /><span> MAPS </span></Link></li>
						},
						{
							nav:<li className={active6 === true ? "active" : ""}><Link to="manager"><NotificationsNoneIcon /><span> NOTIFICATIONS</span></Link></li>
						}
					]

        	var navMeauBar = navMeau.map((nav, index)=>{
    		return ( 
			    <ul key={index}>
				    {nav.nav}
				</ul>	 
    		)
    	})
        	return(
        		<div className="nav_meau">
        			<ul>
						{navMeauBar}
					</ul>
				</div>
        	)
        }
    }

export default NavMeauBar;