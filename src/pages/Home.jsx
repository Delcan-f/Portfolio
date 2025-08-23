import "../styles/App.css";
import "../styles/Home.css"

function Home() {
    return (
        <div className="home-page">
            <section className="intro">
                <h1>Welcome to my portfolio</h1>
                <p>Hi, I'm Declan! I'm an aspiring Software Engineer.</p>
                <p>This site showcases my projects, skills, and contact information.</p>
            </section>

            <section className="skills">
                <h2>My Skills</h2>
                <ul>
                    <li>HTML, CSS, Javascript</li>
                    <li>React & React Router</li>
                    <li>Node.js & Express</li>
                    <li>MongoDB & Mongoose</li>
                </ul>
            </section>
        </div>
    );
}

export default Home;