import React, { useState } from 'react';
import { useEffect } from 'react';
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
import PaymentPage from './PaymentPage.jsx';
import { auth } from './firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user || null);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch((error) => console.error('Sign-out error:', error));
  };

  // Pass user and setActivePage to Login so it can redirect after login
  const renderContent = () => {
    switch (activePage) {
      case 'playz':
        return <Playz onNavClick={setActivePage} />;
      case 'vibez':
        return <Vibez onNavClick={setActivePage} />;
      case 'login':
        return <Login onLoginSuccess={() => setActivePage('home')} />;
      case 'policy':
        return <Policy />;
      case 'ourteam':
        return <Team />;
      case 'contactus':
        return <ContactUs />;
      case 'termsandconditions':
        return <TermsAndConditions />;
      case 'payment':
        return <PaymentPage />;
      case 'aboutus':
        return <AboutUs onNavClick={setActivePage} onBack={() => setActivePage('home')} />;
      case 'home':
      default:
        return <Body />;
    }
  };

  return (
    <>
      {/* Glowing Background Circles */}
      <div className="particle-container">
        {[...Array(200)].map((_, i) => (
          <div        
            key={i}
            className="particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${8 + Math.random() * 8}s`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>
      {/* Gradient Overlay */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
          background:
            'linear-gradient(120deg, rgba(10,23,78,0.12) 0%, rgba(0,191,255,0.10) 100%)',
        }}
      />

      {/* Main UI */}
      <div
        className="d-flex flex-column justify-content-center align-items-center container-fluid mt-3 position-relative"
        style={{ zIndex: 1, minHeight: '100vh' }}
      >
        <div
          className="flex-column justify-content-center align-items-center container-fluid mt-3 shadow-lg"
          style={{
            background: 'rgba(255,255,255,0.35)', // More transparent
            backdropFilter: 'blur(8px)',
            borderRadius: '2rem',
            padding: '1.2rem 0.5rem',
            maxWidth: '1200px',
            width: '100%',
            boxShadow: '0 8px 32px 0 rgba(31,38,135,0.10)',
          }}
        >
          <Header
            onNavClick={setActivePage}
            user={user}
            onSignOut={handleSignOut}
          />
          <div style={{ minHeight: '60vh', width: '100%' }}>
            {renderContent()}
          </div>
          <Footer onNavClick={setActivePage} />
        </div>
      </div>
    </>
  );
}

export default App;
