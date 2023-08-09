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

function Projects(){
    function projButtons(url){
        const [info, infoState] = useState(
            {
                name:"loading",
                days:"loading",
                title:"loading",
                about:"loading"
            }
        )
        useEffect(()=>{
            async function fetchdata(){
                try {
                    const response = await fetch(url);
                    let data = await response.json();
                    //console.log(data);
                    //infoState({data.name, data.updated_at, data.title, data.about});
                    infoState({
                        name: data.name,
                        days: data.updated_at,
                        title: data.title,
                        about: data.about
                      });
                } catch (error) {
                    console.error("Sorry, an error occurred:", error);
                }
            }
            fetchdata();

        }, []);



        //const profile=getter(data.owner.avatar_url);

        return(
            <Link className="link" to={url} target="_blank">
               {/* Kard(pfp, author, days, title, about) */}
               <Kard author={info.name} days={info.updated_at} title={info.name} about={info.description} />
            </Link>
        );
       
    }
    return(
        <>
        <h1>My Projects</h1>
        <div className="projhead">
            {projButtons("https://api.github.com/repos/Chillhopper/header_project")}
            {projButtons("https://api.github.com/repos/Chillhopper/header_project")}
            {projButtons("https://api.github.com/repos/Chillhopper/header_project")}
            {projButtons("https://api.github.com/repos/Chillhopper/header_project")}
            {projButtons("https://api.github.com/repos/Chillhopper/header_project")}
            {projButtons("https://api.github.com/repos/Chillhopper/header_project")}
            {projButtons("https://api.github.com/repos/Chillhopper/header_project")}
            </div>
        </>

    );
}


export default Projects