import React from 'react';
import { useState } from 'react';

function Type(countries) {
	const [searchTerm, setSearchTerm] = useState('');
	<form>
		<label>
			Type any country:
			<input
				type='text'
				placeholder='Country'
				onChange={(e) => {
					setSearchTerm(e.target.value);
					{
						countries
							.filter((element) => {
								if (searchTerm == '') {
									return element;
								} else if (
									element.Country.toLowerCase().includes(
										searchTerm.toLowerCase()
									)
								) {
									return element;
								}
							})
							.map((element) => {
								return (
									<div className='user' key={'key'}>
										<p>{element.Country}</p>
									</div>
								);
							});
					}
				}}
			/>
		</label>
	</form>;
}

export default Type;
