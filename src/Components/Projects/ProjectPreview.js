import { useState } from "react"

const ProjectPreview = ({image, title}) => {

    const [objectFit, setObjectFit] = useState('cover')

    const onHover = () => {
        setObjectFit('contain')
    }

    const leaveHover = () => {
        setObjectFit('cover')
    }

    const preview_style = {
        "borderRadius":"10%", 
        "height":"180px", 
        "objectFit":objectFit, 
        "background":"white",
    }

    return ( 
        <>
            <div onMouseEnter={() => onHover()} onMouseLeave={() => leaveHover()} className="card bg-dark " style={{"width":"200px", "borderRadius":"10%", "height":"330px"}}>
                <img src={image} className="card-img-top" alt={title} style={preview_style}/>
                <div className="card-body">
                    <div className="card-title">
                        <h5>{title}</h5>
                    </div>
                    <div className="text-center align-text-bottom">
                        <a href="" className="btn btn-outline-light mt-3">View Details</a>
                    </div>

                </div>
            </div>
        </>
     );
}
 
export default ProjectPreview;