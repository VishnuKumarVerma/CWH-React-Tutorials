import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let upperText = text.toUpperCase();
    setText(upperText);
  };

  const handleLowClick = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
  };

  const handleClear = () => {
    
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <div style={{color: props.mode==='light' ? 'black' : 'white'}}>
      <div className="mb-3 container">
        <h1 className="my-3">{props.heading}</h1>
        Enter your text below
        <textarea style={{backgroundColor: props.mode==='light' ? 'white' : 'grey', color: props.mode==='light' ? 'black' : 'white' }}
          onChange={handleOnChange}
          value={text}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        <button
          onClick={handleUpClick}
          type="button"
          className="btn btn-primary my-3"
        >
          Convert to Uppercase
        </button>
        <button
          onClick={handleLowClick}
          type="button"
          className="btn btn-primary my-3 mx-3"
        >
          Convert to Lowercase
        </button>
        <button
          onClick={handleClear}
          type="button"
          className="btn btn-primary my-3 mx-3"
        >
          Clear Textbox
        </button>
      </div>

      <div className="container">
        <h3>Your text summary</h3>
        {text.length == 0 ? (
          <p>0 words and 0 characters</p>
        ) : (
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
        )}
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
