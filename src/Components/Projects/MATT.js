import ImgView from "../ImageGallery/ImgView";
import img from '../../Assets/projects/matt/matt.png'
const MATT = () => {
    return ( 
        <>
            <table className="table text-white">
                <tbody>
                    <tr>
                        <td><b>Type</b></td>
                        <td className="text-break">MS Word Document</td>
                    </tr>
                    <tr>
                        <td><b>Filename</b></td>
                        <td className="text-break">FA04909_7.doc</td>
                    </tr>
                    <tr>
                        <td><b>MD5 Hash</b></td>
                        <td className="text-break">7fcda3c12ba8b6a15a3f534c420da13b</td>
                    </tr>
                    <tr>
                        <td><b>URL Download</b></td>
                        <td className="text-break">
                            <a target="_blank" rel="noreferrer" href="https://github.com/InQuest/malware-samples/blob/master/2019-06-Emotet-Droppers/2618b4d1cfdf9290c1df934b0658fa889cfefe4b7d8b6f6e3a37c0c4bd2ad02a">
                            https://github.com/InQuest/malware-samples/blob/master/2019-06-Emotet-Droppers/2618b4d1cfdf9290c1df934b0658fa889cfefe4b7d8b6f6e3a37c0c4bd2ad02a
                            </a>
                        </td>
                    </tr>
                </tbody>
                
            </table>
            <div className="mt-3">
                <p>
                Document-based malware has been on the rise and comes in the form of common file types. 
                The malware embeds malicious codes into documents, PDFs, spreadsheets, and other files which can execute commands within the victim's system upon activation. 
                Carrying out analysis on this project exposed me to the various tools and methodology used in performing malware analysis.
                </p>
            </div>
            <ImgView img={img} />
            <div className="mt-3">
                <p>
                After analyzing the intention and purpose of the malicious document, it is revealed that the type of malware is a dropper disguised as an Office Word Document file. Macros with malicious intent were embedded into the document which is designed to install malware from external sources onto the victim's computer upon opening the document.
                </p>
            </div>
        </>
        
     );
}
 
export default MATT;