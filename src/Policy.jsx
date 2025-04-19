import { useState } from 'react'
import './index.css'
import Header from './Header.jsx'
import Body from './Body.jsx'
import Footer from './Footer.jsx'
import Privacy from './privacy_policy.html'


function App() {
  return (
    <>
      <div className=".d-flex flex-column justify-content-center align-items-center container mt-2" >
        <Header />
        <br /><br />
        <Privacy/>
        <br /><br />
        <Footer/>

      </div>
    </>
  );
}

export default App;
