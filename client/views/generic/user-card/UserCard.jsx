import './userCard.scss';
import React, { Component } from 'react';

class UserCard extends Component {
  render() {
    const user = this.props.user;

    return (
      <div className="user-card">
        <i className="material-icons">person</i>
        <h3>{user.name.full}</h3>
        <small>{user.email}</small>
        <br /><br />
        <small>{user.address || 'No address given'}</small>
        <br />
        <small>{user.phone || 'No phone given'}</small>
      </div>
    );
  }
}

export default UserCard;
