import Captsone from "../Components/Projects/Capstone";
import CAT from "../Components/Projects/CAT";
import Chimera from "../Components/Projects/Chimera";
import DF from "../Components/Projects/DF";
import EH from "../Components/Projects/EH";
import FirewallConfig from "../Components/Projects/FirewallConfig";
import KubeBgpHijack from "../Components/Projects/KubeBgpHijack";
import MATT from "../Components/Projects/MATT";
import Spendid from "../Components/Projects/Spendid";
import Suricata from "../Components/Projects/Suricata";

const Projects = () => {
    return ( 
        <>
            <div className="mt-5">
                <h2 className="text-center">PROJECTS</h2>
            </div>

            <h3 className="mt-3">Kubernetes Border Gateway Protocol (BGP) Hijacking</h3>
            <KubeBgpHijack />

            <h3 className="mt-5">Social Media and Community Platform Application</h3>
            <Captsone />

            <h3 className="mt-5">Ethical Hacking Project</h3>
            <EH />

            <h3 className="mt-5">Suricata Intrusion Detection System + Logs Monitoring Interface</h3>
            <Suricata />

            <h3 className="mt-5">Firewall Deployment and Configuration</h3>
            <FirewallConfig />

            <h3 className="mt-5">Digital Forensics</h3>
            <DF />

            <h3 className="mt-5">Malware Analysis on Malicious Document</h3>
            <MATT />

            <h3 className="mt-5">Android Application - Spendid</h3>
            <Spendid />

            <h3 className="mt-5">Cloud Application Technologies - Amazon Web Services (AWS)</h3>
            <CAT />

            <h3 className="mt-5">Chimera Encryption</h3>
            <Chimera />
        </>
        
     );
}
 
export default Projects;