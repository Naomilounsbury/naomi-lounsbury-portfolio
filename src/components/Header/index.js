import React from "react";
import Navigation from "./Navigation";

// TODO: Modify this function so that it accepts props from the parent component
export default function Header({ currentPage, handlePageChange }) {
  return (
    <header className="row bg-success p-2 text-dark bg-opacity-50">
      <h1 className="text-center">Naomi Lounsbury</h1>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </header>
  );
}
