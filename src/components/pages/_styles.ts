import styled from 'styled-components'


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

const Content = styled.div`
	 background-color:#282c34;
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
		text-decoration: none;
		color: #28cfdf;
	}

	& > a.active:hover {
		cursor: default;
	}
`


export const S = {
	NavWrapper,
	Header,
	Nav,
	Body,
	Content,
	Footer,
}