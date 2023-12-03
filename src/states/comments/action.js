import api from '../../utils/api';

const ActionType = {
  ADD_COMMENT: 'ADD_COMMENT',
  UPVOTE_COMMENT: 'UPVOTE_COMMENT',
  NEUTRALVOTE_COMMENT: 'NEUTRALVOTE_COMMENT',
  DOWNVOTE_COMMENT: 'DOWNVOTE_COMMENT',
};

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
    },
  };
}

function upVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.UPVOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function neutralVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.NEUTRALVOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function downVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.DOWNVOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function asyncAddComment(content) {
  return async (dispatch) => {
    try {
      const comment = await api.createComment(content);
      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncUpVoteComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(upVoteCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await api.upVoteComment(commentId);
    } catch (error) {
      alert(error.message);
      dispatch(upVoteCommentActionCreator({ commentId, userId: authUser.id }));
    }
  };
}

function asyncNeutralVoteComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(
      neutralVoteCommentActionCreator({ commentId, userId: authUser.id })
    );

    try {
      await api.neutralVoteComment;
    } catch (error) {
      alert(error.message);
      dispatch(
        neutralVoteCommentActionCreator({ commentId, userId: authUser.id })
      );
    }
  };
}

function asyncDownVoteComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(downVoteCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await api.downVoteComment(commentId);
    } catch (error) {
      alert(error.message);
      dispatch(
        downVoteCommentActionCreator({ commentId, userId: authUser.id })
      );
    }
  };
}

export {
  ActionType,
  addCommentActionCreator,
  upVoteCommentActionCreator,
  neutralVoteCommentActionCreator,
  downVoteCommentActionCreator,
  asyncAddComment,
  asyncUpVoteComment,
  asyncNeutralVoteComment,
  asyncDownVoteComment,
};
