import { ActionTypes } from "../constants/action-types";
const intialState = {
  memes: [],
};

export const memesReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_MEMES:
      return { ...state, memes: payload };
    default:
      return state;
  }
};

export const selectedMemesReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_MEME:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_MEME:
      return {};
    default:
      return state;
  }
};
