import React from "react";
export default function Contact(props){
    return(
        <div className="contact-card">
            {props.img && <image src={props.img} />}
            {/* This will be shown when proper rendering is done. */}
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="" alt=""/>
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="" alt="" />
                <p>{props.email}</p>
            </div>
        </div>
    )
}