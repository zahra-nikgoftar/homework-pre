import React from "react";
import { useState } from "react";
import app from "../../2-toggle-theme/app.css";

function ToggleTheme (){
const [isDarkTheme,setDarkTheme] =useState(false);
    const handleBackgroundColor =()=>{

     setDarkTheme(!isDarkTheme);
     };
      
     return (
       <div className={`${app} ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
         <button onClick={handleBackgroundColor}>Toggle Theme</button>
         <p>The current theme is: {isDarkTheme ? "Dark" : "Light"}</p>
       </div>
     );


    };

    export default ToggleTheme;




  