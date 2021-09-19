import './Global.css' 
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Global({ countries }) {
	if (!countries) {
		return <p>Loading country data...</p>;
	}
	return (
		<section className='container'>
			{countries.map((country) => (
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
