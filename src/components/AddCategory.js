import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategory }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (inputValue.trim().length > 2) {
			setCategory((category) => [...category, inputValue]);
			setInputValue('');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="textt" placeholder="Categorias" value={inputValue} onChange={handleInputChange} />
		</form>
	);
};

AddCategory.propTypes = {
	setCategory: PropTypes.func.isRequired,
};

export default AddCategory;
