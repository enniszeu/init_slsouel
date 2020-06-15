import React from 'react';
import CreatePage from './page/pageCreate/CreatePage';
import Manager from './page/pageManager/ManagerPage';
import Dashboard from './page/pageDashboard/DashboardPage';
import CreateBlog from './page/pageCreateBlog/CreateBlogPage';
import AddChiTiet from './page/pageAddChiTiet/AddChiTietPage';
import Cart from './page/pageCart/CartPage';
import Pay from './page/pageCart/PayPage';
import PageHome from './home/PageHome';
import ViewProduct from './home/pageView/ViewProduct';
import Mypham from './home/pageMypham/Mypham';
import Thoitrang from './home/pageThoitrang/Thoitrang';
import Phukien from './home/pagePhukien/Phukien';
import Sale from './home/pageSale/Sale';
import Trangtri from './home/pageTrangtri/Trangtri';
import Giaitri from './home/pageGiaitri/Giaitri';
import Dienthoai from './home/pageDienthoai/Dienthoai';
import Vanphong from './home/pageVanphong/Vanphong';
import Trangsuc from './home/pageTrangsuc/Trangsuc';



const routes = [
	{
		path:"/",
		exact:true,
		main: () => <PageHome />
	},
	{
		path:"/dashboard",
		exact:true,
		main: () => <Dashboard />
	},
	{
		path:"/create",
		exact:true,
		main: () => <CreatePage />
	},
	{
		path:"/manager",
		exact:true,
		main: () => <Manager />
	},
	{
		path:"/manager/chitiet",
		exact:true,
		main: () => <AddChiTiet />
	},
	{
		path:"/create/blog",
		exact:true,
		main: () => <CreateBlog />
	},
	{
		path:"/mypham",
		exact:true,
		main: () => <Mypham />
	},
	{
		path:"/thoitrang",
		exact:true,
		main: () => <Thoitrang />
	},
	{
		path:"/phukien",
		exact:true,
		main: () => <Phukien />
	},
	{
		path:"/sale",
		exact:true,
		main: () => <Sale />
	},

	{
		path:"/trangtri",
		exact:true,
		main: () => <Trangtri />
	},
	{
		path:"/giaitri",
		exact:true,
		main: () => <Giaitri />
	},
	{
		path:"/dienthoai",
		exact:true,
		main: () => <Dienthoai />
	},
	{
		path:"/vanphong",
		exact:true,
		main: () => <Vanphong />
	},
	{
		path:"/trangsuc",
		exact:true,
		main: () => <Trangsuc />
	},
	{
		path:"/product/:id",
		exact:true,
		main: ({match, history})=> <ViewProduct match={match} history={history} />
	},
	{
		path:"/cart",
		exact:true,
		main: () => <Cart />
	},
	{
		path:"/pay",
		exact:true,
		main: () => <Pay />
	}
]



export default routes;