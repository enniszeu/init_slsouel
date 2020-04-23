import React from 'react';
import CreatePage from './page/pageCreate/CreatePage';
import Manager from './page/pageManager/ManagerPage';
import Dashboard from './page/pageDashboard/DashboardPage';
import Cart from './page/pageCart/CartPage';
import Pay from './page/pageCart/PayPage';
import PageHome from './home/PageHome';
import ViewProduct from './home/pageView/ViewProduct';
import Man from './home/pageMan/Man';
import Girl from './home/pageGirl/Girl';



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
		path:"/man",
		exact:true,
		main: () => <Man />
	},
	{
		path:"/girl",
		exact:true,
		main: () => <Girl />
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