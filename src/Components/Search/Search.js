import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function Search(props) {
	const [country, setCountry] = useState(null);
	const { CountryCode } = useParams();

	useEffect(() => {
		const url = `https://api.covid19api.com/summary`;
		// let url2 = `${url}${CountryCode}`;

		fetch(url)
        .then((res) => res.json())
        .then((json) => {
                console.log(json);
				let specCountry = json.Countries.find(country => country.CountryCode === CountryCode);
				setCountry(specCountry);
			})
			.catch(console.error);
	}, []);
	if (!country) {
		return <p>Loading country data...</p>;
	} else {
	}
	return (
		<div className='container' key={CountryCode}>
			<ul>
				<p>{country.Country}</p>
				<li>New Confirmed Cases: {country.NewConfirmed}</li>
				<li>Total Confirmed Cases: {country.TotalConfirmed}</li>
				<li>Total Deaths: {country.TotalDeaths}</li>
				<li>New Deaths: {country.NewDeaths}</li>
			</ul>
		</div>
	);
}
export default Search;
