import React, { useState } from "react";
import Modal from "./Modal";
//import nerd from "../../assets/images/image0.png";

const ProjectList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: "Nerd Talks",
      description:
        "This is a blogging site made with sequelize, express and handlebars.js. It made done with a model, view and controller. You can create, read, update and delete posts. Currently you can create comments but not delete or update those comments unless you delete the whole post, so that's an area I can improve.",
      link: "https://github.com/Naomilounsbury/nerd-talks",
    },
    {
      name: "Grocery booth",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    // {
    //   name: "Building exterior",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    // },
  ]);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
    console.log("PHOTOS.NAME", photos.name);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="col-lg-4 flex-row">
        {photos.map((image, i) => (
          <>
            <img
              src={require(`../../assets/images/image${i}.png`)}
              //src={nerd}
              alt={image.name}
              className="card-img-top"
              onClick={() => toggleModal(image, i)}
              key={image.name}
            />
            <h5>{image.name}</h5>
          </>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
