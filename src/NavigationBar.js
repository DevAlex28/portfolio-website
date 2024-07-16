import "./NavigationBar.css";
function NavigationBar() {

  return (
    <>
      <div className="navigation">
        <div className="navigation_container">
          <p className="navigation_container_text">Hello!</p>
        <ul className="navigation_container_list">
          <li className="navigation_container_list_item">My Name Is Alex</li>
          <li className="navigation_container_list_item">Welcome</li>
        </ul>
        </div>
          <div className="navigation-tab">
            <a id="home">Home</a>
            <a id="myself">Myself</a>
            <a id="projects">Projects</a>
            <a id="contact">Contact</a>
          </div>
      </div>
    
    </>
  );
}

export default NavigationBar;