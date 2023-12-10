/**
 * leaderboards Reducer Testing Scenario
 *
 * - should return the initial state when given by unknown action
 * - should return the leaderboards when given by RECEIVE_LEADERBOARDS action
 */

import { describe, it, expect } from 'vitest';
import leaderboardsReducer from './reducer';
import { ActionType } from './action';

describe('leaderboardsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = leaderboardsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the leaderboards when given by RECEIVE_LEADERBOARDS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_LEADERBOARDS,
      payload: {
        leaderboards: [
          {
            id: 1,
            name: 'John Doe',
            email: 'johndoe@mail.com',
            avatar:
              'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
          },
          {
            id: 2,
            name: 'Jane Doe',
            email: 'janedoe@mail.com',
            avatar:
              'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
          },
        ],
      },
    };

    // action
    const nextState = leaderboardsReducer(initialState, action);

    expect(nextState).toEqual(action.payload.leaderboards);
  });
});
