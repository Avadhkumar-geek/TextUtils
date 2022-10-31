import * as React from 'react';
import { useState } from "react";
import { Outlet } from 'react-router-dom';

export const TextUtils = (props) => {
    let [text, setText] = useState('');

    const handleOnClick = () => {
        let newTxt = text.toUpperCase();
        setText(newTxt);
        props.showAlert('Text is convered to UPPERCASE');
        props.timeOut();
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const firstCharUpper = () => {
        let finalTxt = "";
        text = text.trim();
        let newTxt = text.split(" ");
        for (let i = 0; i < newTxt.length; i++) {
            let n = newTxt[i].trim().charAt(0).toUpperCase() + newTxt[i].slice(1);
            finalTxt += n.concat(" ");
        }
        setText(finalTxt.trim());
        props.showAlert('Text is capitalized');
        props.timeOut();
    }

    const handleOnClear = () => {
        setText("");
        props.showAlert('Text cleared');
        props.timeOut();
    }

    const handleCopy = () => {
        let txts = document.getElementById('myText');
        txts.select();
        navigator.clipboard.writeText(txts.value);
        props.showAlert('Text copied!!');
        props.timeOut();
    }

    const handleXtraSpace = () => {
        let newTexts = text.split(/[ ]+/);
        setText(newTexts.join(' '));
        props.showAlert('Extra space is removed');
        props.timeOut();
    }

    return (
        <>
            <div className={'container'} style={props.mode}>
                <div className={'form'}>
                    <div>
                        <h1> Load your Text here to analyze it</h1>
                        <textarea className={'container'} value={text} id={'myText'} onChange={handleOnChange} rows={12}
                            placeholder={"Enter your text here"}></textarea>
                    </div>

                    <button type="button" className="btn btn-primary my-2 mx-3" onClick={handleOnClick}>UPPERCASE
                    </button>
                    <button type="button" className="btn btn-primary my-2 " onClick={firstCharUpper}> Capitalization
                    </button>
                    <button type="button" className="btn btn-primary my-2 mx-3" onClick={handleOnClear}> Clear</button>
                    <button type="button" className="btn btn-primary my-2 " onClick={handleCopy}> Copy</button>
                    <button type="button" className="btn btn-primary my-2 mx-3" onClick={handleXtraSpace}> Remove Spaces
                    </button>

                </div>
                <div className={'analyzer'} style={props.mode}>
                    <h2>Your Text Summary</h2>
                    <p> Word Count: {(text === "") ? 0 : text.trim().split(" ").length} words</p>
                    <p> Characters: {text.length} characters</p>
                    <h3>Preview</h3>
                    <p>{text}</p>
                </div>
            </div>
            <Outlet />
        </>
    );
};