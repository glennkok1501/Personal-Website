import img1 from '../../Assets/hobbies-5.jpg'
import img2 from '../../Assets/hobbies-2.jpg'
import img3 from '../../Assets/hobbies-3.jpg'
import img4 from '../../Assets/hobbies-1.jpg'


const style1 = {
    "height": "210px",
    "width": "100%",
    'objectFit': "cover"
}

const style2 = {
    "height": "210px",
    "width": "100%",
    'objectFit': "cover"
}

const HobbiesGallery = () => {
    return ( 
        <>
            <div className='row'>
                <div className='col-8 text-center'>
                    <img className='rounded' style={style1} src={img1} alt='img1' />
                </div>

                <div className='col-4 text-center'>
                    <img className='rounded' style={style2} src={img2} alt='img2' />
                </div>

            </div>
            <div className='row mt-3'>
                <div className='col-4 text-center'>
                    <img className='rounded' style={style2} src={img4} alt='img2' />
                </div>

                <div className='col-8 text-center'>
                    <img className='rounded' style={style1} src={img3} alt='img3' />
                </div>
            </div>
        </>
        
     );
}
 
export default HobbiesGallery;