import React from "react";
import Navigation from "./Navigation";

// TODO: Modify this function so that it accepts props from the parent component
export default function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <div>Naomi Lounsbury</div>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </header>
  );
}
