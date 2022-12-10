import { useEffect, useState } from "react"

const ImagePreview = ({image, setSelected}) => {

    const [objectFit, setObjectFit] = useState('cover')
    const [filter, setFilter] = useState('brightness(100%)')

    const preview_style = {
        "height": "150px",
        "width": "300px",
        'objectFit': objectFit,
        'filter': filter

    }

    const onHover = () => {
        setObjectFit('contain')
        setFilter('brightness(50%)')
    }

    const leaveHover = () => {
        setObjectFit('cover')
        setFilter('brightness(100%)')

    }

    return ( 
        <div onClick={() => setSelected(image)}>
            <img className="rounded btn" src={image} style={preview_style} onMouseEnter={() => onHover()} onMouseLeave={() => leaveHover()} />  
        </div>

     );
}
 
export default ImagePreview;