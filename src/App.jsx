import { useState } from 'react'
import './index.css'
import Header from './Header.jsx'
import Body from './Body.jsx'
import Footer from './Footer.jsx'

function App() {
  return (
    <>
      <div className=".d-flex flex-column justify-content-center align-items-center container mt-2" >
        <Header />
        <br /><br />
        <Body/>
        <br /><br />
        <Footer/>

      </div>
    </>
  );
}

export default App;
