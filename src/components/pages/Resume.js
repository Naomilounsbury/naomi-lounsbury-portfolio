import React from "react";
import thesis from "../../assets/masterthesis.pdf";
import sunyatsen from "../../assets/sunyatsen-students.jpg";
import coding from "../../assets/errormsg.png";
import undergrad from "../../assets/undergrad.jpg";
import pool from "../../assets/poolside.jpg";
import kindergarten from "../../assets/kindergarten.jpg";
import pangolin from "../../assets/pangolin.jpg";
export default function Resume() {
  return (
    <div className="bg-success bg-opacity-25">
      <h1 className="text-center">Skills</h1>
      <p>I have lots of skills</p>
      <div className="font-monospace">
        <span className="fs-6 p-3 m-1 fw-bold bg-success bg-opacity-10">
          React.js
        </span>
        <span className="fs-5 p-2 m-1 fst-italic bg-success bg-opacity-10">
          graphql
        </span>
        <span className="fs-6 p-3 m-1 fw-bold bg-success bg-opacity-10">
          HTML
        </span>
        <span className="fs-5 p-2 m-1 fst-italic bg-success bg-opacity-10">
          CSS
        </span>
        <span className="fs-4 p-1 m-1 bg-success bg-opacity-10">
          Vanilla Javascript
        </span>
        <span className="fs-6 p-3 m-1 fw-bold bg-success bg-opacity-10">
          Node.js
        </span>
        <span className="fs-5 p-2 m-1 fw-bolder bg-success bg-opacity-10">
          mySql
        </span>
        <span className="fs-4 p-1 m-1 bg-success bg-opacity-10">
          Express.js
        </span>
        <span className="fs-3 p-1 m-1 bg-success bg-opacity-10">mongoDB</span>
        <span className="fs-6 p-3 m-1 fst-italic bg-success bg-opacity-10">
          restful Apis
        </span>
        <span className="fs-5 p-2 m-1 bg-success bg-opacity-10">
          handlebars.js
        </span>
        <span className="fs-4 p-1 m-1 bg-success bg-opacity-10">
          Bootstrap and Materialize
        </span>
        <span className="fs-3 p-1 m-1 fw-bold bg-success bg-opacity-10">
          Cross Cultural Communication
        </span>
        <span className="fs-6 p-3 m-1 fst-italic bg-success bg-opacity-10">
          Being Only Slightly Obnoxious
        </span>
      </div>
      <div></div>
      <h1 className="text-center">Education</h1>
      <div className="row align-items-start p-3 border border-success border-4">
        <div className="col-5">
          <img
            src={coding}
            className="rounded float-start"
            alt="Naomi's awesome face"
          />
        </div>
        <div className="col-7">
          <div className="card-body text-center">
            <h3 className="card-title">
              UC Berkeley Extension Coding Bootcamp
            </h3>
            <p className="card-text">Certificate as a Full Stack Developer</p>
            <p className="card-text">October 2021-April 2022</p>
            <p className="card-text">Online</p>
            <p className="card-text">
              Woohoo coding! I totally enjoyed this bootcamp. I know that's not
              a normal thing people say about these things but it was fun; I
              made a bunch of online friends. I had the satifation of getting my
              code to work. And I gained only a slight bit of weight as I ate
              chocolate and screamed at my computer when it didn't work.
            </p>
          </div>
        </div>
      </div>

      <div className="row align-items-start p-3 border border-success border-4">
        <div className="col-5">
          <img
            src={sunyatsen}
            className="rounded float-start"
            alt="Naomi's awesome face"
          />
        </div>
        <div className="col-7">
          <div className="card-body text-center">
            <h3 className="card-title">Sun Yat-Sen University</h3>
            <p className="card-text">
              Master's in Teaching Chinese as a Second Language
            </p>
            <p className="card-text">August 2015-August 2020</p>
            <p className="card-text">Guangzhou, China</p>
            <p className="card-text">
              This was the hardest thing I've ever done. Yes, coding is hard but
              it's not as hard as writing an 50000 word thesis in Chinese when
              Chinese isn't your native language. I rememeber crying on the
              phone to my advisor, telling her that all my research was really
              useless because I didn't have any grand conclusion to show for a
              year of research. It was hell.
            </p>
            <a href={thesis}>Read my Master's Thesis Here</a>
          </div>
        </div>
      </div>
      <div className="row align-items-start p-3 border border-success border-4">
        <div className="col-5">
          <img
            src={undergrad}
            className="rounded float-start"
            alt="Naomi's awesome face"
          />
        </div>
        <div className="col-7">
          <div className="card-body text-center">
            <h3 className="card-title">San Jose State University</h3>
            <p className="card-text">BA in Anthropology, BA in Chinese</p>
            <p className="card-text">August 2007-May 2012</p>
            <p className="card-text">San Jose, CA</p>
            <p className="card-text">
              I loved going to school. Class was always super fun for me. I took
              a lot of units and double majored in Chinese and Anthropology but
              I probably would have stayed in school forever just learning
              different things if I could have.
            </p>
          </div>
        </div>
      </div>

      <h1 className="text-center">Employment History</h1>
      <div className="row align-items-start p-3 border border-success border-4">
        <div className="col-5">
          <img
            src={pool}
            className="rounded float-start"
            alt="Naomi's awesome face"
          />
        </div>
        <div className="col-7">
          <div className="card-body text-center">
            <h3 className="card-title">Avila Hot Springs</h3>
            <p className="card-text">Lifeguard</p>
            <p className="card-text">August 2021-present</p>
            <p className="card-text">Avila Beach, California</p>
            <p className="card-text">
              As a lifeguard, I ensured the safety of swimmers and interacted
              with pool goers as an authority figure and friendly helper, while
              maintaining the safety standards of the pool. Mostly, I stop
              people from doing stupid things like running on the pool deck or
              bringing glass into the pool area.
            </p>
          </div>
        </div>
      </div>
      <div className="row align-items-start p-3 border border-success border-4">
        <div className="col-5">
          <img
            src={kindergarten}
            className="rounded float-start"
            alt="Naomi's awesome face"
          />
        </div>
        <div className="col-7">
          <div className="card-body text-center">
            <h3 className="card-title">California Kid's Club</h3>
            <p className="card-text">Preschool Teacher</p>
            <p className="card-text">August 2020-August 2021</p>
            <p className="card-text">Shenzhen, China</p>
            <p className="card-text">
              As a kindergarten counselor, I taught a class of 18 three year
              olds. I led the class not only through learning an entirely new
              language but also in learning manners, sharing and good
              communication skills. I mediated disputes, encouraged friendships
              and managed the class through a careful balance of consequence and
              reward.
            </p>
          </div>
        </div>
      </div>
      <div className="row align-items-start p-3 border border-success border-4">
        <div className="col-5">
          <img
            src={pangolin}
            className="rounded float-start"
            alt="Naomi's awesome face"
          />
        </div>
        <div className="col-7">
          <div className="card-body text-center">
            <h3 className="card-title">That's Magazine</h3>
            <p className="card-text">Freelance Writer</p>
            <p className="card-text">March 2019-November 2020</p>
            <p className="card-text">Guangzhou, China</p>
            <p className="card-text">
              As an freelance journalist, I researched different topics,
              published articles, reached out to potential sources and wrote
              marketing posts. By the end it was mostly horoscopes and marketing
              posts but it was creative and fun so I enjoyed it.
            </p>
          </div>
        </div>
      </div>

      <h1 className="text-center">Various Trustworthy References</h1>
    </div>
  );
}
