
import { mdiChevronLeft, mdiChevronRight, mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import ImagePreview from "./ImagePreview";

const ImageGallery = ({images}) => {
    const [show, setShow] = useState(false)
    const [selected, setSelected] = useState(0)

    const next = () => {
        setSelected((selected + 1) % images.length)
        // console.log(selected)
    }

    const previous = () => {
        if (selected === 0) {
            setSelected(images.length-1)
            return
        }
        setSelected((selected - 1) % images.length)
        // console.log(selected)
    }

    return ( 
        <>
            <hr />
            <h3>
                Images
            </h3>
            <div className="d-flex"  style={{"overflowY": "auto"}}>

                {
                    images.map((image, i) => (
                        <div key={image}>
                            <ImagePreview image={images[i]} setSelected={setSelected} index={i} setShow={setShow} />

                        </div>
                    ))
                }
            </div>

            <Modal className="bg-dark" backdrop="static" animation={false} centered size="lg" show={show}>
                    <div className="position-relative align-items-center d-flex">
                        <img src={images[selected]} alt='project_img' className="w-100 rounded img-fluid" />

                        <div className="btn position-absolute top-0 end-0" onClick={() => setShow(false)}>
                            <Icon size={1.5} path={mdiClose} className="text-dark"/>
                        </div>
                        <div className="d-flex w-100 justify-content-between position-absolute">
                            <i className="btn p-0" onClick={() => previous()}>
                                <Icon size={2.5} path={mdiChevronLeft} className="text-dark"/>
                            </i>
                            <i className="btn p-0" onClick={() => next()}>
                                <Icon size={2.5} path={mdiChevronRight} className="text-dark"/>
                            </i>

                        </div>

                    </div>

            </Modal>
        </>
        
     );
}
 
export default ImageGallery;