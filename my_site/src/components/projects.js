import React, { useEffect, useState } from 'react'
import './projects.css'
import { Link } from 'react-router-dom';
import './card.js'
import Kard from './card.js';
import moment from "moment"

const languageColorsJSON = require('../src_assets/languageColors.json');

const KEY = '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'

async function getter(url){
    try {
        const response = await fetch(url);
        let res =  await response.json();
        console.log(res);
    } catch (error) {
        console.error("Sorry, an error occurred:", error);
    }
}

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
                avatar: "https://www.gravatar.com/avatar/?d=404&f=y",
                languageColor: "grey"
            }
        )
        useEffect(()=>{
            async function fetchdata(){
                try {
                    const response = await fetch(request);
                    let data = await response.json();
                    console.log(data.description);
                    infoState({
                        name: data.owner.login,
                        updated_at: daysAgo(data.updated_at),
                        title: data.name,
                        description: data.description,
                        language: data.language,
                        avatar: data.owner.avatar_url,
                        languageColor: languageColorsJSON[data.language]
                      });
                } catch (error) {
                    console.error("Sorry, an error occurred:", error);
                }
            }
            fetchdata();

        }, []);



        //const profile=getter(data.owner.avatar_url);

        return(
           // <Link className="link" to={url} target="_blank">
               <Kard kardurl={url} author={info.name} days={info.updated_at} title={info.title} description={info.description} language={info.language} avatar={info.avatar} languageColor={info.languageColor}/>
            //</Link>
        );
       
    }
    return(
        <>
        <h1>My Projects</h1>
        <div className="container mt-5 mb-3">

            <div className='row'>
            {projButtons("https://github.com/Chillhopper/LIMO_NAV_Archive")}
            {projButtons("https://github.com/Chillhopper/LIMO_GUI_Experiment")}
            {projButtons("https://github.com/Chillhopper/LIMO_NAV_Archive")}

            
            </div>
            <div className='row'>
            {projButtons("https://github.com/Chillhopper/LIMO_GUI_Experiment")}
            {projButtons("https://github.com/Chillhopper/LIMO_NAV_Archive")}
            {projButtons("https://github.com/Chillhopper/LIMO_NAV_Archive")}

            </div>

        </div>
        </>

    );
}


export default Projects