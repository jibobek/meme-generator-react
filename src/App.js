import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MemeList from "./containers/MemeList";
import Header from "./containers/Header";
import "./App.css";
import MemeDetailComponent from "./containers/MemeDetailComponent";
import MemeAddComponent from "./containers/MemeAddComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes >
          <Route path="/" element={<MemeList/>} exact />
          <Route path="/meme/:memeId" element={<MemeDetailComponent/>} />
          <Route path="/add" element={<MemeAddComponent/>} />
          <Route>404</Route>
        </Routes >
      </Router>
    </div>
  );
}

export default App;
