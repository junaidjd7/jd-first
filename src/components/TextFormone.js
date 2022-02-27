import React, { useState } from 'react'

export default function TextFormone(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = () => {
        // console.log("Uppercase was clicked");
        let newText = '';
        setText(newText)
    }

    const handleOnChange = (event) => {
        // console.log("on Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here2');
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>

                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert to lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>clear text</button>


            </div>

            <div className="container">
                <h1>your text summary</h1>
                <p> {text.split(" ").length}words and {text.length} characters</p>
                <p> {0.008 * text.split(" ").length} mintues read</p>
                <h1>preview</h1>
                <p>{text}</p>



            </div>
        </>
    )
}
