import React from 'react'
import './projects.css'
import { Link } from 'react-router-dom';

let languageColors = require('../src_assets/languageColors.json');

const KEY = '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'

function Projects(){
    function projButtons(url, title){
        fetch(`https://api.github.com/repos/Chillhopper/header_project`)
        .then((response) => response.json())
        .then((data) => {
          // The data object contains information about the repository
          console.log(data);
          console.log(data.description);
          console.log(data.language);
          const color_code = languageColors[data.language];
          console.log(color_code);
        })
        .catch((error) => {
          console.error("sorry, Error:", error);
        });
        return(
            <Link style={{textDecoration: 'none'}} to={url} target="_blank">
                <div className='proj'>
                   <span class="title">{title}</span><br/>
                   <span class="aboutproj">about proj</span><br />
                   <span class="details">details: </span>
                   
                   
                </div>
            </Link>
        );
       
    }
    return(
        <>
        <h1>My Projects</h1>
        <div class="projhead">
            {projButtons("https://github.com/Chillhopper", "gitproj")}
            {projButtons("https://github.com/Chillhopper", "gitproj")}
            {projButtons("https://github.com/Chillhopper", "gitproj")}
            {projButtons("https://github.com/Chillhopper", "gitproj")}
            {projButtons("https://github.com/Chillhopper", "gitproj")}
            {projButtons("https://github.com/Chillhopper", "gitproj")}
        </div>
        </>

    );
}


export default Projects