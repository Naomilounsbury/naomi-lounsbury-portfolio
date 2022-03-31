import React, { useState } from "react";
import { FaGithub, FaDumpsterFire } from "react-icons/fa";
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
      githubLink: "https://github.com/Naomilounsbury/nerd-talks",
      liveLink: "https://peaceful-peak-54805.herokuapp.com/",
    },
    {
      name: "Budget Me Gold Arrrrh",
      description:
        "This is a budget tracking site made with mongoDB. It uses service workers and indexedDB to save data that was input while offline.",
      githubLink: "https://github.com/Naomilounsbury/budget-me-gold-arrrh",
      liveLink: "https://budget-me-gold-arrrh.herokuapp.com/",
    },
    {
      name: "Pizza Space Note Taker",
      description:
        "This is a note taker app made with express.js. It can save notes and delete notes.",
      githubLink: "https://github.com/Naomilounsbury/pizza-space-note-taker",
      liveLink: "https://serene-plains-14524.herokuapp.com/",
    },
    {
      name: "Track Your Suits",
      description:
        "This is a cli tool I made that uses mySql to track employees. with this cli, you can view departments, roles and employees; add departments, roles and employees; update employee roles and managers as well as delete departments, roles and employees.",
      githubLink: "https://github.com/Naomilounsbury/track-your-suits",
      liveLink: "https://github.com/Naomilounsbury/track-your-suits",
    },
    {
      name: "ReadME Generator",
      description:
        "This is a command line tool that generates a readME from the command line. ",
      githubLink: "https://github.com/Naomilounsbury/readme-generator",
      liveLink: "https://github.com/Naomilounsbury/readme-generator",
    },
    {
      name: "Event Inn",
      description:
        "This is a site made using html,css and javascript using api calls to get events and hotels of a searched city displayed on the page. Also the weather for that city will show up and we used the materialize CSS framework",
      githubLink: "https://github.com/Naomilounsbury/event-inn",
      liveLink: "https://naomilounsbury.github.io/event-inn/",
    },
    {
      name: "Weather Dashboard",
      description:
        "This is a application that allows users to check the weather in a city of their choice. It uses Javascript, CSS and Html.",
      githubLink: "https://github.com/Naomilounsbury/weather-dashboard",
      liveLink: "https://naomilounsbury.github.io/weather-dashboard/",
    },
  ]);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="row">
        <div className="card-group ">
          {photos.map((image, i) => (
            <>
              <div className="col-md-4 col-sm-12 bg-success bg-opacity-25 p-3 border ">
                <h3>{image.name}</h3>
                <img
                  src={require(`../../assets/images/image${i}.png`)}
                  //src={nerd}
                  alt={image.name}
                  className="card-img-top img-thumbnail p-1"
                  onClick={() => toggleModal(image, i)}
                  key={image.name}
                />

                <p>{image.description}</p>
                <h3 className="text-center">
                  <a href="{image.githubLink}">
                    <FaGithub />
                  </a>
                </h3>
                <h3 className="text-center">
                  <a href="{image.liveLink}">
                    <FaDumpsterFire />
                    Live Link
                  </a>
                </h3>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
