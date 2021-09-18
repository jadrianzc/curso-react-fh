import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

const useFeetchGifs = (categories) => {
	const [state, setState] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {
		getGifs(categories).then((imgs) =>
			setTimeout(() => {
				setState({
					data: imgs,
					loading: false,
				});
			}, 3000)
		);
	}, [categories]);

	return state;
};

export default useFeetchGifs;
