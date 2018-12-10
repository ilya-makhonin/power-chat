import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserItem from '../components/UserItem';


class PeopleList extends Component {
	render() {
		return (
			<div className="people-list" id="people-list">
				<ul className="list">
					{this.props.people.map(user => {
						return <UserItem key={user.id} userName={user.userName} />
					})}
				</ul>
			</div>
		);
	}
}


const mapStateToProps = (state) => {
	return { people: state.peopleReducer };
};

const mapDispatchToProps = (dispatch) => {
	return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);
