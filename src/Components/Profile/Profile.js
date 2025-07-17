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
                        Hi, I'm <b>Glenn</b>
                    </h1>
                    <p>
                    Graduated from Ngee Ann Polytechnic with a Diploma in Cyber Security & Digital Forensics. 
                    My passion for cyber security began during my time at the Institute of Technical Education, 
                    where I was first exposed to the world of digital threats and system vulnerabilities. 
                    As I progressed in my studies, this interest deepened into a strong curiosity about how cyber attackers operate and how such threats can be countered effectively.
                    <br/>
                    <br/>
                    Now, as I pursue a Computer Science degree at Nanyang Technological University (NTU), 
                    I am excited to further expand my knowledge in cybersecurity, software engineering, 
                    and digital defense, with the long-term goal of contributing to a safer digital world.
                    </p>
                </div>
            </div>
            <Socials />
                
        </>
        
     );
}
 
export default Profile;