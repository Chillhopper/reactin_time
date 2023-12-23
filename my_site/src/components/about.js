import React, { useEffect, useState, useContext } from 'react';
import './about.css'
import { Link } from 'react-router-dom';
import { LGtheme } from './theme';
import axios from 'axios';

const GitHubProfileInfo = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Load GitHub username from config.json
          // const response = await fetch('./config/config.json');
          // const configData = await response.json();
  
          // Use the GitHub username from config.json
          // const githubUsername = configData.githubUsername;
  
          var githubUsername = "Chillhopper";
          console.log(`https://api.github.com/users/${githubUsername}`);
  
          // Fetch user data using the GitHub username
          const userResponse = await fetch(`https://api.github.com/users/${githubUsername}`);
  
          if (!userResponse.ok) {
            throw new Error(`GitHub API request failed with status ${userResponse.status}`);
          }
  
          const userData = await userResponse.json();
          console.log('GitHub API Response:', userData);
  
          // Update the state with the user data
          setUserData(userData);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData(); // Call the async function immediately
    }, []); // Empty dependency array means it runs once on mount
  
    return (
      <div>
        {userData && (
          <img src={userData.avatar_url} alt="GitHub Avatar" style={{ display: "inline" }} width="25%" height="25%" />
        )}
      </div>
    );
  };

function About(){ 
    const contextObj = useContext(LGtheme);
    return (
        <>

                {/* <!-- First Container --> */}

                <div className="container-fluid bg-1 text-center">
                <h3 className="margin">Who Am I?</h3>
                <GitHubProfileInfo/>
                <h3>I'm an adventurer</h3>
                </div>

                {/* <!-- Second Container --> */}

                <div className="container-fluid bg-2 text-center">
                <h3 className="margin">What Am I?</h3>
                <p> I'm a Robotics Student from Singapore! I like to indulge in all kinds of tech, both low and high level</p>
                {/* <a href="#" className="btn btn-default btn-lg">
                    <span className="glyphicon glyphicon-search"></span> Search
                </a> */}
                </div>

                {/* Third Container (Grid)  */}

                <div className={`container-fluid bg-3 text-center bg-${contextObj.theme}`}>    
                <h3 className="margin">Where To Find Me?</h3><br />
                <div className="row">
                    <div className="col-sm-4">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <img src="https://github.com/github.png?size=460" className="img-responsive margin" style={{width:"100%"}} alt="Image"></img>
                    </div>
                    <div className="col-sm-4"> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <img src="https://github.com/github.png?size=460" className="img-responsive margin" style={{width:"100%"}} alt="Image"></img>
                    </div>
                    <div className="col-sm-4"> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <img src="https://github.com/github.png?size=460" className="img-responsive margin" style={{width:"100%"}} alt="Image"></img>
                    </div>
                </div>
                </div>

                {/* <!-- Footer --> */}

                <footer className="container-fluid bg-4 text-center">
                <p>Bootstrap Theme Made By <a href="https://www.w3schools.com">www.w3schools.com</a></p> 
                </footer>





    </>
    );
}

export default About