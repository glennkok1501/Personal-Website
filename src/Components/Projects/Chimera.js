import { mdiGithub } from "@mdi/js";
import Icon from "@mdi/react";
import ImgView from "../ImageGallery/ImgView";
import img from '../../Assets/projects/ctg/ctg.jpg'

const Chimera = () => {
    return ( 
        <>
            <ImgView img={img} />
            
            <div className="mt-3">
                <p>
                    Through my research, the final algorithms I have chosen to research and analyse are the Twofish algorithm, Serpent algorithm, International Data Encryption Algorithm (IDEA), Extended Tiny Encryption Algorithm (XTEA) and Rivest Cipher 6 (RC6). 
                    Several pointers are noted into this algorithm such as its characteristics, details of operation, key scheduling process.
                </p>
            </div>

            <b>Find Out More:</b>
            <a className='btn text-white' rel="noreferrer" target="_blank" href="https://github.com/glennkok1501/Chimera-Encryption">
                <Icon className="text-white" path={mdiGithub} size={1} /> GitHub
            </a>
        </>
     );
}
 
export default Chimera;