
import { mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";
import { Modal, ModalBody } from "react-bootstrap";
import ImgView from "../Projects/ImgView";
import ImagePreview from "./ImagePreview";

const ImageGallery = ({images}) => {
    const [selected, setSelected] = useState(null)

    return ( 
        <>
            <div className="d-flex"  style={{"overflowY": "auto"}}>
                {
                    images.map(image => (
                        <div key={image}>
                            <ImagePreview image={image} setSelected={setSelected} />
                        </div>
                    ))
                }
            </div>

            <Modal centered size="lg" show={selected}>
                <ModalBody>
                    <div className="text-end">
                        <div className="btn" onClick={() => setSelected(null)}>
                            <Icon size={1} path={mdiClose}/>
                        </div>
                    </div>
                    <ImgView img={selected} />
                </ModalBody>
            </Modal>
        </>
        
     );
}
 
export default ImageGallery;