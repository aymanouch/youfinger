import React from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './HeroSection.css';
function HeroSection(props) {
    return (
        <>
            <div className={props.info.lightBg ? 'home__hero-section': 'home__hero-section darkBg'}>
                <div className="container">
                    <div className="row home__hero-row" style={{display: "flex", flexDirection: props.info.imgStart==="start" ? "row-reverse" : "row" }}>
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                <div className="top-line">{props.info.topLine}</div>
                                <h1 className={props.info.lightText ? 'heading' : 'heading dark'}>{props.info.headLine}</h1>
                                <p className={props.info.lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{props.info.description}</p>
                                 <ButtonTest info={{...props.info}} handleClick={props.handleClick} argu={props.callButton} lien="ffff"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="home__hero-img-wrapper">
                                <img src={props.info.img} alt={props.info.alt} className="home__hero-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function ButtonTest (props) {
     if(props.argu) {
         return <a href={props.info.link}><Button buttonSize='btn--wide' buttonColor='blue' >{props.info.buttonLabel}</Button></a>
     }
     return (<Link to={props.info.link} onClick={props.handleClick} style={{display: props.info.buttonLabel.length ===0 ? 'none' : 'block'}}><Button buttonSize='btn--wide' buttonColor='blue' >{props.info.buttonLabel}</Button></Link>);
}

export default HeroSection
