import React from 'react';
import ReactDOM from 'react-dom'
import Header from './compoents/Header';
import MainPage from './compoents/MainPage'
import './App.css';
// import Footer from './compoents/Footer';
import Information from './compoents/Information';
import Flights from './compoents/Flights';
function App() {
  return <>
  <header>
      Join Tripma today and save up to 20% on your fligth using code TRAVEL at checkout. Promotion valid for new users only.
      </header>
      <Header/>
      {/* <MainPage/> */}
        <Flights/>
</>

  
    //  {/* <Footer/> */}

  
}

export default App;
