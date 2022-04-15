import React from "react";
import axios from "axios";
import { API_URL } from "../constants";
import { useState } from "react";



const MemeAddComponent = () => {
    const [name, setName] = useState("");
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [type, setType] = useState("buzz");

    const onButtonClick = () => {
        const item = {
            name: name,
            texts: [text1, text2],
            type: type
        };
        addItem(item);
    };


    const addItem = async (value) => {
        axios.post(`${API_URL}/memes`, value)
            .then((response) => {
                goHome();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const goHome = () => {
        window.location.replace('/');
    };



    return (
        <div className="ui grid container" style={{ paddingTop: '5rem' }}>
            <div className="ui form" style={{ width: '100%' }} >
                <div className="field">
                    <label>Název</label>
                    <div className="wide field">
                        <input type="text" name="name" placeholder="Název meme" onChange={(event) => setName(event.target.value)} />
                    </div>
                </div>
                <div className="field">
                    <label>Texty</label>
                    <div className="two fields">
                        <div className="field">
                            <input type="text" name="text1" placeholder="První text" onChange={(event) => setText1(event.target.value)} />
                        </div>
                        <div className="field">
                            <input type="text" name="text2" placeholder="Druhý text" onChange={(event) => setText2(event.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label>Typ</label>
                    <div className="four wide column">
                        <div className="ui radio checkbox">
                            <input type="radio" name="memeType" value="buzz" onChange={(event) => setType(event.target.value)} checked={true} />
                            <label>Buzz</label>
                        </div>
                    </div>
                    <div className="four wide column">
                        <div className="ui radio checkbox">
                            <input type="radio" name="memeType" value="both" onChange={(event) => setType(event.target.value)} />
                            <label>Both</label>
                        </div>
                    </div>
                    <div className="four wide column">
                        <div className="ui radio checkbox">
                            <input type="radio" name="memeType" value="ugandanknuck" onChange={(event) => setType(event.target.value)} />
                            <label>Ugandanknuck</label>
                        </div>
                    </div>
                    <div className="four wide column">
                        <div className="ui radio checkbox">
                            <input type="radio" name="memeType" value="ds" onChange={(event) => setType(event.target.value)} />
                            <label>DS</label>
                        </div>
                    </div>
                </div>
                <button className="ui button" onClick={(event) => onButtonClick(event)}>Vytvořit</button>
            </div>
        </div>
    );
};

export default MemeAddComponent;
