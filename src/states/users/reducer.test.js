import { describe, expect, it } from 'vitest';
import usersReducer from './reducer';

describe('usersReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = usersReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the users when given by RECEIVE_USERS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_USERS',
      payload: {
        users: [
          {
            id: 1,
            name: 'User 1',
            email: 'user1@mail.com',
            avatar: 'http://example.com/avatar1.png',
          },
          {
            id: 2,
            name: 'User 2',
            email: 'user2@mail.com',
            avatar: 'http://example.com/avatar2.png',
          },
        ],
      },
    };

    // action
    const nextState = usersReducer(initialState, action);

    expect(nextState).toEqual(action.payload.users);
  });
});
