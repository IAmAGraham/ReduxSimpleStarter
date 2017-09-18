import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. this component should produce some HTML
const App = () => {
  return <div>Hi!</div>;
}


// We have to specifically say that this component needs to be generated into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
