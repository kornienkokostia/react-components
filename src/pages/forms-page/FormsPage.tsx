import { Form } from '../../components/form/Form';
import { UserCardList } from '../../components/user-card-list/UserCardList';
import './formsPage.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../models/root-state';

export const FormsPage = () => {
  const { showPopup } = useSelector((state: RootState) => state.users);

  return (
    <>
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
