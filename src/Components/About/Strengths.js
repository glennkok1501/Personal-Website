import { 
    mdiHeadDotsHorizontalOutline,
    mdiOrderBoolAscendingVariant,
    mdiAccountVoice,
    mdiLightbulbOn10,
    mdiSchoolOutline 
} from '@mdi/js';
import Strengthscard from './Strengthscard';

const Strengths = () => {
    return ( 
        <div className="row">
            <Strengthscard title="Critical Thinking" icon={mdiHeadDotsHorizontalOutline}/>
            <Strengthscard title="Detail-oriented" icon={mdiOrderBoolAscendingVariant}/>
            <Strengthscard title="Communication" icon={mdiAccountVoice}/>
            <Strengthscard title="Problem-solving" icon={mdiLightbulbOn10}/>
            <Strengthscard title="Adaptive Learner" icon={mdiSchoolOutline}/>

        </div>
     );
}
 
export default Strengths;