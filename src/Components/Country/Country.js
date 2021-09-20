import React from 'react';
import './Country.css';
import { useParams } from 'react-router-dom';

function Country({ countries }) {
	const { CountryCode } = useParams();

	if (!countries.length) {
		return <p>Loading country data...</p>;
	}
	return (
		<div>

			{countries.filter(element => element.CountryCode === CountryCode).map((element) => {
				return (
					<div className='container' key={CountryCode}>
					
						<ul>
							<p>{element.Country}</p>
							<li>New Confirmed Cases: {element.NewConfirmed}</li>
							<li>Total Confirmed Cases: {element.TotalConfirmed}</li>
							<li>Total Deaths: {element.TotalDeaths}</li>
							<li>Total Recovered: {element.TotalRecovered}</li>
						</ul>
					</div>
				);
			})}
		</div>
	);
}

export default Country;
