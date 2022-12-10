import img from '../../Assets/projects/df/df.png'
import ImgView from './ImgView';

const DF = () => {
    return ( 
        <div className="row">
            <div className="col-md-6">
                <ImgView img={img} />
            </div>
            <div className="col-md-6">
                <p>
                    Since learning forensics analysis using EnCase, this project enabled me to broaden my scope by performing analysis using several differnt open-source tools.
                </p>
                <ul>
                    <li>
                        <b>FTK Forensic Toolkit</b>
                        <br />
                        Disk image creation
                    </li>
                    <li>
                        <b>Bulk Extractor</b>
                        <br />
                        Data/File carving
                    </li>
                    <li>
                        <b>The Sleuth Kit (TSK)</b>
                        <br />
                        Disk analysis and recover
                    </li>
                    <li>
                        <b>Steghide</b>
                        <br />
                        Decode steganography
                    </li>
                </ul>

            </div>
        </div>
     );
}
 
export default DF;