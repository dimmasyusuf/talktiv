import api from '../../utils/api';
import { setAuthUserActionCreator } from '../authUser/action';
import {
  showLoadingActionCreator,
  hideLoadingActionCreator,
} from '../loading/action';

const ActionType = {
  SET_IS_PRELOAD: 'SET_IS_PRELOAD',
};

function setIsPreloadActionCreator(isPreLoad) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreLoad,
    },
  };
}

function asyncPreloadProcess() {
  return async (dispatch) => {
    try {
      dispatch(showLoadingActionCreator());
      // preload process
      const authUser = await api.getOwnProfile();
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      // fallback process
      dispatch(setAuthUserActionCreator(null));
    } finally {
      // end preload process
      dispatch(setIsPreloadActionCreator(false));
    }

    setTimeout(() => {
      dispatch(hideLoadingActionCreator());
    }, 3000);
  };
}

export { ActionType, setIsPreloadActionCreator, asyncPreloadProcess };
