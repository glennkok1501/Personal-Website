import Education from "../Components/Milestone/Education";
import Experience from "../Components/Milestone/Experience";

const Milestone = () => {
    return ( 
        <div className="mt-5">
            <h1>Milestones</h1>

            <div className="row">
                <div className="col-lg-6">
                    <h2>Education</h2>
                    <Education />
                </div>

                <div className="col-lg-6">
                    <h2>Experiences</h2>
                    <Experience />
                </div>
            </div>
        </div>
     );
}
 
export default Milestone;