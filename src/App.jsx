import { useState, useEffect } from 'react';
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
import PaymentPage from './PaymentPage.jsx'; // Import the new PaymentPage component
import { auth } from './firebaseConfig'; // Import your Firebase configuration
import { onAuthStateChanged, signOut } from 'firebase/auth';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [user, setUser] = useState(null); // Track user authentication state

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Set user when logged in
      } else {
        setUser(null); // No user logged in
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  // Handle user sign-out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null); // Reset user state on sign out
      })
      .catch((error) => {
        console.error('Sign-out error:', error);
      });
  };

  // Render the correct content based on the active page
  const renderContent = () => {
    switch (activePage) {
      case 'aboutus':
        return <AboutUs />;
      case 'playz':
        return <Playz />;
      case 'vibez':
        return <Vibez onNavClick={setActivePage} />;
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
      case 'payment': // Add the case for payment page
        return <PaymentPage />; // Render the PaymentPage component
      case 'home':
      default:
        return <Body />;
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center container-fluid mt-3">
      <div className="flex-column justify-content-center align-items-center container-fluid mt-3">
        <Header
          onNavClick={setActivePage}
          user={user} // Pass user data to Header
          onSignOut={handleSignOut} // Pass sign-out handler to Header
        />
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
