import { useState } from "react"

const ImagePreview = ({image, setSelected}) => {

    const [filter, setFilter] = useState('brightness(100%)')

    const preview_style = {
        "height": "150px",
        "width": "150px",
        'objectFit': "cover",
        'filter': filter,
        'border-radius': "35%"
    }

    const onHover = () => {
        setFilter('brightness(50%)')
    }

    const leaveHover = () => {
        setFilter('brightness(100%)')

    }

    return ( 
        <div onClick={() => setSelected(image)}>
            <img className="btn" alt="preview" src={image} style={preview_style} onMouseEnter={() => onHover()} onMouseLeave={() => leaveHover()} />  
        </div>

     );
}
 
export default ImagePreview;