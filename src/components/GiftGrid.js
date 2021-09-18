import React from 'react';
import useFeetchGifs from '../hooks/useFeetchGifs';
import GifGridItem from './GifGridItem';

const GiftGrid = ({ categories }) => {
	const { data: images, loading } = useFeetchGifs(categories);

	return (
		<>
			<h3>{categories.toUpperCase()}</h3>

			{loading && <p>Cargando...</p>}

			<div className="card-grid">
				{images.map((img) => (
					<GifGridItem key={img.id} {...img} />
				))}
			</div>
		</>
	);
};

export default GiftGrid;
