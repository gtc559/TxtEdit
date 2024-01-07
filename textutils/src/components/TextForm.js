import React, { useState } from "react";



export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const func = () => {
        let a = text.split().length;
        if (text === '') {
            a = 0;
            console.log(a);
        }
        else {
            console.log(a);
        }


    }


    const [text, setText] = useState("");
    return (
        <>
            <div>
                <h1>
                    {props.heading}
                </h1>
                <div className="mb-3">

                    <textarea
                        className="form-control"
                        id="myBox"
                        rows={8}
                        value={text} onChange={handleOnChange} />
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-secondary mx-5" onClick={handleDownClick}>
                    Convert to Lowercase
                </button>

            </div>
            <div className="container my-3">
                <h1>
                    Your text summary
                </h1>
                <p>
                    {func()} words,{text.length} characters
                </p>
                <p>
                    {0.008 * text.length} minutes to read
                </p>
            </div>
        </>
    )
}