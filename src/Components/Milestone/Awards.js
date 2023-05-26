import Strengthscard from "../About/Strengthscard";
import { 
    mdiAccountSchoolOutline,
    mdiCertificateOutline,
    mdiMedal
 } from '@mdi/js';

const Awards = () => {
    const HEIGHT = 180
    return ( 
        <div className="row">
            <Strengthscard title="CSIT Diploma Scholarship" icon={mdiAccountSchoolOutline} height={HEIGHT}/>
            <Strengthscard title="10+ Academic Awards" icon={mdiMedal} height={HEIGHT}/>
            <Strengthscard title="Graduated with Merit" icon={mdiCertificateOutline} height={HEIGHT}/>
        </div>
     );
}
 
export default Awards;