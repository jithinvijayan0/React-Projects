

import './App.css'
import Navigation from './components/Navigation/Navigation'
import ContactHeadder from './components/contact-headder/contactheadder';
import ContactForms from './components/ContactForms/ContactForms';

function App() {
 

  return (
  <div>
    <Navigation />
    <main className="main_container"><ContactHeadder />
    <ContactForms /></main>
    
    </div>
  );
}

export default App
