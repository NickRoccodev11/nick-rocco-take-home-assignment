const ArtListing = ({ artwork, setSelectedImage }) => {
	return (
		<li onClick={() => setSelectedImage(artwork)}>
			{artwork.title ? artwork.title : 'untitled'},
			{artwork.date_display ? artwork.date_display : 'unknown date'} by{' '}
			{artwork.artist_title ? artwork.artist_title : 'anon'}
		</li>
	);
};

export default ArtListing;
