import { useState } from "react"

const ProjectPreview = ({proj, setShow, setProj}) => {

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

    const clickPreview = () => {
        setShow(true)
        setProj(proj)
    }

    return ( 
        <>
            <div onMouseEnter={() => onHover()} onMouseLeave={() => leaveHover()} className="card bg-dark pb-3" style={{"width":"200px", "borderRadius":"10%", "height":"330px"}}>
                <img src={proj.image} className="card-img-top" alt={proj.title} style={preview_style}/>
                <div className="card-body">
                    <div className="card-title">
                        <h5>{proj.title}</h5>
                    </div>

                </div>
                <div className="text-center m-0">
                    <button className="btn btn-outline-light" onClick={() => clickPreview()}>
                        View Details
                    </button>
                </div>
            </div>
        </>
     );
}
 
export default ProjectPreview;