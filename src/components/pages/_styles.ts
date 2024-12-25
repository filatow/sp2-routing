import styled from 'styled-components'
import {NavLink} from 'react-router-dom';

const Header = styled.header`
	background-color: #000000;
	width: 100%;
	height: 100px;
	text-align: center;
	color: white;
`

const Body = styled.main`
	display: flex;
`

const Nav = styled.nav`
	background-color: white;
	min-height: 400px;
	width: 30%;
	color: #282c34;
	font-size: 30px;
`

const HorizontalNavigation = styled.nav`
	display: flex;
	justify-content: center;
`

const Content = styled.div`
	background-color: #282c34;
	min-height: 400px;
	width: 70%;
	color: white;
	font-size: 30px;
`

const Footer = styled.div`
	background-color: #000000;
	width: 100%;
	height: 120px;
	text-align: center;
	color: white;
`

const NavWrapper = styled.div`
	margin-left: 10px;
	font-size: 20px;

	& > a {
		text-decoration: none;
		color: #1e3786;
	}

	& > a:hover {
		text-decoration: underline;
	}

	& > a.active {
		color: #28cfdf;
	}
`

const LinkLikeButton = styled(NavLink)`
	height: 54px;
	background-color: #007bff;
	color: #fff;
	text-decoration: none;
	border-radius: 5px;
	font-size: 30px;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		background-color: #0056b3;
	}
`

const ButtonLikeLink = styled.button`
	margin-left: 5px;
	height: 55px;
	background-color: #ff00b7;
	color: #fff;
	text-decoration: none;
	border-radius: 5px;
	font-size: 30px;
	cursor: pointer;

	:hover {
		background-color: #980569;
	}
`

export const S = {
	NavWrapper,
	Header,
	Nav,
	HorizontalNavigation,
	Body,
	Content,
	Footer,
	LinkLikeButton,
	ButtonLikeLink,
}
