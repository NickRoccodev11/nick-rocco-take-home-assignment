const ImageDetails = ({ setSelectedImage, artist, title, image }) => {
	return (
		<div>
			<p>{artist ? artist : 'anon.'}</p>
			<p>{title ? title : 'untitled'}</p>
			<button onClick={() => setSelectedImage({})}>back</button>
			<img
				alt=""
				src={`https://www.artic.edu/iiif/2/${image}/full/843,/0/default.jpg`}
			/>
		</div>
	);
};

export default ImageDetails;
