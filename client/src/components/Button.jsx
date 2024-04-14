import React from 'react';

const Button = ({ text, bg }) => {

    return (
        <button className={`${bg ? 'hover:bg-normalBlue hover:border-normalBlue bg-darkBlue text-white' : 'hover:bg-darkBlue hover:text-white bg-transparent text-darkBlue'} text-sm px-6 py-2 border border-darkBlue rounded-md text-darkBlue`}>
            {text}
        </button>
    );
}

export default Button;