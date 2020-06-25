import constants from './loader.constants';

const initialState = {
  showLoader: false
};

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SHOW_LOADER: 
      return {
        ...state,
        showLoader: true
      };
    case constants.HIDE_LOADER: 
    return {
        ...state,
        showLoader: false
      };
    default:
      return state;
  }
};

export default loaderReducer;