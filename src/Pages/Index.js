import Footer from "../Components/Footer";
import About from "./About";
import Milestone from "./Milestone";
import Profile from "./Profile";

const Index = () => {
    return ( 
        <>
            <div className="container" style={{"marginTop": "70px"}}>
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
            </div>
            <Footer />
        </>
        
     );
}
 
export default Index;