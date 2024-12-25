import {createBrowserRouter,} from 'react-router-dom';
import {Error404} from '../components/pages/Error404';
import React from 'react';
import {Model} from '../components/pages/Model';
import {Adidas} from '../components/pages/Adidas';
import {Puma} from '../components/pages/Puma';
import {Abibas} from '../components/pages/Abibas';
import {Prices} from '../components/pages/Prices';
import App from '../App';
import ProtectedPage from '../components/pages/ProtectedPage';
import ProtectedRoute from './ProtectedRoute';

export const PATH = {
  ADIDAS: '/adidas',
  PUMA: '/puma',
  ABIBAS: '/abibas',
  MODEL: '/:producer/:id',
  PRICES: '/prices',
  ER404: '/page/error',
  PROTECTED_PAGE: '/protected',
} as const

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error404 />,
		children: [
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
				path: PATH.PROTECTED_PAGE,
				element: (
					<ProtectedRoute>
						<ProtectedPage />
					</ProtectedRoute>
				),
			},
			{
				path: PATH.ER404,
				element: <Error404 />,
			},
		],
	},
])