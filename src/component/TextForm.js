import React, { useState } from 'react'

export default function TextForm(props) {


const handleUpClick=()=>{
  // console.log("Upper case was clicked" +text);
  let newText =text.toUpperCase();
  setText(newText);
  props.showAlert("Converted to uppercase","success");
}

const handleonChange=(event)=>{
  // console.log("On change");
  setText(event.target.value);
}
const handlLopClick=()=>{
  // console.log("Upper case was clicked" +text);
  let newText =text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to lowercase","success");
  
}

const handlecopy = () =>{
  console.log("I am copy");
  var text=document.getElementById("mybox");
  text.select();
  text.setSelectionRange(0,9999);
  navigator.clipboard.writeText(text.value);
 props.showAlert("Copyed to clickbord ", "success"); 
}
const handletitle=()=>{
  // console.log("Upper case was clicked" +text);
  let newText =text.replace(/\w\S*/g,(w)=>(w.replace(/^\w/,c=>c.toUpperCase())));
  setText(newText);
  props.showAlert("Remove extra space ", "success"); 
}

const handleclear=()=>{
  // console.log("Upper case was clicked" +text);
  let newText ='';
  setText(newText);
  props.showAlert("Total text is clear", "success"); 
}



const [text, setText] = useState("Enter text here");

  // setText("samarmahato");
  // text="newtext";//wrong way to chnage the staes
 //setText("newtext");//Crroct  way to chnage the staes
  return (
    <>
    <div className="container"   style={{color: props.mode==='dark'?'white':'#0a3576'}}>
      <h1>
        {props.heading}
      </h1>
      <div className="mb-3">
      
        <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#0a3576'}} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2 "onClick={handleUpClick}     >Convert to uppercase</button>

      <button className="btn btn-primary mx-2 "onClick={handlLopClick}     >Convert to lowercase</button>
      <button className="btn btn-primary mx-2 "onClick={handletitle}     >Convert to Titlecase</button>
      <button className="btn btn-primary mx-2 "onClick={handlecopy} >Copy</button>

      <button className="btn btn-danger mx-2 "onClick={handleclear}     >Clear</button>

    </div>

    <div className="container my-3"  style={{color: props.mode==='dark'?'white':'#0a3576'}} >
      <h2>Your text summary </h2>
      <p>{text.split(" ").length}  words and {text.length}  charters</p>
      <p>Minitues to read={0.008 * text.split(" ").length} sec </p>
      <h2>preview</h2>
      <p>{text.length>0?text:"Enter to something in the text above to previe it here"}</p>
      

    </div>


    </>
  )
}
