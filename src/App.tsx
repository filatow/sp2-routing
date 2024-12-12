import React from 'react'
import {Adidas} from './components/pages/Adidas'
import {Puma} from './components/pages/Puma'
import {Navigate, NavLink, Route, Routes} from 'react-router-dom'
import {Error404} from './components/pages/Error404'
import {S} from './components/pages/_styles'
import {Model} from './components/pages/Model';
import {Prices} from './components/pages/Prices';

const PATH = {
  PAGE1: '/adidas',
  PAGE2: '/puma',
  PAGE3: '/abibas',
  PRICES: '/prices',
  ER404: '/page/error',
} as const

export default function App() {
  return (
    <div>
      <S.Header>
        <h1>HEADER</h1>
      </S.Header>
      <S.Body>
        <S.Nav>
          <S.NavWrapper>
            <NavLink to={PATH.PAGE1}> Adidas</NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
            <NavLink to={PATH.PAGE2}> Puma</NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
            <NavLink to={PATH.PAGE3}> Abibas</NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
            <NavLink to={PATH.PRICES}> Prices</NavLink>
          </S.NavWrapper>
        </S.Nav>
        <S.Content>
          <Routes>
            <Route path={'/'} element={<Navigate to={PATH.PAGE1}/>}></Route>

            <Route path={PATH.PAGE1} element={<Adidas/>}></Route>
            {/*<Route path={`${PATH.PAGE1}/:id`} element={<Model />}></Route>*/}
            <Route path={PATH.PAGE2} element={<Puma/>}></Route>
            {/*<Route path={`${PATH.PAGE2}/:id`} element={<Model />}></Route>*/}
            <Route path={`/:producer/:id`} element={<Model/>}></Route>

            <Route path={PATH.PRICES} element={<Prices/>}></Route>

            <Route path={'/*'} element={<Error404/>}></Route>
            {/*<Route path={PATH.ER404} element={<Error404 />}></Route>*/}
            {/*<Route path={'/*'} element={<Navigate to={PATH.ER404} />}></Route>*/}
          </Routes>
        </S.Content>
      </S.Body>
      <S.Footer>abibas 2024</S.Footer>
    </div>
  )
}
