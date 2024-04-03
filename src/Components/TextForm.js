import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLoClick = ()=>{
        // console.log("LowerCase was clicked" + text);
        let newText = text.toLocaleLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleClearClick = ()=>{
        // console.log("Remove was clicked" + text);
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnchange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const handleCopy = ()=>{
        // console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Remove!", "success");
    }

    // const [text, setText] = useState('Enter text here');
        const [text, setText] = useState('');
    // text = "new text";//wrong way to change the state
    // setText("new text");//correct way to change the state

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1 className='mb-4' style={{color: props.mode==='dark'?'white':'#042743'}}>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
           <h2>Your text summary</h2>
           <p style={{color: props.mode==='dark'?'white':'#042743'}}>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
           <p style={{color: props.mode==='dark'?'white':'#042743'}}>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
           <h2>Preview</h2>
           <p style={{color: props.mode==='dark'?'white':'#042743'}}>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
  )
}
