import {
	createBrowserRouter,
	Navigate,
	Outlet,
	RouteObject,
} from 'react-router-dom'
import { Error404 } from '../components/pages/Error404'
import React from 'react'
import { Model } from '../components/pages/Model'
import { Adidas } from '../components/pages/Adidas'
import { Puma } from '../components/pages/Puma'
import { Abibas } from '../components/pages/Abibas'
import { Prices } from '../components/pages/Prices'
import App from '../App'
import ProtectedPage from '../components/pages/ProtectedPage'
import Login from '../components/pages/Login'

export const PATH = {
	ROOT: '/',
	LOGIN: '/login',
	ADIDAS: '/adidas',
	PUMA: '/puma',
	ABIBAS: '/abibas',
	MODEL: '/:producer/:id',
	PRICES: '/prices',
	ER404: '/page/error',
	PROTECTED_PAGE: '/protected',
} as const

type PrivateRoutesProps = {
	isAuth?: boolean
}

const PrivateRoutes = ({ isAuth = false }: PrivateRoutesProps) => {
	return isAuth ? <Outlet /> : <Navigate to={PATH.LOGIN} />
}

const publicRoutes: RouteObject[] = [
	{
		path: PATH.LOGIN,
		element: <Login />,
	},
	{
		path: PATH.ROOT,
		element: <Navigate to={PATH.ADIDAS}/>,
	},
	{
		path: PATH.ADIDAS,
		element: <Adidas />,
	},
	{
		path: PATH.PUMA,
		element: <Puma />,
	},
	{
		path: PATH.ABIBAS,
		element: <Abibas />,
	},
	{
		path: PATH.PRICES,
		element: <Prices />,
	},
	{
		path: PATH.MODEL,
		element: <Model />,
	},
	{
		path: PATH.ER404,
		element: <Error404 />,
	},
]

const privateRoutes: RouteObject[] = [
	{
		path: PATH.PROTECTED_PAGE,
		element: <ProtectedPage />,
	},
]

export const router = createBrowserRouter([
	{
		path: PATH.ROOT,
		element: <App/>,
		errorElement: <Navigate to={PATH.ER404} />,
		children: [
			...publicRoutes,
			{
				element: <PrivateRoutes />,
				children: privateRoutes,
			},
		],
	},
])
