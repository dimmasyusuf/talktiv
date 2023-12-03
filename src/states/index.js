import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './authUser/reducer';
import threadsReducer from './threads/reducer';
import commentsReducer from './comments/reducer';
import usersReducer from './users/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    threads: threadsReducer,
    comments: commentsReducer,
    users: usersReducer,
  },
});

export default store;
