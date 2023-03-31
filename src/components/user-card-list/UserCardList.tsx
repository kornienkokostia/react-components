import React from 'react';
import User from '../../models/user';
import { UserCard } from '../user-card/UserCard';

interface UserCardListProps {
  users: User[];
}

export const UserCardList = (props: UserCardListProps) => {
  return (
    <div className="form-user-cards-wrapper">
      <h1 className="form-title">Users list</h1>
      <div className="form-user-cards" role="list">
        {props.users.length === 0 && <div>No users were added</div>}
        {props.users.map((el, i) => (
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
};
