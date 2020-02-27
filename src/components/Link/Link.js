import React from 'react'

const Link = ({ Image, name, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <Image />
            {name}
        </a>
    );
}

export default Link;