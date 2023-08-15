import React, { useContext } from 'react'
import './about.css'
import { Link } from 'react-router-dom';
import { LGtheme } from './theme';

function About(){ 
    const contextObj = useContext(LGtheme);
    return (
        <>

                {/* <!-- First Container --> */}

                <div className="container-fluid bg-1 text-center">
                <h3 className="margin">Who Am I?</h3>
                <img src="https://github.com/github.png?size=460" className="img-responsive img-circle margin" style={{display:"inline"}} alt="Bird" width="350" height="350"></img>
                <h3>I'm an adventurer</h3>
                </div>

                {/* <!-- Second Container --> */}

                <div className="container-fluid bg-2 text-center">
                <h3 className="margin">What Am I?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <a href="#" className="btn btn-default btn-lg">
                    <span className="glyphicon glyphicon-search"></span> Search
                </a>
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