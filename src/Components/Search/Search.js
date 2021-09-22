import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './Search.css';

function Search(props) {
	const [country, setCountry] = useState(null);
	const { CountryCode } = useParams();

	useEffect(() => {
		const url = `https://api.covid19api.com/summary`;

		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				let specCountry = json.Countries.find(
					(country) => country.CountryCode === CountryCode
				);
				setCountry(specCountry);
			})
			.catch(console.error);
	}, []);
	if (!country) {
		return <p>Loading country data...</p>;
	} else {
	}
	return (
		<div className='container2' id='individual' key={CountryCode}>
			<div className='card'>
			<ul>
				<div className='card-title'>
				<p>{country.Country}</p>
				</div>

				<div className='list'>
				<li>New Confirmed Cases: {country.NewConfirmed}</li>
				<li>Total Confirmed Cases: {country.TotalConfirmed}</li>
				<li>Total Deaths: {country.TotalDeaths}</li>
				<li>New Deaths: {country.NewDeaths}</li>
				</div>
				
			</ul>
			</div>
		</div>
	);
}
export default Search;
