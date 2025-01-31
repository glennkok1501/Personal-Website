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
                        August 2025 - Current
                        <br/>
                        <b>Nanyang Technological University</b>
                        <br/>
                        <ul className='text-muted'>
                            <li><p className='m-0'>Bachelor of Computing (Hons) in Computer Science</p></li>
                        </ul>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        April 2020 - March 2023
                        <br/>
                        <b>Ngee Ann Polytechnic</b>
                        <br/>
                        <ul className='text-muted'>
                            <li><p className='m-0'>Diploma with Merit in Cybersecurity & Digital Forensics</p></li>
                            <li><p className='m-0'>CSA Prize for Most Outstanding Performance</p></li>
                            <li><p className='m-0'>Cumulative GPA 4.0</p></li>
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
                            <li><p className='m-0'>Higher Nitec in Cyber and Network Security</p></li>
                            <li><p className='m-0'>Certificate of Merit</p></li>
                            <li><p className='m-0'>Graduated with GPA 3.931</p></li>
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
                            <li><p className='m-0'>GCE N(A)-Level Certificate</p></li>
                        </ul>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
     );
}
 
export default Education;