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
import { Modal, ModalBody, ModalTitle } from "react-bootstrap";
import { useState } from "react";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";


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

    const [show, setShow] = useState(false)
    const [proj, setProj] = useState(projs[0])

    const renderProj = (proj) => {
        switch (proj.title) {
            case projs[1].title:
                return <Captsone />
            case projs[2].title:
                return <EH />
            case projs[3].title:
                return <Suricata />
            case projs[4].title:
                return <FirewallConfig />
            case projs[5].title:
                return <DF />
            case projs[6].title:
                return <MATT />
            case projs[7].title:
                return <Spendid />
            case projs[8].title:
                return <CAT />
            case projs[9].title:
                return <Chimera />
            default:
                return <KubeBgpHijack />
        }
    }

    return ( 
        <>
            <h1>Featured Projects</h1>

            <div className="d-flex"  style={{"overflowY": "auto"}}>
                {
                    projs.map(proj => (
                        <div className="m-3" key={proj["title"]}>
                            <ProjectPreview proj={proj} setShow={setShow} setProj={setProj}/>
                        </div>
                    ))
                }
            </div>

            <Modal size="lg" centered show={show} fullscreen="md-down" onHide={() => setShow(false)}>
                <ModalTitle className="bg-dark p-3">
                    <div className="d-flex align-items-center">
                        <h2 className="me-auto">
                            {proj.title}
                        </h2>
                        <div className="btn" onClick={() => setShow(false)}>
                            <Icon className="align-middle text-white" path={mdiClose} size={1.5} />
                        </div>
                    </div>
                </ModalTitle>
                <ModalBody className="bg-dark p-3">
                    {/* <ProjectBody proj={proj} /> */}
                    {renderProj(proj)}
                </ModalBody>
            </Modal>
        </>
        
     );
}
 
export default Projects;