import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { PATH } from './router'

type ProtectedRouteProps = {
	children: ReactNode
	hasAccess?: boolean
}

const ProtectedRoute = ({
	hasAccess = false,
	children,
}: ProtectedRouteProps) => {
	return <>
		{hasAccess ? children : <Navigate to={PATH.LOGIN} />}
	</>
}

export default ProtectedRoute
