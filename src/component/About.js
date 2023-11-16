import React, { useState } from "react";

export default function About() {
  const [style, setstyle] = useState({
    backgroundColor: "white",
    color: "black",
  });

  const [btntext, settext] = useState("Dark Mode")

  const DarkMode = () => {
    if (style.backgroundColor === "black") {
      setstyle({ backgroundColor: "white", color: "black" });
      settext("Dark Mode")
    } else {
      setstyle({ backgroundColor: "black", color: "white" });
      settext("Light Mode")
    }
  };

  return (
    <div className="container my-3" style={style}>
      <h1>About Us</h1>
      <div class="conatiner my-3">
              <span>
              <strong>TextUtility</strong> is a ReactJs website built primarily to do various operations on regular typed text. You can safely use WordPad or NotePad for text drafting, and saving, but TextUtils offers much more than simple text drafting and formatting. TextUtils can convert your text to any case in just one simple click of a button. It can extract links and numbers safely from a labyrinth of random text or sophisticated documentation. It has an improved property of base64 encoding, reversal of your inputted text.You can even remove whitespaces from your scripted documents, and wear up your earphones to listen to it, instead of straining your eyes! It does a detailed analyzing of your text, and provides an output of words, and characters, along with reading time as well. The best part of TextUtils is that it is an open source project, as a result, dozens of new features are in the upcoming, which definitely makes it a cut above the rest.
              The most eminent features of the website are as follows : 
              </span>
        </div>
      <div className="accordion my-3" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">

            <button
              className="accordion-button"
              style={style}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <b>Analyze your text</b>
            </button>
          </h2>
          <div
            id="collapseOne"
            style={style}
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <i>It is a Simple Text Analyzer , which mutilates your text, but in a tender way</i>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button  collapsed"
              style={style}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <b>Free to use</b>
            </button>
          </h2>
          <div
            id="collapseTwo"
            style={style}
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <i>It is completely free to use. No credit cards required. Use as much as you want!!</i>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={style}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <b>Browser Campatible</b>
            </button>
          </h2>
          <div
            id="collapseThree"
            style={style}
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <i>It is compatible with all of your favorite browsers.</i>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <button type="button" onClick={DarkMode} className="btn btn-primary">
          {btntext}
        </button>
      </div>
    </div>
  );
}
