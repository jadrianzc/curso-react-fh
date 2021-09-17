export const getGifs = async (categories) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=zbHpu7IjTKA7qb22RaJyQbxmRLdSKic0&limit=10&q=${encodeURI(
		categories
	)}`;

	const resp = await fetch(url);
	const { data } = await resp.json();
	const gifs = data.map((img) => {
		return {
			id: img.id,
			title: img.title,
			url: img.images?.downsized_medium.url,
		};
	});

	return gifs;
};
