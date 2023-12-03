import api from '../../utils/api';

const ActionType = {
  ADD_THREAD: 'ADD_THREAD',
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  UPVOTE_THREAD: 'UPVOTE_THREAD',
  NEUTRALVOTE_THREAD: 'NEUTRALVOTE_THREAD',
  DOWNVOTE_THREAD: 'DOWNVOTE_THREAD',
};

function addThreadActionCreator(threads) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      threads,
    },
  };
}

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function upVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.UPVOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function neutralVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.NEUTRALVOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function downVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.DOWNVOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncAddThread({ title, body, category }) {
  return async (dispatch) => {
    try {
      const thread = await api.createThreada({ title, body, category });
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncUpVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(upVoteThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.upVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(upVoteThreadActionCreator({ threadId, userId: authUser.id }));
    }
  };
}

function asyncNeutralVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(neutralVoteThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.neutralVoteThread;
    } catch (error) {
      alert(error.message);
      dispatch(
        neutralVoteThreadActionCreator({ threadId, userId: authUser.id })
      );
    }
  };
}

function asyncDownVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(downVoteThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.downVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(downVoteThreadActionCreator({ threadId, userId: authUser.id }));
    }
  };
}

export {
  addThreadActionCreator,
  receiveThreadsActionCreator,
  upVoteThreadActionCreator,
  neutralVoteThreadActionCreator,
  downVoteThreadActionCreator,
  asyncAddThread,
  asyncUpVoteThread,
  asyncNeutralVoteThread,
  asyncDownVoteThread,
};