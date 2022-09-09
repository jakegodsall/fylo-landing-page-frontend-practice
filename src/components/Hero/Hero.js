import React from "react";

import HeroImage from "../../assets/illustration-1.svg";
import Form from "../UI/Form/Form";

import "./Hero.css";

const Hero = () => {
    return (
        <div className='hero'>
            <img className='hero__image' src={HeroImage} alt='Hero' />
            <h1 className='hero__title'>
                All your files in one secure location, accessible anywhere.
            </h1>
            <p className='hero__text'>
                Fylo stores your most important files in one secure location.
                Access them wherever you need, share and collaborate with
                friends, and co-workers.
            </p>
            <Form
                placeholder='Enter your email.'
                buttonInnerText='Get Started'
            />
        </div>
    );
};

export default Hero;