import React, { useEffect, useState } from 'react'
import './projects.css'
import { Link } from 'react-router-dom';
import './card.js'
import Kard from './card.js';

const languageColorsJSON = require('../src_assets/languageColors.json');

function daysAgo(rawDate){
    const moment = require("moment");
    const then = moment(rawDate);
    const now = moment();
    const daysAgo = now.diff(then, "days");
    return daysAgo;
}

function extractUsernameAndRepo(url) {
    const regex = /https:\/\/github\.com\/([^/]+)\/([^/]+)/;
    const matches = url.match(regex);

    if (matches && matches.length === 3) {
      const username = matches[1];
      const repoName = matches[2];
      return { username, repoName };
    } else {
      console.error("Invalid GitHub repository URL");
      return null;
    }
  }
  
function isLanguage(object){
    return (typeof(object)=="string")?object:"unknown";
}

function Projects(){
    function projButtons(url){
        const { username, repoName } = extractUsernameAndRepo(url);
        let request = `https://api.github.com/repos/${username}/${repoName}`;
        const [info, infoState] = useState(
            {   
                name:"loading",
                updated_at:"loading",
                title:"loading",
                description:"loading",
                language: "loading",
                avatar: "https://github.com/github.png?size=460",
                languageColor: "grey"
            }
        )
        useEffect(()=>{
            async function fetchdata(){
                try {
                    const response = await fetch(request);
                    let data = await response.json();
                    infoState({
                        name: data.owner.login,
                        updated_at: daysAgo(data.updated_at),
                        title: data.name,
                        description: data.description,
                        language: isLanguage(data.language),
                        avatar: data.owner.avatar_url,
                        languageColor: languageColorsJSON[data.language]
                      });
                } catch (error) {
                    console.error("Sorry, an error occurred:", error);
                }
            }
            fetchdata();

        }, []);
        return(
               <Kard kardurl={url} author={info.name} days={info.updated_at} title={info.title} description={info.description} language={info.language} avatar={info.avatar} languageColor={info.languageColor}/>
        );
       
    }
    return(
        <>

        <div className="container mt-5 mb-3">
            
            <div className='row'>
            {projButtons("https://github.com/Chillhopper/reactin_time")}
            {projButtons("https://github.com/TheAlgorithms/Java")} 
            {projButtons("https://github.com/thiruma2011/StackAnnotationMaven")} 
            {projButtons("https://github.com/Chillhopper/LIMO_GUI_Experiment")}
            {projButtons("https://github.com/Chillhopper/LIMO_NAV_Archive")}
            {projButtons("https://github.com/Chillhopper/LIMO_NAV_Archive")} 
            </div>

        </div>
        </>

    );
}


export default Projects