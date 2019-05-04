import React from 'react';
const Hero = ({ Title }) => {
    return (
        <div className="container" id="hero">
            <h2>{Title}</h2>
            <h3>I am a subtitle</h3>
        </div>
    );
};

export default Hero;
