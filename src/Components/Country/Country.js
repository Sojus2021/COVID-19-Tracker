// import React from 'react';
// import './Country.css';
// import {useState} from 'react';
// import { useParams } from 'react-router-dom';

// function Country({ countries }) {
// 	const { CountryCode } = useParams();
//     const [searchTerm, setSearchTerm] = useState('');

// 	if (!countries.length) {
// 		return <p>Loading country data...</p>;
// 	}
// 	return (
// 		<div>
// 			<input
// 				type='text'
// 				placeholder='Country'
// 				onChange={(e) => {
// 					setSearchTerm(e.target.value);}}
//             />        
// 			{/* {countries
// 				.filter(element => {
//                     if (searchTerm == '') {
//                         return element
//                     } else if (element.Country.toLowerCase().includes(searchTerm.toLowerCase())) {
//                         return element
//                     }
//                         element.CountryCode === CountryCode).map((element) => {
// 					return (
// 						<div className='container' key={CountryCode}>
					
// 								<p>{element.Country}</p>
// 						</div>
// 					);
// 				})} */}
          
//         </div>
// 	);
// }

// export default Country;
