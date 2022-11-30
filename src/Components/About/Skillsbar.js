const Skillsbar = ({title, level}) => {

    const progress = {"width": `${level}%`}
    return ( 
        <div className="mb-3">
            {title}
            <div className="progress">
                <div className="progress-bar bg-dark progress-bar-animated" role="progressbar" style={progress} aria-valuenow={level} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
        
     );
}
 
export default Skillsbar;