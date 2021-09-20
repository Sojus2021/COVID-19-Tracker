import React from 'react';
import './Country.css';
import { useParams } from 'react-router-dom';

function Country({ countries }) {
	const { CountryCode } = useParams();
	countries.map((element) => {
        if (!countries) {
		return <p>Loading country data...</p>;
        }
		return (
			<div className='container' key={CountryCode}>
				<h2>Country</h2>
				<ul>
					<p>{element.Country}</p>;
					<li>New Confirmed Cases: {element.NewConfirmed}</li>
					<li>Total Confirmed Cases: {element.TotalConfirmed}</li>
					<li>Total Deaths: {element.TotalDeaths}</li>
					<li>Total Recovered: {element.TotalRecovered}</li>
				</ul>
			</div>
		);
	});
}

export default Country;
