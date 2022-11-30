import img1 from '../../Assets/hobbies-1.jpg'
import img2 from '../../Assets/hobbies-2.jpg'
import img3 from '../../Assets/hobbies-3.jpg'
import img4 from '../../Assets/hobbies-4.jpg'

const HobbiesGallery = () => {
    return ( 
        <>
            <div className='row mt-2'>
                <div className='col text-center'>
                    <img className='rounded' style={{"width": "100%", "height":"auto"}} src={img1} alt='img1' />
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-6 text-center'>
                    <img className='rounded' style={{"width": "100%", "height":"256px"}} src={img2} alt='img2' />
                </div>
                <div className='col-6 text-center'>
                    <img className='rounded' style={{"width": "100%", "height":"256px"}} src={img3} alt='img3' />
                </div>
            </div>
        </>
        
     );
}
 
export default HobbiesGallery;