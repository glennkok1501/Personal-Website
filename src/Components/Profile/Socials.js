import SocialsTab from './SocialsTab';
import { mdiLinkedin, mdiSend, mdiEmail, mdiInstagram, mdiFileAccount } from '@mdi/js';
import cv from "../../Assets/GLENN KOK RESUME.pdf"
import Icon from '@mdi/react';

const Socials = () => {

    const socials = [
        {"icon": mdiLinkedin, "title": "LinkedIn", "link":"https://www.linkedin.com/in/glenn-kok-7b03a41a1"},
        {"icon": mdiSend, "title": "Telegram", "link":"https://t.me/glenn_1501"},
        {"icon": mdiEmail, "title": "Email", "link":"mailto: kokglenn15@gmail.com"},
        {"icon": mdiInstagram, "title": "Instagram", "link":"https://www.instagram.com/glenn_1501_/"},

    ]

    return ( 
        <ul className="nav justify-content-center mt-3 mb-3">
            {
                socials.map(social => (
                    <div key={social.icon}>
                        <SocialsTab icon={social.icon} title={social.title} link={social.link} />
                    </div>
                ))
            }

            <li className="nav-item bg-dark">
                <a className="nav-link text-white" href={cv} target="_blank" rel="noreferrer">
                    <Icon path={mdiFileAccount} title={"Resume"} size={1}/>
                </a>
            </li>
            
        </ul>
     );
}
 
export default Socials;