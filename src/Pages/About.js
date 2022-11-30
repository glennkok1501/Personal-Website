import Details from "../Components/About/Details";
import Skills from "../Components/About/Skills";
import Strengths from "../Components/About/Strengths";

const About = () => {
    return ( 
        <div className="mt-3">
            <h2 className="text-center">About Me</h2>

            <div className="row">
                <div className="col-lg-6">
                    <Details />
                </div>

                <div className="col-lg-6">
                    <Skills />
                </div>
            </div>

            <>
                <Strengths />
            </>
            
        </div>
     );
}
 
export default About;