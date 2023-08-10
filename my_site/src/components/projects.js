import React, { useEffect, useState } from 'react'
import './projects.css'
import { Link } from 'react-router-dom';
import './card.js'
import Kard from './card.js';


let languageColors = require('../src_assets/languageColors.json');

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
        console.log(request);
        const [info, infoState] = useState(
            {   
                name:"loading",
                days:"loading",
                title:"loading",
                about:"loading",
                language: "loading",
                avatar: "https://www.gravatar.com/avatar/?d=404&f=y"
            }
        )
        useEffect(()=>{
            async function fetchdata(){
                try {
                    const response = await fetch(request);
                    let data = await response.json();
                    console.log(data);
                    infoState({
                        name: data.owner.login,
                        days: data.updated_at,
                        title: data.name,
                        about: data.about,
                        language: data.language,
                        avatar: data.owner.avatar_url
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
               <Kard kardurl={url} author={info.name} days={info.updated_at} title={info.title} about={info.description} language={info.language} avatar={info.avatar} />
            //</Link>
        );
       
    }
    return(
        <>
        <h1>My Projects</h1>
        <div className="container mt-5 mb-3">

            <div className='row'>
            {projButtons("https://github.com/Chillhopper/LIMO_NAV_Archive")}
            {projButtons("https://github.com/Chillhopper/LIMO_NAV_Archive")}
            {projButtons("https://github.com/Chillhopper/LIMO_NAV_Archive")}
            {projButtons("https://github.com/Chillhopper/LIMO_NAV_Archive")}
            </div>
            <div className='row'>
            {projButtons("https://github.com/Chillhopper/LIMO_NAV_Archive")}
            {projButtons("https://github.com/Chillhopper/LIMO_NAV_Archive")}
            {projButtons("https://github.com/Chillhopper/LIMO_NAV_Archive")}
            </div>

        </div>
        </>

    );
}


export default Projects