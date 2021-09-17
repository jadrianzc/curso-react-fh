import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GiftGrid from './components/GiftGrid';

const GiftExpertApp = () => {
	const [category, setCategory] = useState(['One Piece']);

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategory={setCategory} />
			<hr />
			<ol>
				{category.map((categories) => (
					<GiftGrid key={categories} categories={categories} />
				))}
			</ol>
		</>
	);
};

export default GiftExpertApp;
