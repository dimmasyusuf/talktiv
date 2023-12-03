import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './authUser/reducer';
import threadsReducer from './threads/reducer';
import threadDetailReducer from './threadDetail/reducer';
import commentsReducer from './comments/reducer';
import usersReducer from './users/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    comments: commentsReducer,
    users: usersReducer,
  },
});

export default store;
