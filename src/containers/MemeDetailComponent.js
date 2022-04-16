import React, { useEffect, dispatch } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  selectedMeme,
  removeSelectedMeme,
} from "../redux/actions/memesActions";
import { API_URL, API_MEME_URL } from "../constants";
import useFetch from "../useFetch";


const MemeDetailComponent = () => {
  const { memeId } = useParams();
  const dispatch = useDispatch();

  const { data: meme, loading, error } = useFetch(`${API_URL}/memes/${memeId}`);
  dispatch(selectedMeme(meme));
  const textUrl = (meme?.texts) ? meme.texts.join('/') : '';
  const imageUrl = `${API_MEME_URL}/${meme?.type}/${textUrl}`;

  useEffect(() => {
    return () => {
      dispatch(removeSelectedMeme());
    };
  }, [memeId]);

  if (loading) {
    return (<div>Načítání</div>);
  }

  if (error) {
    console.log(error);
  }

  return (
    <div className="ui grid container">
      <div className="ui card" style={{ width: '100%', paddingTop: '3rem' }}>
        <div className="image">
          <img src={imageUrl} alt={meme?.name}/>
        </div>
        <div className="content">
          <a className="header">{meme?.name}</a>
          <div className="meta">
            <span className="date">ID: {meme?.id}</span>
          </div>
        </div>
        <div className="extra content">
          {meme?.type}
        </div>
      </div>
    </div>
  );
};

export default MemeDetailComponent;
