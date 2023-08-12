import React from 'react'
import './card.css'
import { Link } from 'react-router-dom';

function Kard(props){
    // const props={
    //     author: " Chillhopper",
    //     days:" 2 days ago",
    //     title:"TITLE",
    //     about:"About Project"
    // }
    //console.log(props);

    return(
        <>  
                <div className="col-lg-4">
                    <div className="card p-3 mb-2">
                        <Link className="link" to={props.kardurl} target="_blank">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div className="icon"> 
                                        <img src={props.avatar} alt="pfp" className='pfp' />
                                    </div>
                                    <div className="ms-2 c-details">
                                        <h6 className="mb-0 text-theme">{props.author}</h6> 
                                        <span className='text-theme'>updated: {props.days} day ago</span>
                                    </div>
                                </div>
                                <div className="badge"> <span>Design</span> </div>
                            </div>
                            <div className="mt-3">
                                <div style={{height:"140px"}}> 
                                    <h4 className="heading text-theme">{props.title}</h4>
                                    <h6 className='mt-4 text-theme'>{props.description}</h6>
                                </div>
                                <div className="mt-2">
                                    <div className='d-flex align-items-center'>
                                        <div className="circle" style={{backgroundColor: props.languageColor}}></div>
                                        <div className='text-theme' style={{marginLeft: '10px'}}>{props.language}</div>
                                    </div>
                                    {/* <div className="mt-3"> <span className="text1">32 Applied <span className="text2">of 50 capacity</span></span> </div> */}
                                </div>
                            </div>
                        </Link> 
                    </div>
                </div> 
        </>
    );
}

export default Kard;