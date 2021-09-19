import React from 'react';
import './Country.css';
import { useParams } from 'react-router-dom';

function Country({ countries }) {
	const { CountryCode } = useParams();
	countries.map(item => {
		return (
			<div className='container' key={CountryCode}>
				<ul>
					<p>{item.Country}</p>;
                    <li>{item.NewConfirmed}</li>
					<li>{item.TotalConfirmed}</li>
					<li>{item.TotalDeaths}</li>
					<li>{item.TotalRecovered}</li>
				</ul>
			</div>
		);
	});
}

export default Country;
