import React, { Component } from 'react'

/**
 * This component don't use
 */

export default class PeopleSearch extends Component {
	render() {
		return (
			<div className="search">
				<input type="text" placeholder="search" />
				<i className="fa fa-search" />
			</div>
		);
	}
}