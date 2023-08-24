import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import FlipSection from "./FlipSection"
import {hex , colors } from "./data.js"

function App() {
  const [Color, setColor] = useState("");
  const [switchColor, setswitchColor] = useState(true);
  const [colorCode, setcolorCode] = useState("");

  function ChangeColor() {
   let SelectedColor = Math.floor(Math.random() * colors.length);
   SelectedColor%2 == 1 ? document.body.style.color = "white": document.body.style.color = "black";
     setColor(colors[SelectedColor]) 
     console.log(colors[SelectedColor])
    document.body.style.backgroundColor = colors[SelectedColor];
  }

  function ChangeColorCode(){
    let SelectedColorCode = "#";
    for(let i= 0; i < 6; i++) {
      let randomNumber = Math.floor(Math.random() * hex.length)
      SelectedColorCode += hex[randomNumber]
  }
  setcolorCode(SelectedColorCode)
  document.body.style.backgroundColor = SelectedColorCode;
  }

  function switchtoColor(){
    console.log(colors[6])
    console.log(Color)
    setColor(colors[6])
    setswitchColor(true)
    document.body.style.color = "black"
    document.body.style.backgroundColor = "white";
  }

  function switchtoColorCode(){   
    document.body.style.color = "black"
    document.body.style.backgroundColor = "white";
    setswitchColor(false)
    setcolorCode("#FFFFFF")
  }

  return (
    <>
      <Navbar switchtoColor={switchtoColor} switchtoColorCode={switchtoColorCode} />
      <FlipSection Color={switchColor == true ? Color : colorCode} ChangeColor = {switchColor == true ? ChangeColor :  ChangeColorCode} />
        </>
  );
}

export default App;
