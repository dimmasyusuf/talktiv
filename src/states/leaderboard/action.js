import api from '../../utils/api';

const ActionType = {
  RECEIVE_LEADERBOARD: 'RECEIVE_LEADERBOARD',
};

function receiveLeaderboardActionCreator(leaderboard) {
  return {
    type: ActionType.RECEIVE_LEADERBOARD,
    payload: {
      leaderboard,
    },
  };
}

function asyncReceiveLeaderboard() {
  return async (dispatch) => {
    try {
      const leaderboard = await api.getLeaderboards();
      dispatch(receiveLeaderboardActionCreator(leaderboard));
    } catch (error) {
      alert(error.message);
    }
  };
}

export { ActionType, receiveLeaderboardActionCreator, asyncReceiveLeaderboard };
