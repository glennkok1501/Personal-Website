import cv from "../../Assets/GLENN KOK RESUME.pdf"

const Resume = () => {
    return ( 
        <div className="text-center">
            <a href={cv} target="_blank" rel="noreferrer">
                <small>Download Resume</small>
            </a>
            
        </div>
     );
}
 
export default Resume;