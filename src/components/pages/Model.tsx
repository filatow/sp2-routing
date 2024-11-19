import React from 'react'
import { adidasArr } from './Adidas'
import { pumaArr } from './Puma'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Producer, Product } from './_types'

const data: Record<Producer, Product[]> = {
	adidas: adidasArr,
	puma: pumaArr,
}

export const Model = () => {
	const { producer, id } = useParams<{ producer: Producer; id: string }>()
	const product =
		producer ? data[producer].find((p) => p.id === Number(id)) : null

	if (!product) return <h2>Такой модели не существует</h2>

	const { model, collection, price, picture } = product

	return (
		<StyledModel>
			<h2>Модель: {model}</h2>
			<p>Коллекция: {collection}</p>
			<p>Цена: {price}</p>
			<Image src={picture} alt={model} />
		</StyledModel>
	)
}

const StyledModel = styled.div`
	text-align: center;
`

const Image = styled.img`
	max-width: 100%;
`
