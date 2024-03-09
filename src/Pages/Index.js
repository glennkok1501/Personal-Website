import Footer from "../Components/Footer";
import About from "./About";
import Milestone from "./Milestone";
import Profile from "./Profile";
import Projects from "./Projects";

const Index = () => {
    return ( 
        <>
            <div className="container" style={{"marginTop": "50px"}}>
                <section id="profile">
                    <Profile />
                </section>
                <section id="about-me">
                    <About />
                </section>
                <hr />
                <section id="milestones">
                    <Milestone />
                </section>
                {/* <hr />
                <section id="projects">
                    <Projects />
                </section> */}
            </div>
            <Footer />
        </>
        
     );
}
 
export default Index;