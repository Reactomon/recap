import constants from './Login.contants';

const initialState = {
  isAuthenticated: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.AUTHENTICATE: 
      return {
        ...state,
        isAuthenticated: true
      };
    case constants.UNAUTHENTICATE: 
    return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
};

export default userReducer;