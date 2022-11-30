import Tab from "./Tab";
import './style.css'
import { useCallback, useEffect, useState } from "react";

const Topbar = () => {
    const [y, setY] = useState(window.scrollY);

    const handleNavigation = useCallback(
    e => {
        const window = e.currentTarget;
        const nav = document.getElementById("navbar")
        if (y > 70) {
            nav.classList.remove('p-3');
            nav.classList.add('p-0');
            nav.style.opacity = "0.85";

        } else if (y < 70) {
            nav.classList.remove('p-0');
            nav.classList.add('p-3');
            nav.style.opacity = "1";

        }
        setY(window.scrollY);
    }, [y]
    );

    useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
        window.removeEventListener("scroll", handleNavigation);
    };
    }, [handleNavigation]);
    return ( 
        <div id="navbar" className="navbar navbar-expand-lg p-3 navbar-dark fixed-top shadow mb-3 bg-dark">
            <div className="container">
                <button className="navbar-toggler border-none ms-auto" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
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
        </div>
     );
}
 
export default Topbar;