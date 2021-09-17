import React, { useState } from 'react';
import AddCategory from './components/AddCategory';

const GiftExpertApp = () => {
	const [category, setCategory] = useState(['One Piece', 'Naruto', 'Dragon Ball']);

	return (
		<>
			<h2>GiftExpertApp</h2>
			<AddCategory setCategory={setCategory} />
			<hr />
			<ol>
				{category.map((categories) => (
					<li key={categories}>{categories}</li>
				))}
			</ol>
		</>
	);
};

export default GiftExpertApp;
