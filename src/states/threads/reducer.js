import { ActionType } from './action';

function threadsReducer(threads = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads;
    case ActionType.ADD_THREAD:
      return [action.payload.thread, ...threads];
    case ActionType.UPVOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            vote: thread.vote.include(action.payload.userId)
              ? thread.vote.filter((id) => id !== action.payload.userId)
              : thread.vote.concat([action.payload.userId]),
          };
        }

        return thread;
      });
    case ActionType.NEUTRALVOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            vote: thread.vote.include(action.payload.userId)
              ? thread.vote.filter((id) => id !== action.payload.userId)
              : thread.vote.concat([action.payload.userId]),
          };
        }

        return thread;
      });
    case ActionType.DOWNVOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            vote: thread.vote.include(action.payload.userId)
              ? thread.vote.filter((id) => id !== action.payload.userId)
              : thread.vote.concat([action.payload.userId]),
          };
        }

        return thread;
      });
    default:
      return threads;
  }
}

export default threadsReducer;
