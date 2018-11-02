import React from 'react';
import App from './components/app.css';

const App = () => <h1>Surreal Estate</h1>;

// The above utilises an implicit return, which is a feature of arrow-functions.
// It is the same as this:
// const App = () => {
//  return <h1>Hello World</h1>;
// }
// or this:
// function App() {
//   return <h1>Hello World</h1>;
// }

export default App;
