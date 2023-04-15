import { Form } from '../../components/form/Form';
import { UserCardList } from '../../components/user-card-list/UserCardList';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../models/root-state';
import { Header } from '../../components/header/Header';

export const FormsPage = () => {
  const { showPopup } = useSelector((state: RootState) => state.users);

  return (
    <>
      <Header page="Forms" />
      <div className="top-white-bg"></div>
      <div className={`user-added-popup ${showPopup ? 'active' : ''}`}>
        User created successfully
      </div>
      <div className="form-wrapper">
        <Form />
        <UserCardList />
      </div>
    </>
  );
};
