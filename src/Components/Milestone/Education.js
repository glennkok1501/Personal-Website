import Timeline from '@mui/lab/Timeline'
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Education = () => {
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
                        April 2020 - Present
                        <br/>
                        <b>Ngee Ann Polytechnic</b>
                        <br/>
                        <ul className='text-muted'>
                            <li>Diploma in Cybersecurity & Digital Forensics</li>
                            <li>Cumulative GPA 4.0</li>
                            <li>Expected to graduate in 2023</li>
                        </ul>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        April 2018 - March 2020
                        <br/>
                        <b>Institute of Technical Education</b>
                        <br/>
                        <ul className='text-muted'>
                            <li>Higher Nitec in Cyber and Network Security</li>
                            <li>Certificate of Merit</li>
                            <li>Graduated with GPA 3.931</li>
                        </ul>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>
                        January 2014 - December 2017
                        <br/>
                        <b>Jurong Secondary School</b>
                        <br/>
                        <ul className='text-muted'>
                            <li>GCE N(A)-Level Certificate</li>
                        </ul>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
     );
}
 
export default Education;