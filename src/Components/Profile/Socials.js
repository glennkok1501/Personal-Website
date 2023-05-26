import SocialsTab from './SocialsTab';
import { mdiLinkedin, mdiSend, mdiEmail, mdiInstagram } from '@mdi/js';

const Socials = () => {

    return ( 
        <ul className="nav justify-content-center mt-3 mb-3">
            <SocialsTab icon={mdiLinkedin} title="LinkedIn" link="https://www.linkedin.com/in/glenn-kok-7b03a41a1" />
            <SocialsTab icon={mdiSend} title="Telegram" link="https://t.me/glenn_1501" />
            <SocialsTab icon={mdiEmail} title="Email" link="mailto: kokglenn15@gmail.com" />
            <SocialsTab icon={mdiInstagram} title="Instagram" link="https://www.instagram.com/glenn_1501_/" />
        </ul>
     );
}
 
export default Socials;