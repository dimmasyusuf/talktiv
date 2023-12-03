import { ActionType } from './action';

function commentsReducer(comments = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_COMMENTS:
      return action.payload.comments;
    case ActionType.ADD_COMMENT:
      return [action.payload.comment, ...comments];
    case ActionType.UPVOTE_COMMENT:
      return comments.map((comment) => {
        if (comment.id === action.payload.commentId) {
          return {
            ...comment,
            vote: comment.vote.include(action.payload.userId)
              ? comment.vote.filter((id) => id !== action.payload.userId)
              : comment.vote.concat([action.payload.userId]),
          };
        }

        return comment;
      });
    case ActionType.NEUTRALVOTE_COMMENT:
      return comments.map((comment) => {
        if (comment.id === action.payload.commentId) {
          return {
            ...comment,
            vote: comment.vote.include(action.payload.userId)
              ? comment.vote.filter((id) => id !== action.payload.userId)
              : comment.vote.concat([action.payload.userId]),
          };
        }

        return comment;
      });
    case ActionType.DOWNVOTE_COMMENT:
      return comments.map((comment) => {
        if (comment.id === action.payload.commentId) {
          return {
            ...comment,
            vote: comment.vote.include(action.payload.userId)
              ? comment.vote.filter((id) => id !== action.payload.userId)
              : comment.vote.concat([action.payload.userId]),
          };
        }

        return comment;
      });
    default:
      return comments;
  }
}

export default commentsReducer;
