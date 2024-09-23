import React from 'react';

import Header from './layout/Header';
import Footer from './layout/Footer'
import Hebergements from './pages/Hebergements';
import "./style.css";

function App() {
  return (
      <div className="MainLayout">
        <Header />
          <main>
            <Hebergements />
          </main>
        <Footer />
    </div>
  );
}

export default App;
