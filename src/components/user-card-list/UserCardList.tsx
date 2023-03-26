import React, { Component } from 'react';
import User from '../../models/user';
import { UserCard } from '../user-card/UserCard';

interface UserCardListProps {
  users: User[];
}

export default class UserCardList extends Component<UserCardListProps> {
  constructor(props: UserCardListProps) {
    super(props);
  }

  render() {
    return (
      <div className="form-user-cards-wrapper">
        <h1 className="form-title">Users list</h1>
        <div className="form-user-cards" role="list">
          {this.props.users.length === 0 && <div>No users were added</div>}
          {this.props.users.map((el, i) => (
            <UserCard
              firstName={el.firstName}
              lastName={el.lastName}
              email={el.email}
              phoneNumber={el.phoneNumber}
              birthday={el.birthday}
              country={el.country}
              picFile={el.picFile}
              recieveNotif={el.recieveNotif}
              contestToData={el.contestToData}
              key={i}
            />
          ))}
        </div>
      </div>
    );
  }
}
