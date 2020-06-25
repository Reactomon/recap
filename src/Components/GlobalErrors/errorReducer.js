import constants from './loader.constants';

const initialState = {
  message: false
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET: 
      return {
        ...state,
        message: action.payload,
      };
    case constants.UNSET: 
    return {
        ...state,
        message: ''
      };
    default:
      return state;
  }
};

export default errorReducer;