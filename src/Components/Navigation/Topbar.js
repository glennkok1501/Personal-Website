import Tab from "./Tab";

const Topbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow mb-3 bg-light">
            <div className="container">
                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" style={{"--bs-scroll-height": "200px"}}>
                        <Tab name="Profile" section="profile" />
                        <Tab name="About Me" section="about-me" />
                        <Tab name="Milestones" section="milestones" />
                        <Tab name="Projects" section="projects" />
                    </ul>
                </div>

            </div>
        </nav>
     );
}
 
export default Topbar;