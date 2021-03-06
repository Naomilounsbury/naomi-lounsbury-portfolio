import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/pages/About";
import Portfolio from "./components/project/Portfolio";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  // TODO: its rendering the pages
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </>
  );
}

export default App;
