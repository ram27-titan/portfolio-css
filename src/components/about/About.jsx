import React from 'react';
import './about.css';
import ME from '../../assets/ARI.jpg';
import { FaAward } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Freshgraduate</small>
            </article>
            <article className="about__card">
              <MdWeb className="about__icon" />
              <h5>Training</h5>
              <small>Parther by Eduwork 3.5 Month</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10 complete</small>
            </article>
          </div>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum voluptas deserunt, minima ullam molestiae voluptate ipsum sit obcaecati vel quo asperiores aperiam labore excepturi, veniam mollitia consequuntur nostrum
            repellendus explicabo.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
