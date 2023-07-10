import React, { useState } from 'react';

const Content = () => {
  const [text, setText] = useState('');
  const [displayedText, setDisplayedText] = useState('');

  const handleButtonClick = () => {
    setDisplayedText(text);
  };

  const handleTextAreaChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className='container pa-y4'>
      <textarea placeholder='Write here' onChange={handleTextAreaChange} />
      <button onClick={handleButtonClick}>Display Text</button>
      <h6>Output:</h6>
      {displayedText && <p>{displayedText}</p>}
    </div>
  );
}

export default Content;