import img_1 from '../../Assets/projects/capstone/capstone.png'
import ImageGallery from '../ImageGallery/ImageGallery';
import ImgView from './ImgView';

import gallery_1 from '../../Assets/projects/capstone/capstone_gallery_1.png'
import gallery_2 from '../../Assets/projects/capstone/capstone_gallery_2.png'
import gallery_3 from '../../Assets/projects/capstone/capstone_gallery_3.png'
import gallery_4 from '../../Assets/projects/capstone/capstone_gallery_4.png'
import gallery_5 from '../../Assets/projects/capstone/capstone_gallery_5.png'
import gallery_6 from '../../Assets/projects/capstone/capstone_gallery_6.png'


const Captsone = () => {
    return ( 
        <>
            <div className="row">
                <div className="col-md-4">
                    <ImgView img={img_1} />
                </div>
                <div className='col-md-6'>
                    <p className='mt-3'>
                        <b>myXtra</b> allows for students to use our web application to enhance their learning experience whilst in Ngee Ann, while still being able to socialize and connect with their peers.
                        <br />
                        This application integrates multiple features that are essential to both students in both the education and social aspects.
                    </p>
                </div>
                <div className='col-md-2'>
                    <p>Features include:</p>
                    <ul>
                        <li>SSO Authentication</li>
                        <li>Social Feed</li>
                        <li>Profile Management</li>
                        <li>Forum</li>
                        <li>Cloud Storage</li>
                        <li>Chat Messenger</li>
                        <li>Social Wall</li>
                    </ul>
                </div>
            </div>
            <div className='mt-3'>
                <ImageGallery images={[gallery_1, gallery_2, gallery_3, gallery_4, gallery_5, gallery_6]} />
            </div>
        </>
        
     );
}
 
export default Captsone;