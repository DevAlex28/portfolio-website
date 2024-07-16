import "./Projects.css";
import VirtualBirthdayCard from "./BirthdayCard.png";
import MockConcertLineup from "./MockConcertLineup.png";
import MyCodingPlaylist from "./MyCodingPlaylist.png";
import PersonalWebsite from "./PersonalWebsite.png";
import NotEbay from "./NotEbay.png";
function Projects() {

  return (
    <>
    <h1 className="projects-heading">My Projects</h1>
    <div className="projects-box">
      {/* add projects here */}
      <img className="birthday-card" src={VirtualBirthdayCard} alt="Birthday Card Project"></img>
      <img className="concert-lineup" src={MockConcertLineup} alt="Mock Concert Lineup Project"></img>
      <img className="coding-playlist" src={MyCodingPlaylist} alt="Personal Website Project"></img>
      <img className="personal-website" src={PersonalWebsite} alt="My Coding Playlist Project"></img>
      <img className="not-ebay" src={NotEbay} alt="Not Ebay Project"></img>
    </div>
    <button className="projects-button">View Projects</button>
    </>
  );
}

export default Projects;