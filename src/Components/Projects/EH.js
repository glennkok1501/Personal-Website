import ImgView from "./ImgView";
import img_1 from '../../Assets/projects/eh/eh_diagram.png'
import img_2 from '../../Assets/projects/eh/eh_diagram_2.png'

const EH = () => {
    return ( 
        <>
            <div className="row">
                <div className="col-md-6">
                    <ImgView img={img_1} />
                </div>
                <div className="col-md-6">
                    <p>
                        This project gave me the opportunity to explore my creativity with a sandbox style ethical hacking scenario.
                        I was tasked to deploy my own infrastructure which consist of several machines of different operating systems 
                        along with the use of a Palo Alto virtual firewall for added complexity.
                    </p>
                    <p>Servers and Clients listed and Exploit:</p>
                    <ul>
                        <li>Windows 10 Client (Folina RCE)</li>
                        <li>File Transfer Protocol (FTP) Server (ProFTPd 1.3.5 - Mod Copy)</li>
                        <li>Web Server (Log4j)</li>
                        <li>MySQL Server (Data Exfiltration)</li>
                        <li>Windows Server 2012 (MS17_010_PSEXEC)</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <ImgView img={img_2} />
                </div>
                <div className="col-md-6">
                    Additionally, due to the complexity of the infrastructure I have deployed, this setup allowed me to stretch my capabilities 
                    to infiltrate networks isolated from the Internet via pivoting from the LAN zone to the Datacenter zone.
                </div>
            </div>
        </>
     );
}
 
export default EH;