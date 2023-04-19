import React from 'react';
import './errorPage.scss';
import { Header } from '../../components/header/Header';

export const ErrorPage = () => {
  return (
    <>
      <Header page="Error" />
      <div className="error-page">Not Found</div>;
    </>
  );
};
