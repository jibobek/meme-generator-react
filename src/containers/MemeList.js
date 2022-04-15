import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMemes } from "../redux/actions/memesActions";
import MemeComponent from "./MemeComponent";
import { API_URL } from '../constants';

const MemePage = () => {
  const memes = useSelector((state) => state.allMemes.memes);
  const dispatch = useDispatch();
  const fetchMemes = async () => {
    const response = await axios
      .get(`${API_URL}/memes`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(setMemes(response.data));
  };

  useEffect(() => {
    fetchMemes();
  }, []);

  return (
    <div className="ui grid container" style={{ paddingTop: '4rem' }}>
      <MemeComponent />
    </div>
  );
};

export default MemePage;
