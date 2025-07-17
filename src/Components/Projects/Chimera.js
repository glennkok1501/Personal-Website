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
                    Chimera is a symmetric block cipher that uses the same key for encryption and decryption. Chimera has a block size of 128-bit and requires a fixed key-length of 128-bit. It is a 10-round block cipher that uses a Feistel network structure like TwoFish. The F Function in Chimera incorporated operations and features used in Twofish, Serpent, IDEA and RC6. Some operations include TwoFish MDS and PHT. In addition, Chimera uses Serpent’s S-boxes together with key mixing, Substitution and Linear Transformation. RC6 and IDEA algorithm are used in the Function F in alternate. XTEA provides more confusion and diffusion as it is used before and after Function F. Due to the complexity of this algorithm, it is stronger than most algorithm.
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