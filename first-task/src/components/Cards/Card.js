import React from 'react';
import { render } from 'react-dom';
import './Card.css';
import img from './placeholder-image.png';

const Card=(props)=>{
    const {version, date, button, image, name, description}=props;

    if(button==="New"){

        return (
            <div className="cards-container">
                <div className="card">
                    <div className="head">
                         <h3 className="version">{version}</h3>
                         <h3 className="date">{date}</h3>
                    </div>
                    <div className="main">
                        <button className="button-1">{button}</button>
                        <img className="img" src={img} alt="image"></img>
                        <h4 className="name">{name}</h4>
                    </div>
                    <div>
                        <p class="text">{description}</p>
                    </div>
                    <div>
                        <button className="download-button">Download</button>
                    </div>
                </div>
    
            </div>
    
        ); 

    }
    else if(button==="Fix"){
        return (
            <div className="cards-container">
                <div className="card">
                    <div className="head">
                         <h3 className="version">{version}</h3>
                         <h3 className="date">{date}</h3>
                    </div>
                    <div className="main">
                        <button className="button-2">{button}</button>
                        <img className="img" src={img} alt="image"></img>
                        <h4 className="name">{name}</h4>
                    </div>
                    <div>
                        <p class="text">{description}</p>
                    </div>
                    <div>
                        <button className="download-button">Download</button>
                    </div>
                </div>
    
            </div>
    
        ); 

    }


    else if(button=="Improvement"){
        return (
            <div className="cards-container">
                <div className="card">
                    <div className="head">
                         <h3 className="version">{version}</h3>
                         <h3 className="date">{date}</h3>
                    </div>
                    <div className="main">
                        <button className="button-3">{button}</button>
                        <img className="img" src={img} alt="image"></img>
                        <h4 className="name">{name}</h4>
                    </div>
                    <div>
                        <p class="text">{description}</p>
                    </div>
                    <div>
                        <button className="download-button">Download</button>
                    </div>
                </div>
    
            </div>
    
        ); 

    }   
    }  

export default Card;