import Awards from "../Components/Milestone/Awards";
import Education from "../Components/Milestone/Education";
import Experience from "../Components/Milestone/Experience";

const Milestone = () => {
    return ( 
        <div className="mt-5">
            <h2 className="text-center">MILESTONES</h2>

            <div className="row">
                <div className="col-lg-6">
                    <h3>Education</h3>
                    <Education />
                </div>

                <div className="col-lg-6">
                    <h3>Experiences</h3>
                    <Experience />
                </div>
            </div>

            <>
                <Awards />
            </>
            
        </div>
     );
}
 
export default Milestone;