import './Global.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Global({ countries }) {
	const [search, setSearch] = useState('');
	const [filterCountries, setFilterCountries] = useState([]);
	useEffect(() => {
		if (countries.length) {
			setFilterCountries(
				countries.filter((country) => {
					console.log(country);
					let lower = country.Country.toLowerCase();
					let lowerSearch = search.toLowerCase();
					console.log(lower);
					return lower.indexOf(lowerSearch) !== -1;
				})
			);
		}
	}, [search]);
	if (!filterCountries) {
		return <p>Loading country data...</p>;
	}
	return (
		<section className='container'>
			<input
				type='text'
				placeholder='Type or click country'
				onChange={(e) => setSearch(e.target.value)}
			/>

			{filterCountries.map((country) => (
				<Link to={`/country/${country.CountryCode}`} key={country.CountryCode}>
					<div>
						<p>{country.Country}</p>
					</div>
				</Link>
			))}
		</section>
	);
}

export default Global;
