import React from 'react';
import User from '../../models/user';
import './userCard.scss';

export const UserCard = (props: User) => {
  const convertDate = (str: string) => {
    const date = new Date(str);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month < 10 ? '0' : ''}${month}/${day < 10 ? '0' : ''}${day}/${date.getFullYear()}`;
  };

  return (
    <div className="form-card" role="listitem">
      <div className="form-card-header">
        {props.picFile && (
          <img
            src={URL.createObjectURL(props.picFile as File)}
            alt="profile-pic"
            className="form-card-img"
          ></img>
        )}

        <div>
          <p className="form-card-name">{`${props.firstName} ${props.lastName}`}</p>
          <p className="form-card-email">{props.email}</p>
        </div>
      </div>

      <div className="form-card-info">
        <p className="form-card-title">All info:</p>
        <p>
          <span>Phone: </span>
          {props.phoneNumber}
        </p>
        <p>
          <span>Date of the birth: </span>
          {convertDate(props.birthday)}
        </p>
        <p>
          <span>Country: </span>
          {props.country}
        </p>
        <p>{props.recieveNotif}</p>
        {props.contestToData && <p>I contest to my personal data</p>}
      </div>
    </div>
  );
};
