import { useParams } from 'react-router-dom';
import './Search.css';
// import { useState } from 'react';

function Search({ countries }) {
	const { CountryCode } = useParams();
	if (countries) {
		console.log(countries);
		// let countryArr = [...countries];
		let country = countries.filter(
			(item) => item.CountryCode === CountryCode
            );
            let count = country[0];
	}
	if (!countries) {
		return <p>Loading...</p>;
	}
	return (
		<div className='container'>
			<div className='details'>
				{/* <h3>
					{count.Country}
				</h3>
				<ul>
					<li>New Confirmed Cases: {count.NewConfirmed}</li>
					<li>Total Confirmed Cases: {count.TotalConfirmed}</li>
					<li>Total Deaths: {count.TotalDeaths}</li>
					<li>Total Recovered: {count.TotalRecovered}</li>
				</ul> */}
			</div>
		</div>
	);
}

export default Search;
