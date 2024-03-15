
import { mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import ImagePreview from "./ImagePreview";

const ImageGallery = ({images}) => {
    const [selected, setSelected] = useState(null)

    return ( 
        <>
            <hr />
            <h3>
                Images
            </h3>
            <div className="d-flex"  style={{"overflowY": "auto"}}>
                {
                    images.map(image => (
                        <div key={image}>
                            <ImagePreview image={image} setSelected={setSelected} />
                        </div>
                    ))
                }
            </div>

            <Modal className="bg-dark" backdrop="static" animation={false} centered size="lg" show={selected}>
                    <div className="position-relative">
                        <div className="btn position-absolute top-0 end-0" onClick={() => setSelected(null)}>
                            <Icon size={1.5} path={mdiClose} className="text-dark"/>
                        </div>

                    </div>
                    <img src={selected} alt='project_img' className="img-fluid rounded" />

            </Modal>
        </>
        
     );
}
 
export default ImageGallery;