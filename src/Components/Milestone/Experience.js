import Timeline from '@mui/lab/Timeline'
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Experience = () => {
    return ( 
        <div className='d-flex'>
            <Timeline sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
                },
            }}>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        12 September 2022 - 27 January 2023
                        <br/>
                        <b>Security Research Intern / Centre for Strategic Infocomm Technologies (CSIT)</b>
                        <br/>
                        <p className='text-muted'>
                            My tasks includes documenting and studying the underlying workings of Kubernetes communication 
                            as well as to investigate existing and potential security vulnerabilities involving the networking process.
                        </p>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>
                        30 September 2019 - 14 February 2020
                        <br/>
                        <b>Intern / Cyber Test Systems</b>
                        <br/>
                        <p className='text-muted'>
                            Building Cyber Ranges was a thrilling experience for me as I got to
                            learn how a system that simulates real world attacks was constructed
                            by working on many hands-on projects and configuring various
                            hardware appliances.
                        </p>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
     );
}
 
export default Experience;