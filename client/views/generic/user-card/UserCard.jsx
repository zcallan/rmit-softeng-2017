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
        <small>{user.address}</small>
        <br />
        <small>{user.phone}</small>
      </div>
    );
  }
}

export default UserCard;
