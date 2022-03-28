import React from "react";

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, link, index } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img
          src={require(`../../assets/images/image${index}.png`)}
          alt="current category"
        />
        <p>{description}</p>
        <a href={link}> GitHub</a>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;