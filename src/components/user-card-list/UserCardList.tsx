import React from 'react';
import { UserCard } from '../user-card/UserCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../models/root-state';

export const UserCardList = () => {
  const { users } = useSelector((state: RootState) => state.users);

  return (
    <div className="form-user-cards-wrapper">
      <h1 className="form-title">Users list</h1>
      <div className="form-user-cards" role="list">
        {users.length === 0 && <div>No users were added</div>}
        {users.map((el, i) => (
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
