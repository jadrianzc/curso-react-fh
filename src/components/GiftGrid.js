import React, { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GiftGrid = ({ categories }) => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		getGifs(categories).then((img) => setImages(img));
	}, [categories]);

	return (
		<>
			<h3>{categories.toUpperCase()}</h3>
			<div className="card-grid">
				{images.map((img) => (
					<GifGridItem key={img.id} {...img} />
				))}
			</div>
		</>
	);
};

export default GiftGrid;
