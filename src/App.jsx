import { useState } from 'react';
import './index.css';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Playz from './Playz.jsx';
import Vibez from './Vibez.jsx';
import Footer from './Footer.jsx';
import Login from './Login.jsx';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderContent = () => {
    switch (activePage) {
      case 'playz':
        return <Playz />;
      case 'vibez':
        return <Vibez />;
      case 'login':
        return <Login />;
      case 'home':
      default:
        return <Body />;
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center container-fluid mt-3">
      <div className="flex-column justify-content-center align-items-center container-fluid mt-3">
        <Header onNavClick={setActivePage} />
        <br /><br />
        {renderContent()}
        <br /><br />
        <Footer />
      </div>
    </div>
  );
}

export default App;
