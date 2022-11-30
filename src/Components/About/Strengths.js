import { 
    mdiHeadDotsHorizontalOutline,
    mdiOrderBoolAscendingVariant,
    mdiAccountVoice,
    mdiLightbulbOn10,
    mdiSchoolOutline 
} from '@mdi/js';
import Strengthscard from './Strengthscard';


const Strengths = () => {
    
    const HEIGHT = 150

    return ( 
        <div className="row">
            <Strengthscard title="Critical Thinking" icon={mdiHeadDotsHorizontalOutline} height={HEIGHT}/>
            <Strengthscard title="Detail-oriented" icon={mdiOrderBoolAscendingVariant} height={HEIGHT}/>
            <Strengthscard title="Communication" icon={mdiAccountVoice} height={HEIGHT}/>
            <Strengthscard title="Problem-solving" icon={mdiLightbulbOn10} height={HEIGHT}/>
            <Strengthscard title="Adaptive Learner" icon={mdiSchoolOutline} height={HEIGHT}/>

        </div>
     );
}
 
export default Strengths;