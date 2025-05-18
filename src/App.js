import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 4 second loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // cleanup
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-wrapper">
          <span className="loader"></span>
        </div>
      ) : (
        <>
          <Header />
          <Home />
          <About />
        </>
      )}
    </>
  );
}

export default App;
