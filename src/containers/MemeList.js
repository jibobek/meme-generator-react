import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMemes } from "../redux/actions/memesActions";
import MemeComponent from "./MemeComponent";
import { API_URL } from '../constants';
import useFetch from "../useFetch";

const MemePage = () => {
  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(`${API_URL}/memes/`);
  dispatch(setMemes(data));
  const memes = useSelector((state) => state.allMemes.memes);

  useEffect(() => {
    dispatch(setMemes(memes));
  }, []);


  if (loading) {
    return (<div>Načítání</div>);
  }

  if (error) {
    console.log(error);
  }

  return (
    <div className="ui grid container" style={{ paddingTop: '4rem' }}>
      <MemeComponent />
    </div>
  );
};

export default MemePage;
