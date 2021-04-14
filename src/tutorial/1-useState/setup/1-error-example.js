import React from 'react';

const ErrorExample = () => {
  let title = 'Hello title';
  const clickHandler = () => {
    title = 'hey!'
    console.log(title)
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={clickHandler}>Click Here to Change title</button>
    </React.Fragment>
  );
};

export default ErrorExample;
