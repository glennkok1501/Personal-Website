import Details from "../Components/About/Details";
import Skills from "../Components/About/Skills";
import Strengths from "../Components/About/Strengths";
import HobbiesGallery from "../Components/Hobbies/HobbiesGallery";
import HobbiesList from "../Components/Hobbies/HobbiesList";

const About = () => {
    return ( 
        <>
            <h1>
                About Me
            </h1>
            
            <div className="row">
                <div className="col-lg-6">
                    <Details/>
                </div>
                <div className="col-lg-6">
                    <HobbiesGallery />
                </div>
            </div>
        </>
        // <div className="mt-5">
        //     <h2 className="text-center">ABOUT ME</h2>

        //     <div className="row mb-3">
        //         <div className="col-lg-6">
        //             <h3>Interests & Hobbies</h3>
        //             <hr />
        //             <HobbiesList />
        //         </div>

        //         <div className="col-lg-6">
        //             <HobbiesGallery />
        //         </div>
        //     </div>

        //     <div className="row mt-5">
        //         <div className="col-lg-6">
        //             <Details />
        //         </div>

        //         <div className="col-lg-6">
        //             <Skills />
        //         </div>
        //     </div>

        //     <>
        //         <Strengths />
        //     </>
            
        // </div>
     );
}
 
export default About;