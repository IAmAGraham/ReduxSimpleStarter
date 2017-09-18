import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAz0JEJqpfEAgudUa8o1WtE4Mi-pz4LaxI';



// Create a new component. this component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>;
  )
}


// We have to specifically say that this component needs to be generated into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
