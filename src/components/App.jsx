import { useState } from 'react';

import { searchArtworks } from '../api';

import ArtListing from './ArtListing';
import { Footer } from './Footer';
import ImageDetails from './ImageDetails';
import { SearchForm } from './SearchForm';
import './App.css';

export function App() {
	const [searchResults, setSearchResults] = useState([]);
	const [selectedImage, setSelectedImage] = useState({});
	async function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/api.js
		searchArtworks(query).then((json) => {
			// console.log(json.data);
			setSearchResults(json.data);
		});
	}
	return (
		<div className="App">
			{selectedImage.image_id ? (
				<ImageDetails
					artist={selectedImage.artist_title}
					image={selectedImage.image_id}
					setSelectedImage={setSelectedImage}
					title={selectedImage.title}
				/>
			) : (
				<>
					<h1>TCL Career Lab Art Finder</h1>
					<SearchForm onSearchSubmit={onSearchSubmit} />
					<ul>
						{searchResults.length &&
							searchResults.map((result) => {
								return (
									<ArtListing
										key={result._score}
										artwork={result}
										setSelectedImage={setSelectedImage}
									/>
								);
							})}
					</ul>
				</>
			)}

			<Footer />
		</div>
	);
}
