import React from 'react'
import { PageOne } from './components/pages/PageOne'
import { PageTwo } from './components/pages/PageTwo'
import { PageThree } from './components/pages/PageThree'
import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import { Error404 } from './components/pages/Error404'
import { S } from './components/pages/_styles'

const PATH = {
	PAGE1: '/page/page1',
	PAGE2: '/page/page2',
	PAGE3: '/page/page3',
	ER404: '/page/error',
} as const

function App() {
	return (
		<div>
			<S.Header>
				<h1>HEADER</h1>
			</S.Header>
			<S.Body>
				<S.Nav>
					<S.NavWrapper>
						<NavLink to={PATH.PAGE1}> Page 1</NavLink>
					</S.NavWrapper>
					<S.NavWrapper>
						<NavLink to={PATH.PAGE2}> Page 2</NavLink>
					</S.NavWrapper>
					<S.NavWrapper>
						<NavLink to={PATH.PAGE3}> Page 3</NavLink>
					</S.NavWrapper>
				</S.Nav>
				<S.Content>
					<Routes>
						<Route
							path={'/'}
							element={<Navigate to={PATH.PAGE1} />}
						></Route>

						<Route path={PATH.PAGE1} element={<PageOne />}></Route>
						<Route path={PATH.PAGE2} element={<PageTwo />}></Route>
						<Route
							path={PATH.PAGE3}
							element={<PageThree />}
						></Route>

						<Route path={'/*'} element={<Error404 />}></Route>
						{/*<Route path={PATH.ER404} element={<Error404 />}></Route>*/}
						{/*<Route path={'/*'} element={<Navigate to={PATH.ER404} />}></Route>*/}
					</Routes>
				</S.Content>
			</S.Body>
			<S.Footer>abibas 2023</S.Footer>
		</div>
	)
}

export default App
