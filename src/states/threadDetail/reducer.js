import { ActionType } from './action';

function threadDetailReducer(threadDetail = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail;
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
    case ActionType.UPVOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        vote: threadDetail.vote.include(action.payload.userId)
          ? threadDetail.vote.filter((id) => id !== action.payload.userId)
          : threadDetail.vote.concat([action.payload.userId]),
      };
    case ActionType.NEUTRALVOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        vote: threadDetail.vote.include(action.payload.userId)
          ? threadDetail.vote.filter((id) => id !== action.payload.userId)
          : threadDetail.vote.concat([action.payload.userId]),
      };
    case ActionType.DOWNVOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        vote: threadDetail.vote.include(action.payload.userId)
          ? threadDetail.vote.filter((id) => id !== action.payload.userId)
          : threadDetail.vote.concat([action.payload.userId]),
      };
    default:
      return threadDetail;
  }
}

export default threadDetailReducer;
