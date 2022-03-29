import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="bg-success bg-opacity-50">
      <div>
        <h5>
          Email:
          <a href="mailto:lounsbury.naomi@gmail.com">
            lounsbury.naomi@gmail.com
          </a>
        </h5>
        <h5>
          Github:
          <a href="https://github.com/Naomilounsbury">
            <FontAwesomeIcon icon="fa-brands fa-github" /> Naomi Lounsbury
          </a>
        </h5>
      </div>
    </footer>
  );
}
