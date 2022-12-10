import { mdiGithub } from "@mdi/js";
import Icon from "@mdi/react";
import ImgView from "./ImgView";
import img from '../../Assets/projects/ctg/ctg.jpg'

const Chimera = () => {
    return ( 
        <>
            <div className="row">
                <div className="col-md-6">
                    <ImgView img={img} />
                </div>
                <div className="col-md-6">
                    <p>
                        Through my research, the final algorithms I have chosen to research and analyse are the Twofish algorithm, Serpent algorithm, International Data Encryption Algorithm (IDEA), Extended Tiny Encryption Algorithm (XTEA) and Rivest Cipher 6 (RC6). 
                        Several pointers are noted into this algorithm such as its characteristics, details of operation, key scheduling process.

                    </p>
                    <div className='d-flex justify-content-around'>
                        <a className='btn' rel="noreferrer" target="_blank" href="https://github.com/glennkok1501/Chimera-Encryption">
                            <Icon path={mdiGithub} size={1} /> GitHub
                        </a>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Chimera;