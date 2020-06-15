import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import {
  Link
} from "react-router-dom";

class NavBar extends React.Component{
	constructor(props){
            super(props);
            this.state = {
                backg:"",
                show_bar:"",
                phukien:false,
                trangsuc:false,
                noithat:false,
                giaitri:false,
                dienthoai:false,
                vanphong:false,
                home:true
        	}
    }
    show_bar=()=>{
    	this.setState({show_bar:"show_bar"})
    }
    close_bar=()=>{
    	this.setState({show_bar:""})
    }

    closeHome=()=>{
    this.setState({
        phukien:false,
        trangsuc:false,
        noithat:false,
        giaitri:false,
        dienthoai:false,
        vanphong:false,
        home:true
    })
}

    showTrangsuc=()=>{
    	this.setState({
    		phukien:false,
            trangsuc:true,
            noithat:false,
            giaitri:false,
            dienthoai:false,
            vanphong:false,
            home:false
    	})
 
    }



     showPhukien=()=>{
    	this.setState({
    		phukien:true,
            trangsuc:false,
            noithat:false,
            giaitri:false,
            dienthoai:false,
            vanphong:false,
            home:false

    	})
    }


    showNoithat=()=>{
        this.setState({
            phukien:false,
            trangsuc:false,
            noithat:true,
            giaitri:false,
            dienthoai:false,
            vanphong:false,
            home:false
        })
    }



    showGiaitri=()=>{
        this.setState({
            phukien:false,
            trangsuc:false,
            noithat:false,
            giaitri:true,
            dienthoai:false,
            vanphong:false,
            home:false
        })
    }

    showDienthoai=()=>{
        this.setState({
            phukien:false,
            trangsuc:false,
            noithat:false,
            giaitri:false,
            dienthoai:true,
            vanphong:false,
            home:false
        })
    }


    showVanphong=()=>{
        this.setState({
            phukien:false,
            trangsuc:false,
            noithat:false,
            giaitri:false,
            dienthoai:false,
            vanphong:true,
            home:false
        })
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
        var ul_object_home = <ul>
							<li> <Link to="/sale" style={{color:"red"}}> SALE</Link></li>
							<li> <Link to="/trangsuc"> TRANG SỨC</Link> <i class="fas fa-chevron-right float_right" onClick={this.showTrangsuc}></i></li>
							<li> <Link to="/phukien"> PHỤ KIỆN/ TIỆN ÍCH</Link> <i class="fas fa-chevron-right float_right" onClick={this.showPhukien}></i></li>
							<li> <Link to="/trangtri"> TRANG TRÍ/NỘI THẤT</Link> <i class="fas fa-chevron-right float_right" onClick={this.showNoithat}></i></li>
							<li> <Link to="/giaitri"> GIẢI TRÍ</Link> <i class="fas fa-chevron-right float_right" onClick={this.showGiaitri}></i></li>
							<li> <Link to="/dienthoai"> ĐIỆN THOẠI</Link> <i class="fas fa-chevron-right float_right " onClick={this.showDienthoai}></i></li>
							<li> <Link to="/vanphong"> VĂN PHÒNG PHẨM</Link> <i class="fas fa-chevron-right float_right" onClick={this.showVanphong}></i></li>
						</ul>

        var ul_object_trangsuc =  <ul>
        							<li style={{border:"none", padding:"15px 0px", background:"#fff"}}><i className="fas fa-chevron-left float_left" onClick={this.closeHome}></i> TRANG SỨC</li>
									<li> <Link to="/"> Kính </Link></li>
									<li> <Link to="/"> Khuyên tai </Link></li>
									<li> <Link to="/"> Nhẫn </Link></li>
									<li> <Link to="/"> Vòng tay/ Vòng cổ </Link></li>
									<li> <Link to="/"> Phụ kiện tóc</Link></li>
								</ul>
		var ul_object_phukien_tienich =  <ul>
        							<li style={{border:"none", padding:"15px 0px", background:"#fff"}}><i className="fas fa-chevron-left float_left" onClick={this.closeHome}></i> PHỤ KIỆN/ TIỆN ÍCH </li>
									<li> <Link to="/"> Túi/Balo/Ví mini </Link></li>
									<li> <Link to="/"> Phụ kiện </Link></li>
									<li> <Link to="/"> Tiện ích </Link></li>
								</ul>

        var ul_object_trangtri_noithat =  <ul>
                                    <li style={{border:"none", padding:"15px 0px", background:"#fff"}}><i className="fas fa-chevron-left float_left" onClick={this.closeHome}></i> TRANG TRÍ/NỘI THẤT  </li>
                                    <li> <Link to="/"> Trang trí </Link></li>
                                    <li> <Link to="/"> Nội thất </Link></li>
                                    <li> <Link to="/">Gấu bông/Gối bông</Link></li>
                                </ul>

        var ul_object_giaitri =  <ul>
                                    <li style={{border:"none", padding:"15px 0px", background:"#fff"}}><i className="fas fa-chevron-left float_left" onClick={this.closeHome}></i> GIẢI TRÍ  </li>
                                    <li> <Link to="/"> Game  </Link></li>
                                    <li> <Link to="/"> Squishy/Squeeze </Link></li>
                                    <li> <Link to="/"> Popping cooking/Candy</Link></li>
                                </ul>

        var ul_object_dienthoai =  <ul>
                                    <li style={{border:"none", padding:"15px 0px", background:"#fff"}}><i className="fas fa-chevron-left float_left" onClick={this.closeHome}></i> ĐIỆN THOẠI  </li>
                                    <li> <Link to="/">Ốp điện thoại </Link></li>
                                    <li> <Link to="/">Phụ kiện điện thoại</Link></li>
                                </ul>

        var ul_object_vanphong =  <ul>
                                    <li style={{border:"none", padding:"15px 0px", background:"#fff"}}><i className="fas fa-chevron-left float_left" onClick={this.closeHome}></i>VĂN PHÒNG PHẨM </li>
                                    <li> <Link to="/"> Đồ dùng học tập  </Link></li>
                                    <li> <Link to="/"> Sticker  </Link></li>
                                    <li> <Link to="/"> Quà tặng  </Link></li>
                                </ul>

			return (  
			   <div className="menu_bar navbar-fixed-top" id="nav">
					<div className="show_nav" >
						{this.state.show_bar === "" ? <MenuIcon onClick={this.show_bar}/> : <CloseIcon onClick={this.close_bar}/>}
					</div>
					<div className="show_nav_mobie" id={this.state.show_bar}>
						<CloseIcon onClick={this.close_bar}/>
							{this.state.home === false ? "" : ul_object_home}
							{this.state.trangsuc === false ? "" : ul_object_trangsuc}
							{this.state.phukien === false ? "" : ul_object_phukien_tienich}
                            {this.state.noithat === false ? "" : ul_object_trangtri_noithat}
                            {this.state.giaitri === false ? "" : ul_object_giaitri}
                            {this.state.dienthoai === false ? "" : ul_object_dienthoai}
                            {this.state.vanphong === false ? "" : ul_object_vanphong}
						</div>
					<div className="logo_">
						<Link style={{color:"#000"}} to="">
							<img src="https://demo17.atiframe.com/wp-content/uploads/2020/03/logo.svg" />
						</Link>
					</div>
					<div className="nav_">
						<ul>
							<li> <Link to="/" style={{color:"red"}}> SALE</Link></li>
							<li> <Link to="/"> SLIME</Link></li>
							<li> <Link to="/"> TRANG SỨC</Link></li>
							<li> <Link to="/"> PHỤ KIỆN</Link></li>
							<li> <Link to="/"> TRANG TRÍ</Link></li>
							<li> <Link to="/"> GIẢI TRÍ</Link></li>
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