import React from 'react'


const Image = ({src, alt, className}) => (
    <img className={className} src={src} alt={alt}/>
);

Image.propTypes = {
    src: React.PropTypes.string.isRequired,
    alt: React.PropTypes.string,
};

export default Image;
