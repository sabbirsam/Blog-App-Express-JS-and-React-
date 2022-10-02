Getting Started with Create React App
npx create-react-app . OR yarn create react-app .

install all dependency:

yarn

It will install all dependency RUN:

yarn start npm run start

#Now remove extra file form src and public

App.js and index.js [rest are need to removed]

App.js code function App() { return (

Hello world!
); }
export default App;

index.js code import React from 'react'; import ReactDOM from 'react-dom/client'; import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); root.render( <React.StrictMode> </React.StrictMode> );

Public.html code

<style> * { font-family: "Open Sans", sans-serif; margin: 0; } </style> <title>React App</title> You need to enable JavaScript to run this app.
Now creating pages

under src folder create pages folder Home.jsx Login.jsx

now

rfce to import the function auto

Now use React router dom. 
