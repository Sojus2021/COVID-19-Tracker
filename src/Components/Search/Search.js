import Global from '../Global/Global';

function Search(countries) {
	countries.map((country) => {
		return (
			<div className='details-container'>
				<div className='details'>
					<ul>
						<li>{country.NewConfirmed}</li>
						<li>{country.TotalConfirmed}</li>
						<li>{country.TotalDeaths}</li>
						<li>{country.TotalRecovered}</li>
					</ul>
				</div>
			</div>
		);
	});
}

export default Search;
