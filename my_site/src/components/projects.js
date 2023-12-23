import React, { useContext, useEffect, useState } from 'react'
import './projects.css'
import { Link } from 'react-router-dom';
import './card.js'
import Kard from './card.js';
import { LGtheme } from './theme';


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

//Projects is like the main of this file
function Projects() {
    const contextObj = useContext(LGtheme);
  
    const [projects, setProjects] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const urlResponse = await fetch('https://api.github.com/users/Chillhopper/repos');
  
          if (!urlResponse.ok) {
            throw new Error(`GitHub API request failed with status ${urlResponse.status}`);
          }
  
          const repoData = await urlResponse.json();
          const urls = repoData.map((repo) => repo.html_url);
  
          // Fetch details for each project asynchronously
          const projectDetails = await Promise.all(
            urls.map(async (url) => {
              const { username, repoName } = extractUsernameAndRepo(url);
              const request = `https://api.github.com/repos/${username}/${repoName}`;
              const response = await fetch(request);
              const data = await response.json();
  
              return {
                name: data.owner.login,
                updated_at: daysAgo(data.updated_at),
                title: data.name,
                description: data.description,
                language: isLanguage(data.language),
                avatar: data.owner.avatar_url,
                languageColor: languageColorsJSON[data.language],
              };
            })
          );
  
          setProjects(projectDetails);
        } catch (error) {
          console.error("Sorry, an error occurred:", error);
        }
      }
  
      fetchData();
    }, []);
  
    return (
      <>
        <div className={`bg-${contextObj.theme}`} style={{ minHeight: '100vh' }}>
          <div className="container pt-5 pb-3">
            <div className='row'>
              {projects.map((project, index) => (
                <Kard
                  key={index}
                  kardurl={`https://github.com/${project.name}/${project.title}`}
                  author={project.name}
                  days={project.updated_at}
                  title={project.title}
                  description={project.description}
                  language={project.language}
                  avatar={project.avatar}
                  languageColor={project.languageColor}
                />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
  

export default Projects