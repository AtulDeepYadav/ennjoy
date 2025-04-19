import { useState } from 'react';
import './index.css';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Playz from './Playz.jsx';
import Vibez from './Vibez.jsx';
import Footer from './Footer.jsx';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderContent = () => {
    switch (activePage) {
      case 'playz':
        return <Playz />;
      case 'vibez':
        return <Vibez />;
        case 'login':
          return <login />;
      case 'home':
      default:
        return <Body />;
    }
  };

  return (
    <div className=".d-flex flex-column justify-content-center align-items-center container mt-2">
      <Header onNavClick={setActivePage} />
      <br /><br />
      {renderContent()}
      <br /><br />
      <Footer />
    </div>
  );
}

export default App;
