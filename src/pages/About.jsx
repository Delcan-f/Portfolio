import "../styles/App.css";
import "../styles/About.css";

function About() {
    return (
        <div className="about-page">
            <section className="bio">
                <h1>About Me</h1>
                <p>
                    Hi, I'm Declan, an aspiring software engineer. I recently completed a Diploma of Web Development where I gained experience in Javascript, React, Node.js, MongoDB, Python, Pip and many more.
                </p>
            </section>

            <section className="experience">
                <h2>Skill & Experience</h2>
                <ul>
                    <li>Front-end development with React and HTML/CSS</li>
                    <li>Back-end development with Node.js and Express</li>
                    <li>Database management with MongoDB and Mongoose</li>
                    <li>Version conrol using Git and GitHub</li>
                </ul>
            </section>
        </div>
    );
}

export default About