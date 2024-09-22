import { mdiFile } from "@mdi/js";
import Icon from "@mdi/react";

const ReportViewer = ({file}) => {
    return ( 
        <div className="text-center">
            <a className="nav-link text-white" href={file} target="_blank" rel="noreferrer">
                    <Icon path={mdiFile} title="Report" size={1}/> View Report
            </a>
        </div>
     );
}
 
export default ReportViewer;