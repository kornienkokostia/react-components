import Form from '../../components/form/Form';
import UserCardList from '../../components/user-card-list/UserCardList';
import User from '../../models/user';
import './formsPage.scss';
import React, { Component } from 'react';

interface StateProps {
  users: User[];
  popupVisible: boolean;
}

export default class FormsPage extends Component<object, StateProps> {
  constructor(props: object) {
    super(props);
    this.state = {
      users: [],
      popupVisible: false,
    };
  }

  addUser = (user: User) => {
    this.setState({ popupVisible: true });
    this.setState({ users: [...this.state.users, user] });
    setTimeout(() => this.setState({ popupVisible: false }), 4000);
  };

  render() {
    return (
      <>
        <div className="top-white-bg"></div>
        <div className={`user-added-popup ${this.state.popupVisible ? 'active' : ''}`}>
          User created successfully
        </div>
        <div className="form-wrapper">
          <Form addUser={this.addUser}></Form>
          <UserCardList users={this.state.users} />
        </div>
      </>
    );
  }
}
