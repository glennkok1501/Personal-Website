import { mdiGithub, mdiGooglePlay } from '@mdi/js';
import Icon from '@mdi/react';
import img from '../../Assets/projects/spendid/img_1.jpg'
import img_crypt from '../../Assets/projects/spendid/img_crypt.png'
import ImgView from './ImgView';

import img_1 from '../../Assets/projects/spendid/img_1.png'
import img_2 from '../../Assets/projects/spendid/img_2.png'
import img_3 from '../../Assets/projects/spendid/img_3.png'
import img_4 from '../../Assets/projects/spendid/img_4.png'
import img_5 from '../../Assets/projects/spendid/img_5.png'
import img_6 from '../../Assets/projects/spendid/img_6.png'
import img_7 from '../../Assets/projects/spendid/img_7.png'
import img_8 from '../../Assets/projects/spendid/img_8.png'
import img_9 from '../../Assets/projects/spendid/img_9.png'
import img_10 from '../../Assets/projects/spendid/img_10.png'
import ImageGallery from '../ImageGallery/ImageGallery';

const Spendid = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <ImgView img={img} />
                </div>
                <div className="col-md-6">
                    <p>
                        Android Application built using Android Studio and Java. Developing this finance tracking application exposed enabled me to gain new experiences 
                        such as concepts of good coding practices and modular programming.
                    </p>
                    <ImageGallery images={[img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9, img_10]} />
                    <b>Find out more below:</b>
                    <div className='d-flex justify-content-around'>
                        <a className='btn' target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=sg.edu.np.spendid">
                            <Icon path={mdiGooglePlay} size={1} /> Google Play
                        </a>
                        <a className='btn' target="_blank" rel="noreferrer" href="https://github.com/glennkok1501/Spendid">
                            <Icon path={mdiGithub} size={1} /> GitHub
                        </a>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <ImgView img={img_crypt} />
                </div>
                <div className='col-md-6'>
                    <p>Data security is important for transfering data, that is why I have made use of industry standards encryption algorithms to provide this level security.
                    Using my knowledge of cryptography, I have implemented a system where users can secure share their data which is achieved using a combination of symmetric and asymmetric encryption.</p> 
                    <ul>
                        <li>AES256</li>
                        <li>RSA2048</li>
                        <li>SHA256</li>
                    </ul>
                </div>
            </div>
        </> 
        
     );
}
 
export default Spendid;