import "../styles/About.css";

function About() {
  return (
    <div className="page about-page">
      <section className="bio">
        <h1>About Me</h1>
        <p>
          Hi, I'm Declan, an aspiring software engineer. I recently completed a Diploma of Web Development.
        </p>
      </section>

      <section className="experience">
        <h2>Skills & Experience</h2>
        <ul>
          <li>Front-end development with React and HTML/CSS</li>
          <li>Back-end development with Node.js and Express</li>
          <li>Database management with MongoDB and Mongoose</li>
          <li>Version control using Git and GitHub</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
