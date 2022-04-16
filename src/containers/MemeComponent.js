import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { API_MEME_URL } from "../constants";

const MemeComponent = () => {
  const memes = useSelector((state) => state.allMemes.memes);
  if(!memes){
    return;
  }
  const renderList = memes.map((meme) => {
    const { id, name, texts, type } = meme;
    const textUrl = texts.join('/');
    const imageUrl = `${API_MEME_URL}/${type}/${textUrl}?width=100`;
    return (
      <div className="eight wide column" key={id}>
        <Link to={`/meme/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={imageUrl} alt={name} />
              </div>
              <div className="content">
                <div className="header">{name}</div>
                <div className="meta">{type}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default MemeComponent;
