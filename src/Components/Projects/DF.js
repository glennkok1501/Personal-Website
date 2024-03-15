import img from '../../Assets/projects/df/df.png'
import ImgView from '../ImageGallery/ImgView';

const DF = () => {
    return ( 
        <>
            <ImgView img={img} />
            <div className='mt-3'>
                <p>
                    Since learning forensics analysis using EnCase, this project enabled me to broaden my scope by performing analysis using several differnt open-source tools.
                </p>
            </div>
            <b>Tools Used:</b>
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
        </>
     );
}
 
export default DF;