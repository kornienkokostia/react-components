import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import User from '../models/user';

interface UserSlice {
  users: User[];
  showPopup: boolean;
}

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    showPopup: false,
  } as UserSlice,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
    },
    setShowPopup(state, action: PayloadAction<boolean>) {
      state.showPopup = action.payload;
    },
  },
});

export const { addUser, setShowPopup } = userSlice.actions;

export default userSlice.reducer;
