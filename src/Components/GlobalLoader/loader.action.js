import constants from "./loader.constants";

export const showLoader = () => {
  return {
    type: constants.SHOW_LOADER,
  };
};

export const hideLoader = () => {
  return {
    type: constants.HIDE_LOADER,
  };
};



