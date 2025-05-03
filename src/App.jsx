import { useState } from 'react';
import './index.css';
import Header from './Header.jsx';
import Body from './Body.jsx';
import AboutUs from './AboutUs.jsx';
import Playz from './Playz.jsx';
import Vibez from './Vibez.jsx';
import Footer from './Footer.jsx';
import Login from './Login.jsx';
import Policy from './Policy.jsx';
import TermsAndConditions from './TermsAndConditions.jsx';
import Team from './Team.jsx';
import ContactUs from './ContactUs.jsx';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderContent = () => {
    switch (activePage) {
      case 'aboutus':
        return <AboutUs />;
      case 'playz':
        return <Playz />;
      case 'vibez':
        return <Vibez />;
      case 'login':
        return <Login />;
      case 'policy':
        return <Policy />;
      case 'ourteam':
        return <Team />;
      case 'contactus':
        return <ContactUs />;
      case 'termsandconditions':
        return <TermsAndConditions />;
      case 'home':
      default:
        return <Body />;
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center container-fluid mt-3">
      <div className="flex-column justify-content-center align-items-center container-fluid mt-3">
        <Header onNavClick={setActivePage} />
        <br />
        {renderContent()}
        <br />
        <Footer onNavClick={setActivePage} />
        <br />
      </div>
    </div>
  );
}

export default App;
