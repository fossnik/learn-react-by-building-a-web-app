import React from 'react'
import { handleResponse } from '../../helpers'
import {API_URL} from '../../config'
import Loading from '../common/Loading'
import Table from './Table'

class List extends React.Component {
	constructor() {
		super();

		// initial state
		this.state = {
			loading: false,
			currencies: [],
			error: null,
		}
	}

	// lifecycle method (aids unloading resources)
	componentDidMount() {
		this.setState({loading:true});

		fetch(`${API_URL}/cryptocurrencies?page=1&perPage=20`)
			.then(handleResponse)
			.then((data) => {
				this.setState({
					currencies: data.currencies,
					loading: false
				})
			})
			.catch((error) => {
				this.setState({
					error: error.errorMessage,
					loading: false
				})
			})
	}

	static readerChangePercent(percent) {
		if (percent > 0)
			return <span className="percent-raised">{percent}% &uarr;</span>;
		else if (percent < 0)
			return <span className="percent-fallen">{percent}% &darr;</span>;
		else
			return <span>{percent}</span>;
	}

	render() {
		const { loading, error, currencies } = this.state;

		if (loading)
			return <div className="loading-container"><Loading/></div>;

		if (error)
			return <div className="error">{error}</div>;

		return (
			<Table
				currencies={currencies}
				renderChangePercent={List.readerChangePercent}
			/>
		)
	}
}

export default List;