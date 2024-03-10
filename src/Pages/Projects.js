import Captsone from "../Components/Projects/Capstone";
import CAT from "../Components/Projects/CAT";
import Chimera from "../Components/Projects/Chimera";
import DF from "../Components/Projects/DF";
import EH from "../Components/Projects/EH";
import FirewallConfig from "../Components/Projects/FirewallConfig";
import KubeBgpHijack from "../Components/Projects/KubeBgpHijack";
import MATT from "../Components/Projects/MATT";
import ProjectPreview from "../Components/Projects/ProjectPreview";
import Spendid from "../Components/Projects/Spendid";
import Suricata from "../Components/Projects/Suricata";

import proj1 from '../Assets/projects/kubebgphijack/Picture1.png'
import proj2 from '../Assets/projects/capstone/capstone.png'
import proj3 from '../Assets/projects/eh/eh_diagram.png'
import proj4 from '../Assets/projects/ns/ns_1.jpg'
import proj5 from '../Assets/projects/ns/ns_2.png'
import proj6 from '../Assets/projects/df/df.png'
import proj7 from '../Assets/projects/matt/matt.png'
import proj8 from '../Assets/projects/spendid/img_1.png'
import proj9 from '../Assets/projects/cat/img.jpg'
import proj10 from '../Assets/projects/ctg/ctg.jpg'


const Projects = () => {

    const projs = [
        {"image":proj1, "title":"Kube BGP Hijacking"},
        {"image":proj2, "title":"Social Media Web App"},
        {"image":proj3, "title":"Ethical Hacking Project"},
        {"image":proj4, "title":"Suricata IDS"},
        {"image":proj5, "title":"Firewall Deployment & Config"},
        {"image":proj6, "title":"Digital Forensics"},
        {"image":proj7, "title":"Malicious Doc Malware Analysis"},
        {"image":proj8, "title":"Finance Tracking Android App"},
        {"image":proj9, "title":"AWS Deployment"},
        {"image":proj10, "title":"Chimera Encryption"}
        
    ]

    return ( 
        <>
                <h1>Featured Projects</h1>

                <div className="d-flex"  style={{"overflowY": "auto"}}>
                    {
                        projs.map(proj => (
                            <div className="m-3" key={proj["title"]}>
                                <ProjectPreview image={proj["image"]} title={proj["title"]} />
                            </div>
                        ))
                    }
                </div>

            {/* <h3 className="mt-3">Kubernetes Border Gateway Protocol (BGP) Hijacking</h3>
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
            <Chimera /> */}
        </>
        
     );
}
 
export default Projects;