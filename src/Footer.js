import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';



export default function Footer (props){
    return(
        <div className="flex flex-column justify-end footer items-center" >
            <div id="audio" className="iconType audioIcon"   onClick={props.handleFilter}/>
            <div id="regular" className="iconType regularIcon" onClick={props.handleFilter}/>
            <div id="video" className="iconType videoIcon"   onClick={props.handleFilter}/>
            <div className="ft-line-top"></div>
            <div className="iconType profileIcon" />
            <div className="ft-line-bottom"></div>
        </div>
    )
}
