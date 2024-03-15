import { useState } from "react"

const ImagePreview = ({image, index, setShow, setSelected}) => {

    const [filter, setFilter] = useState('brightness(100%)')

    const preview_style = {
        "height": "150px",
        "width": "150px",
        'objectFit': "cover",
        'filter': filter,
        'borderRadius': "35%"
    }

    const onHover = () => {
        setFilter('brightness(50%)')
    }

    const leaveHover = () => {
        setFilter('brightness(100%)')

    }

    const selectImage = () => {
        setSelected(index)
        setShow(true)
    }

    return ( 
        <div onClick={() => selectImage()}>
            <img className="btn" alt="preview" src={image} style={preview_style} onMouseEnter={() => onHover()} onMouseLeave={() => leaveHover()} />  
        </div>

     );
}
 
export default ImagePreview;