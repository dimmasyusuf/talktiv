/**
 * leaderboards Action Testing Scenario
 *
 * - should dispatch receiveLeaderboardsActionCreator with leaderboards from api.getLeaderboards
 * - should dispatch receiveLeaderboardsActionCreator with empty array when api.getLeaderboards failed
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import api from '../../utils/api';
import { receiveLeaderboardsActionCreator } from './action';
import { asyncReceiveLeaderboards } from './action';

const fakeLeaderboardsResponse = [
  {
    user: {
      id: 'users-1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 10,
  },
  {
    user: {
      id: 'users-2',
      name: 'Jane Doe',
      email: 'jane@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 5,
  },
];

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncReceiveLeaderboards thunk', () => {
  beforeEach(() => {
    api._getLeaderboards = api.getLeaderboards;
  });

  afterEach(() => {
    api.getLeaderboards = api._getLeaderboards;
    delete api._getLeaderboards;
  });

  it('should dispatch receiveLeaderboardsActionCreator with leaderboards from api.getLeaderboards', async () => {
    // arrange
    // stub implementation
    api.getLeaderboards = () => Promise.resolve(fakeLeaderboardsResponse);

    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncReceiveLeaderboards()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(
      receiveLeaderboardsActionCreator(fakeLeaderboardsResponse)
    );
  });

  it('should dispatch receiveLeaderboardsActionCreator with empty array when api.getLeaderboards failed', async () => {
    // arrange
    // stub implementation
    api.getLeaderboards = () => Promise.reject(fakeErrorResponse);

    // mock dispatch
    const dispatch = vi.fn();

    // mock alert if window is defined
    if (typeof window !== 'undefined') {
      window.alert = vi.fn();
    }

    // action
    await asyncReceiveLeaderboards()(dispatch);

    // assert
    if (typeof window !== 'undefined') {
      expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    }
  });
});
