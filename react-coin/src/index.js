import React from 'react';
import ReactDOM from 'react-dom';

// ES6 Arrow function (functional component)
const App = () => {
	const title = 'React Coin';

	return (
		<div>
			<h1>{title}</h1>

			<p>Up to date crypto-currencies financial data</p>
		</div>
	);
};

ReactDOM.render(
	<App />,
	document.getElementById('root')
);