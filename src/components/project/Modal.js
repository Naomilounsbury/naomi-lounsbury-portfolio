import React from "react";
import { FaGithub } from "react-icons/fa";
const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, githubLink, liveLink, index } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer bg-success bg-opacity-25">
        <h3 className="modalTitle text-center">{name} </h3>
        <img
          src={require(`../../assets/images/image${index}.png`)}
          alt="current category"
        />
        <p>{description}</p>
        <a href={githubLink}>
          <FaGithub />
        </a>
        <a href={liveLink}>Click Here for the Live Application</a>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
