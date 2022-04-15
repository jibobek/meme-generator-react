import { combineReducers } from "redux";
import { memesReducer, selectedMemesReducer } from "./memesReducer";
const reducers = combineReducers({
  allMemes: memesReducer,
  meme: selectedMemesReducer,
});
export default reducers;
