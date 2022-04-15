import { ActionTypes } from "../constants/action-types";

export const setMemes = (memes) => {
  return {
    type: ActionTypes.SET_MEMES,
    payload: memes,
  };
};

export const selectedMeme = (meme) => {
  return {
    type: ActionTypes.SELECTED_MEME,
    payload: meme,
  };
};
export const removeSelectedMeme = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_MEME,
  };
};
