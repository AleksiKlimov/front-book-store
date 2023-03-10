import { createSlice } from '@reduxjs/toolkit';

import type { UserType } from '../../types/userType';

import userThunks from '../thunks/userThunks';

const getInitialState = () => ({
  user: null as UserType | null,
});

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: getInitialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    removeUser(state) {
      state.user = null;
    },
    setAvatar(state, action) {
      if (state.user) {
        state.user.avatar = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userThunks.getUser.fulfilled,
        (state, action) => {
          state.user = action.payload.user;
        });
  },
});

export const userSliceActions = userSlice.actions;
export default userSlice.reducer;
