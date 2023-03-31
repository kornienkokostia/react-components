import { Form } from '../../components/form/Form';
import { UserCardList } from '../../components/user-card-list/UserCardList';
import User from '../../models/user';
import './formsPage.scss';
import React, { useState } from 'react';

export const FormsPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [showPopup, setShowPopup] = useState(false);

  const addUser = (user: User) => {
    setShowPopup(true);
    setUsers([...users, user]);
    setTimeout(() => setShowPopup(false), 4000);
  };

  return (
    <>
      <div className="top-white-bg"></div>
      <div className={`user-added-popup ${showPopup ? 'active' : ''}`}>
        User created successfully
      </div>
      <div className="form-wrapper">
        <Form addUser={addUser}></Form>
        <UserCardList users={users} />
      </div>
    </>
  );
};
