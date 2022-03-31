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
          <p>
            Hi, my name is Naomi Lounsbury. I'm super friendly and talkative, so
            if we ever meet, you can rest assured you'll know everything about
            my life within four hours of meeting me. I'm a millenial, aquarius
            and an extrovert, though I feel like people like to make dramatic
            inferrences about people based on these things and yet there's not
            too much you can actually tell. I mean yes, my first phone was a
            flip phone and I'm loud but those things aren't my whole
            personality.
          </p>
          <p>At this point, I'm just writing to fill up the page.</p>
          <p>
            But honestly how do you fit your being into just words? Who has this
            ability. All these words that I use to describe myself mean
            different things to different people.
          </p>
          <p>
            Anyway, I like to read, hike, climb and, of course, code. While I
            would say I'm just average at coding, I happen to be pretty good at
            reading documentation and asking people how to do things. I really
            like working with other people and I'm only a little bossy. I am
            looking for a job so that I can stop living in my mom's basement and
            maybe be able to afford a house and eventually even get a plant of
            my own. You should totally hire me.
          </p>
        </div>
      </div>
    </div>
  );
}
