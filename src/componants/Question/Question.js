import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className="qa-container">
            <h2>Question and Answer part</h2>
            <div className='answers'>
            <h3><span>Question :</span> How react works?</h3>
            <p>Ans : React devides the UI into multiple components, which makes the code easier to debug and each component has its own property and function. React has three building blocks.These are components,state and props.State of component is an object that holds some data.Props is short for properties,that allow us to pass arguments or data to components.It has easy creation of dynamic web aplications.It enhancements performance.React aplications are easy to  test due to a large developper community.</p>
            <h3><span>Question :</span> How useState works?</h3>
            <p>Ans :</p>
            </div>
        </div>
    );
};

export default Question;