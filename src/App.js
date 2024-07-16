import NavigationBar from "./NavigationBar.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";
import './App.css';

function App() {

  return (
    <>
    <NavigationBar />
    <h1 className="about-me-heading">About Me</h1>
    <div className="about-me-box">
      <p className="about-me-text">I am inspiring to be a software engineer at a tech company. 
        Though I only have a certificate from my software development, I believe my projects can prove how far  
        I`ve come and willing to go to achieve my goals.</p>
    </div>
    <Projects />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
