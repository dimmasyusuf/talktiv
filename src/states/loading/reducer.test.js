/**
 * loading Reducer Testing Scenario
 *
 * - should return the initial state when given by unknown action
 * - should return the loading when given by SHOW_LOADING action
 * - should return the loading when given by HIDE_LOADING action
 */

import { describe, it, expect } from 'vitest';
import loadingReducer from './reducer';
import { ActionType } from './action';

describe('loadingReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = false;
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = loadingReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the loading when given by SHOW_LOADING action', () => {
    // arrange
    const initialState = false;
    const action = {
      type: ActionType.SHOW_LOADING,
      payload: {
        isLoading: true,
      },
    };

    // action
    const nextState = loadingReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.isLoading);
  });

  it('should return the loading when given by HIDE_LOADING action', () => {
    // arrange
    const initialState = true;
    const action = {
      type: ActionType.HIDE_LOADING,
      payload: {
        isLoading: false,
      },
    };

    // action
    const nextState = loadingReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.isLoading);
  });
});
