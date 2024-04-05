//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./component/SecondsCounter.js";


let seconds = 0;
setInterval(() => {
  ReactDOM.render(<SecondsCounter seconds={seconds} />, document.querySelector("#app"));
  seconds++;
}, 1000);

//render your react application
//let seconds = 0;
//setInterval(()=> {
    //let unidades = seconds % 10;

    //let decenas = Math.floor((seconds % 100) / 10);

    
    //let centenas = Math.floor(seconds / 100);

    //let miles = Math.floor(seconds / 1000);

    //let decenasDeMiles =  Math.floor(seconds / 10000);

    //let millon =  Math.floor(seconds / 100000);

    //console.log("Hola");
    //ReactDOM.render(<SecondsCounter millon= {millon} decenasDeMiles= {decenasDeMiles} miles= {miles}   centenas= {centenas} decenas= {decenas} unidades= {unidades} />, document.querySelector("#app"));
    //seconds++;

//},1000
//);

