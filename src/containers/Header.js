import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="ui fixed menu">
            <div className="ui container center">
                <h1>Meme generator</h1>
            </div>
            <Link to={`/add`}>
                <button className="ui icon button" style={{ margin: '0.3rem' }}>
                    <i className="add icon"></i>
                </button>
            </Link>
        </div>
    );
};

export default Header;
