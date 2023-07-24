import React, {useState} from 'react'



export default function TextForm(props) {
    const [text, setText] = useState('');
    // text = "New Text" Wrong way to change the text
    // setText("New Text") //Correct way to change the text

    //Change the text to Upper Case
    const handleUpClick = ()=>{
        // console.log("Upper Case button is clicked!")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase! " , "succes");
    }
    
    //Change the code to Lower Case
    const handleLoClick = ()=>{
        let lowerText = text.toLowerCase();
        setText(lowerText);
        props.showAlert("Converted to LowerCase! " , "succes");
    }

    // To copy the text
    const handleCopy = () =>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied! " , "succes");
    } 

    //To remove Extra Spaces & convert to them in single space
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed! " , "succes");

    }

    //To Clear all the existing text
    const handleClearClick = ()=>{
        let clearText = '';
        setText(clearText);
        props.showAlert("Text Cleared! " , "succes");
    }

    //Handle Event
    const handleOnChange = (event)=>{
        // console.log("OnChange button is clicked!")
        setText(event.target.value);
    }
    return (
        <>
        <div className='container' style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control"  value = {text} onChange = {handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Covert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-2" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview: </h2>
            <p>{text.length>0?text:"Enter something in the textabove above to preview it here"}</p>
        </div>
        </>
    );
}
