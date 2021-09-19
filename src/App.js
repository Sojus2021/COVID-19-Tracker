import './App.css';
import styled from 'styled-components';
import Global from './Components/Global/Global.js';
import Search from './Components/Search/Search.js';
import Country from './Components/Country/Country.js';
import { useState, useEffect } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import About from './Components/About/About';

function App() {
	const [countries, setCountries] = useState();

	const url = `https://api.covid19api.com/summary`;

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				let randomCountries = json;
				setCountries(json.Countries);
			})
			.catch(console.error);
	}, []);
	return (
		<main>
			<nav>
				<button>
					<Link to='/About'>About</Link>
				</button>
				<button>Search</button>
				<button>Global</button>
				<button>Recovered</button>
			</nav>
			<div>
				<h1>COVID-19 Tracker</h1>
			</div>
			{/* <form>
				<label>
					Type any country:
					<input type='text' placeholder='Country' value='' />
				</label>
				<button>Submit</button>
			</form> */}

			<div className='App'>
				<Route path='/' render={() => <Global countries={countries} />} />
				<Route path='/c' render={() => <Search countries={countries} />} />
				<Route path='/d' render={() => <Country countries={countries} />} /> 
				<Route exact path='/About' component={About} />
			</div>
		</main>
	);
}

export default App;
