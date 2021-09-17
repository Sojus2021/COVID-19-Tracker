import './App.css';
import Global from './Components/Global/Global.js';
// import Search from './Components/Search/Search.js';
import { useState, useEffect } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import About from './Components/About/About';

function App() {
	const [countries, setCountries] = useState();

	const url = `https://api.covid19api.com/summary`;

	// let list = ({ countries, setCountries }) => {

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
				<Link to='/About'>
					<p>About</p>
				</Link>
				<button>Search</button>
				<button>Global</button>
				<button>Recovered</button>
			</nav>
			<h1>COVID-19 Tracker</h1>
			{/* <form>
				<label>
					Type any country:
					<input type='text' placeholder='Country' value='' />
				</label>
				<button>Submit</button>
			</form> */}

			<div className='App'>
				<Route path='/' render={() => <Global countries={countries} />} />
				{/* <Route path='/' render={() => <Search countries={countries} />} /> */}
				<Route path='/' component={About} />
			</div>
			{/* return <div>{list}</div>; */}
		</main>
	);
}

export default App;
