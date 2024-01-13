import React from 'react'
import styles from './components/Site.module.css'
import { PageOne } from './components/pages/PageOne'
import { PageTwo } from './components/pages/PageTwo'
import { PageThree } from './components/pages/PageThree'
import {NavLink, Navigate, Route, Routes} from 'react-router-dom'
import { Error404 } from './components/pages/Error404'

function App() {
	return (
		<div>
			<div className={styles.header}>
				<h1>HEADER</h1>
			</div>
			<div className={styles.body}>
				<nav className={styles.nav}>
					<div>
						<NavLink
							to={'/page/page1'}
							className={({ isActive}) =>
								isActive ? styles.active : styles.navLink
							}
						> Page 1</NavLink>
					</div>
					<div>
						<NavLink
							to={'/page/page2'}
							className={({ isActive}) =>
								isActive ? styles.active : styles.navLink
							}
						> Page 2</NavLink>
					</div>
					<div>
						<NavLink
							to={'/page/page3'}
							className={({ isActive}) =>
								isActive ? styles.active : styles.navLink
							}
						> Page 3</NavLink>
						{/*<Link to={'/page/page3'}> Page 3</Link>*/}
					</div>
				</nav>
				<div className={styles.content}>
					<Routes>
						<Route
							path={'/'}
							element={<Navigate to={'/page/page1'} />}
						></Route>

						<Route
							path={'/page/page1'}
							element={<PageOne />}
						></Route>
						<Route
							path={'/page/page2'}
							element={<PageTwo />}
						></Route>
						<Route
							path={'/page/page3'}
							element={<PageThree />}
						></Route>

						<Route
							path={'/page/error'}
							element={<Error404 />}
						></Route>
						<Route
							path={'/*'}
							element={<Navigate to={'/page/error'} />}
						></Route>
					</Routes>
				</div>
			</div>
			<div className={styles.footer}>abibas 2023</div>
		</div>
	)
}

export default App
