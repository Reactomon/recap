import constants from "./Login.contants";

export const authenticate = () => {
  return {
    type: constants.AUTHENTICATE,
  };
};

export const unauthenticated = () => {
  return {
    type: constants.UNAUTHENTICATE,
  };
};



