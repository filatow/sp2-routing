import React from 'react';
import pumaModel1 from '../../assets/puma/ca_pro_classic_sneakers.webp';
import pumaModel2 from '../../assets/puma/puma_smash_3.webp';
import pumaModel3 from '../../assets/puma/rs_x_efekt_sneakers_teenager.webp';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Product} from './_types';

export const pumaArr: Product[] = [
    {
        id: 1,
        model: 'CA Pro Classic Trainers',
        collection: 'CA Pro',
        price: '59.95€',
        picture: pumaModel1,
    },
    {
        id: 2,
        model: 'PUMA Smash 3.0 Year Of Sport Sneakers Unisex',
        collection: 'Under 50 Euros',
        price: '49.95€',
        picture: pumaModel2,
    },
    {
        id: 3,
        model: 'RS-X Efekt Youth Sneakers',
        collection: 'White Sneakers',
        price: '39.95€',
        picture: pumaModel3,
    },
]

export const Puma = () => {
    return (
        <div>
            <h2>PUMA</h2>
            <Images>
                {pumaArr.map((item) => (
                  <Link to={`/puma/${item.id}`} key={item.model}>
                      <img src={item.picture} alt={item.model} />
                  </Link>
                ))}
            </Images>
            <p>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                Why do we use it?
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
                as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions
                have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


                Where does it come from?
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
                more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
                Renaissance.
                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
        </div>
    );
};

const Images = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;

	a {
		width: 30%;
	}
	
	a > img {
		max-width: 100%;
	}
`
