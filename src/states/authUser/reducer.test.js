import { describe, expect, it } from 'vitest';
import authUserReducer from './reducer';
import { ActionType } from './action';

/*
 * 1. Test the default case of the reducer
 * 2. Test the SET_AUTH_USER case of the reducer
 * 3. Test the UNSET_AUTH_USER case of the reducer
 */

describe('authUserReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = null;
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the authUser when given by SET_AUTH_USER action', () => {
    // arrange
    const initialState = null;
    const action = {
      type: ActionType.SET_AUTH_USER,
      payload: {
        authUser: {
          id: 1,
          name: 'User 1',
          email: 'user1@mail.com',
          avatar: 'https://www.gravatar.com/avatar/1',
        },
      },
    };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.authUser);
  });

  it('should return null when given by UNSET_AUTH_USER action', () => {
    // arrange
    const initialState = {
      id: 1,
      name: 'User 1',
      email: 'user1@mail.com',
      avatar: 'https://www.gravatar.com/avatar/1',
    };
    const action = { type: ActionType.UNSET_AUTH_USER };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toEqual(null);
  });
});
