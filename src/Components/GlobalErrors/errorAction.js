import constants from "./errorConstants";

export const setError = payload => {
  return {
    payload,
    type: constants.SET,
  };
};

export const unsetError = () => {
  return {
    type: constants.UNSET,
  };
};



