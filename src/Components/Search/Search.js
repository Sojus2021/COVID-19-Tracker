import { useParams } from 'react-router-dom';
import './Search.css';
// import { useState } from 'react';

function Search({ countries }) {
	const { CountryCode } = useParams();
	let list = [...countries];
	let list2 = list.filter((item) => item.CountryCode === CountryCode);
	let list3 = list2[0];

	return (
		<div className='container'>
			<div className='details'>
				<h3>
					{CountryCode}: {list3.Country}
				</h3>
				<ul>
					<li>New Confirmed Cases: {list3.NewConfirmed}</li>
					<li>Total Confirmed Cases: {list3.TotalConfirmed}</li>
					<li>Total Deaths: {list3.TotalDeaths}</li>
					<li>Total Recovered: {list3.TotalRecovered}</li>
				</ul>
			</div>
		</div>
	);
}

export default Search;
