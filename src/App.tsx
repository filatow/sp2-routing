import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { S } from './components/pages/_styles'
import { PATH } from './routes/router'

export default function App() {
	const navigate = useNavigate()
	const handleNavigateBack = () => {
		navigate(-1)
	}

	return (
		<div>
			<S.Header>
				<h1>HEADER</h1>
			</S.Header>
			<S.Body>
				<S.Nav>
					<S.NavWrapper>
						<NavLink to={PATH.ADIDAS}> Adidas</NavLink>
					</S.NavWrapper>
					<S.NavWrapper>
						<NavLink to={PATH.PUMA}> Puma</NavLink>
					</S.NavWrapper>
					<S.NavWrapper>
						<NavLink to={PATH.ABIBAS}> Abibas</NavLink>
					</S.NavWrapper>
					<S.NavWrapper>
						<NavLink to={PATH.PRICES}> Prices</NavLink>
					</S.NavWrapper>
					<S.NavWrapper>
						<NavLink to={PATH.PROTECTED_PAGE}>
							ProtectedPage
						</NavLink>
					</S.NavWrapper>
				</S.Nav>
				<S.Content>
					<S.HorizontalNavigation>
						<S.LinkLikeButton to={PATH.ROOT}>Main page</S.LinkLikeButton>
						<S.ButtonLikeLink onClick={handleNavigateBack}>Go back</S.ButtonLikeLink>
					</S.HorizontalNavigation>
					<Outlet />
				</S.Content>
			</S.Body>
			<S.Footer>abibas 2024</S.Footer>
		</div>
	)
}
