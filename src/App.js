import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = ()=>{
    switch (currentPage){
      case "About":
        return <About />
      case "Portfolio":
         return <Portfolio />
      case "Contact":
        return <Contact />
      case "Resume":
        return <Resume />     
    }
  }

  return (
    <div className="App">
      <Header
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <main>
       {renderCurrentPage()}
        {/* {currentPage === 'About' ? <About />:""}
        {currentPage === 'Portfolio' && <Portfolio />}
        {currentPage === 'Contact' && <Contact />}
        {currentPage === 'Resume' && <Resume />} */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
