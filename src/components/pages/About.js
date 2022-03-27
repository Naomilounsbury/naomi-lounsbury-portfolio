import React from "react";
import naomiPic from "../../assets/profile-pic/naomiPic.jpg";

// TODO: Modify this function so that it accepts props from the parent component
export default function About() {
  return (
    <div className="container-fluid ">
      <div className="row bg-success p-2 text-dark bg-opacity-25">
        <div className="text-center">
          <img
            src={naomiPic}
            className="col-md-4 col-sm-8 rounded center border border-dark "
            alt="Naomi's awesome face"
          />
        </div>
        <div>
          As you can probably guess from the repetition of my name on this page,
          my name is Naomi Lounsbury. I'm super friendly and nice. I like to
          read, hike, climb and, of course, code. While I would say I'm just
          average at coding, I happen to be pretty good at reading documentation
          and asking people how to do things. I really like working with other
          people and I'm only a little bossy. I am looking for a job so that I
          can stop living in my mom's basement and maybe be able to afford a
          house and eventually even get a plant of my own. You should totally
          hire me.{" "}
        </div>
      </div>
    </div>
  );
}
