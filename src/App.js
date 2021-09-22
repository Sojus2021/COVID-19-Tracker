import './App.css';
import About from './Components/About/About';
import Global from './Components/Global/Global.js';
import Search from './Components/Search/Search.js';
import { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import {Button, PrimaryButton} from './Components/Buttons';

function App() {
	const [countries, setCountries] = useState([]);

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
				<Button>
					<Link to='/About'>About</Link>
				</Button>
				<PrimaryButton>
					<Link to='/'>Home</Link>
				</PrimaryButton>
			</nav>

			<div>
				<h1>^TraCOVID-19_</h1>
				<p>Tracking CoronaVirus Across The Globe </p>
			</div>

			<div className='App'>
				<Route path='/' exact render={() => <Global countries={countries} />} />
				<Route
					path='/country/:CountryCode'
					exact
					render={() => <Search countries={countries} />}
				/>

				<Route path='/About'>
					<About />
				</Route>
			</div>
		</main>
	);
}

export default App;
