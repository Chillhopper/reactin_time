import React from 'react'
import './card.css'

function Kard(props){
    // const props={
    //     author: " Chillhopper",
    //     days:" 2 days ago",
    //     title:"TITLE",
    //     about:"About Project"
    // }

    return(
        <>
        <div className="row">
            <div className="col-md-4">
                <div className="card p-3 mb-2">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                            <div className="icon"> <i className="bx bxl-mailchimp"></i> </div>
                            <div className="ms-2 c-details">
                                <h6 className="mb-0">{props.author}</h6> <span>{props.days}</span>
                            </div>
                        </div>
                        <div className="badge"> <span>Design</span> </div>
                    </div>
                    <div className="mt-5">
                        <h3 className="heading">{props.title}<br />{props.about}</h3>
                        <div className="mt-5">
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="mt-3"> <span className="text1">32 Applied <span className="text2">of 50 capacity</span></span> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Kard;