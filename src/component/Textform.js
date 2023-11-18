import React ,  { useState } from "react";


export default function Textform(props) {
const [text, settext] = useState("");
const handleUpclick=()=>
{
  console.log("clicked here");
 let newtext=text.toUpperCase();
  settext(newtext);
  props.showAlert("Converted to Uppercase", "success")
  setInterval(() => {
    document.title="TextUtility";
  }, 1000);
  setInterval(() => {
    document.title="Explore More :)";
  }, 2500);

}
const handleLoclick=()=>
{
  // console.log("clicked here");
 let newtext=text.toLowerCase();
  settext(newtext);
  props.showAlert("Converted to Lowercase", "success")

}
const handlecapclick=()=>
{
  // console.log("clicked here");
  
 let newtext=text.charAt(0).toUpperCase()+text.slice(1);
  settext(newtext);
  props.showAlert("Converted to Capitalised", "success")

}
const handleclearclick=()=>
{
  // console.log("clicked here");
 let newtext='';
  settext(newtext);
  props.showAlert("Text has been Cleared", "success")

}

const handleCopy=()=>
{
    let text=document.getElementById("form");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text has been Copied", "success")
}

const handleonchange=(event)=>
{
  console.log("on change ");
  settext(event.target.value)  // you can add text with value with the help of this event.target.value
}
  return (
  <>
  <div className="container my-4">
    <div className="mb-3">
    <h1 style={{color:props.mode==='dark'?'white':'black' }}>{props.head}</h1>
  <textarea className="form-control" value={text}  onChange={handleonchange}  id="form" rows="8"></textarea>
</div>
<button disabled={text.length===0} className={`btn btn-${props.btncolor} m-1`} onClick={handleUpclick}>Convert to Uppercase</button>
<button disabled={text.length===0}  className={`btn btn-${props.btncolor} m-1`} onClick={handleLoclick}>Convert to Lowercase</button>
<button disabled={text.length===0} className={`btn btn-${props.btncolor} m-1`} onClick={handlecapclick}>Convert to Capitalised</button>
<button disabled={text.length===0} className={`btn btn-${props.btncolor} m-1`} onClick={handleclearclick}>Clear text</button>
<button disabled={text.length===0} className={`btn btn-${props.btncolor} m-1`} onClick={handleCopy}>Copy text</button>
</div>
<div className="container my-2" style={{color:props.mode==='dark'?'white':'black' }} >
  <h1>Text Details</h1>
  <p>Total words {text.split(" ").filter((element)=>{return element.length!=0}).length} and Total character {text.length}</p>
  <p>Time of Reading {text===""?0:0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length}</p>
  <h3>Preview</h3>
  <p>{text.length===0?"Enter your text & preview it.":text}</p>
</div>
</>
  );
}
