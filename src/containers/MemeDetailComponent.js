import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedMeme,
  removeSelectedMeme,
} from "../redux/actions/memesActions";
import { API_URL, API_MEME_URL } from "../constants";


const MemeDetailComponent = () => {
  const { memeId } = useParams();
  let meme = useSelector((state) => state.meme);
  const { id, name, texts, type } = meme;
  const textUrl = (texts) ? texts.join('/') : '';
  const imageUrl = `${API_MEME_URL}/${type}/${textUrl}`;
  const dispatch = useDispatch();
  const fetchMemeDetail = async (id) => {
    const response = await axios
      .get(`${API_URL}/memes/${id}`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(selectedMeme(response.data));
  };

  useEffect(() => {
    if (memeId && memeId !== "") fetchMemeDetail(memeId);
    return () => {
      dispatch(removeSelectedMeme());
    };
  }, [memeId]);
  return (
    <div className="ui grid container">
      {Object.keys(meme).length === 0 ? (
        <div>Načítání</div>
      ) : (
        <div className="ui card" style={{ width: '100%', paddingTop: '3rem' }}>
          <div className="image">
            <img src={imageUrl} />
          </div>
          <div className="content">
            <a className="header">{name}</a>
            <div className="meta">
              <span className="date">ID: {id}</span>
            </div>
          </div>
          <div className="extra content">
            {type}
          </div>
        </div>
      )}
    </div>
  );
};

export default MemeDetailComponent;
