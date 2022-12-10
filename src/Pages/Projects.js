import Captsone from "../Components/Projects/Capstone";
import DF from "../Components/Projects/DF";
import EH from "../Components/Projects/EH";
import FirewallConfig from "../Components/Projects/FirewallConfig";
import Suricata from "../Components/Projects/Suricata";

const Projects = () => {
    return ( 
        <>
            <div className="mt-5">
                <h2 className="text-center">PROJECTS</h2>
            </div>

            <h3 className="mt-3">Social Media and Community Platform Application</h3>
            <Captsone />

            <h3 className="mt-5">Ethical Hacking Project</h3>
            <EH />

            <h3 className="mt-5">Suricata Intrusion Detection System + Logs Monitoring Interface</h3>
            <Suricata />

            <h3 className="mt-5">Firewall Deployment and Configuration</h3>
            <FirewallConfig />

            <h3 className="mt-5">Digital Forensics</h3>
            <DF />
        </>
        
     );
}
 
export default Projects;