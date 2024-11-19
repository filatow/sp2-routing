import React from 'react'
import { adidasArr } from './Adidas'
import { pumaArr } from './Puma'
import { useLocation, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Producer, Product } from './_types'

const data: Record<Producer, Product[]> = {
	adidas: adidasArr,
	puma: pumaArr,
}

export const Model = () => {
	const { id } = useParams()
	const location = useLocation()
	const producer = location.pathname.split('/')[1] as Producer
	const product = data[producer].find((p) => p.id === Number(id))

	if (!product) return <h2>Такой модели не существует</h2>

	return (
		<StyledModel>
			<h2>Модель: {product.model}</h2>
			<p>Коллекция: {product.collection}</p>
			<p>Цена: {product.price}</p>
			<Image src={product.picture} alt={product.model} />
		</StyledModel>
	)
}

const StyledModel = styled.div`
	text-align: center;
`

const Image = styled.img`
	max-width: 100%;
`
