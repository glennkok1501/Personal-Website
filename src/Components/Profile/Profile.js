import profile_img from '../../Assets/formal-pic2.jpg'
// import profile_img from '../../Assets/avatar.jpg'

import Socials from './Socials';

const Profile = () => {
    return ( 
        <>
            <div className='row align-items-center'>
            <div className='col-lg-6 text-center'>
                <img style={{"width": "70%", "height": "auto", "borderRadius": "24%"}} src={profile_img} alt="profile_img" />
            </div>
                <div className='col-lg-6 text-lg-start text-center'>
                    <h1 className='mt-3'>
                        Hi, I'm <b>Glenn Kok</b>
                    </h1>
                    <p>
                    My interest in cyber security developed during my course of study in Cyber and Network Security under the Institute of Technical Education,
                    which led me to pursue a diploma in Cybersecurity & Digital Forensics in Ngee Ann Polytechnic.
                    My aim is to pursue a career in the cyber security industry in the future after completing my studies in Nanyang Technological University.
                    </p>
                </div>
            </div>
            <Socials />
                
        </>
        
     );
}
 
export default Profile;