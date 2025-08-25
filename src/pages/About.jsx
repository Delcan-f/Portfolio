import "../styles/About.css";

function About() {
  return (
    <div className="page about-page">
      <section className="bio">
        <h1>About Me</h1>
        <p>
         I recently completed a Diploma of Web Development, where I gained hands-on experience in both front-end and back-end development. I love problem-solving, learning new technologies, and building projects that have a real-world impact. Outside of my Web Development Course, I enjoy collaborating on projects, experimenting with new tools, and constantly improving my skills. Feel free to explore my projects to see my skills and experience in action!
        </p>
      </section>

      <section className="experience">
        <h2>Skills & Experience</h2>
        <ul>
          <li>Python & Pip</li>
          <li>JavaScript</li>
          <li>CI/CD pipelines and automation</li>
          <li>Docker & Containerisation</li>
          <li>Front-end development with React, HTML, and CSS</li>
          <li>Back-end development with Node.js and Express</li>
          <li>Database management with MongoDB, Mongoose, and SQL basics</li>
          <li>Version control using Git and GitHub</li>
          <li>RESTful API design and development</li>
          <li>Unit and integration testing (Jest, Supertest)</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
