import profile_img from '../../Assets/fomal-pic_orig.png'
import Socials from './Socials';

const Profile = () => {
    return ( 
        <div className="row border border-dark">
            <div className="col-lg-6 p-0">
                <div className="bg-dark text-center">
                    <img className='shadow-lg m-5 rounded' style={{"width": "74%", "height": "auto"}} src={profile_img} alt="profile_img" />
                </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
                <div className='ms-3 mt-3'>
                    <h1>
                        Hi, I'm <b>Glenn Kok</b>
                    </h1>
                    <p>
                        My name is Glenn, I am currently a student pursuing a Diploma in Cyber Security & Digital Forensics. My interest in cyber security developed during my course of study in the Institute of Technical Education. My aim is to pursue a career in the cyber security industry in the future.
                    </p>
                    <Socials />
                </div>
            </div>

        </div>
        
     );
}
 
export default Profile;