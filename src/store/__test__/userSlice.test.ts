import reducer, { addUser, setShowPopup } from '../userSlice';
import User from '../../models/user';

describe('userSlice', () => {
  it('should handle addUser', () => {
    const initialState = { users: [], showPopup: false };
    const user: User = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phoneNumber: '+1 (555) 123-4567',
      birthday: '1990-01-01',
      country: 'USA',
      picFile: 'https://example.com/profile-pic.png',
      recieveNotif: 'I want to receive notifications about new products',
      contestToData: 'I consent to my personal data',
    };
    const action = addUser(user);
    const newState = reducer(initialState, action);
    expect(newState.users).toHaveLength(1);
    expect(newState.users[0]).toEqual(user);
  });

  it('should handle setShowPopup', () => {
    const initialState = { users: [], showPopup: false };
    const action = setShowPopup(true);
    const newState = reducer(initialState, action);
    expect(newState.showPopup).toBe(true);
  });
});
