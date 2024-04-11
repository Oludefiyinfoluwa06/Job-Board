import React from 'react';

const Button = ({ text, bg }) => {

    return (
        <button id='btn' className={`${bg ? 'hover:bg-normalBlue hover:border-normalBlue bg-darkBlue text-white' : 'hover:bg-darkBlue hover:text-white bg-transparent text-darkBlue'} px-6 py-2 border border-darkBlue rounded-[50px] text-darkBlue`}>
            {text}
        </button>
    );
}

export default Button;