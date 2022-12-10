import img from '../../Assets/projects/ns/ns_1.jpg'
import ImgView from './ImgView';

const Suricata = () => {
    return ( 
        <div className="row">
            <div className="col-md-3">
                <ImgView img={img} />
            </div>
            <div className='col-md-9'>
                <p>
                    Accomplishing this project was no easy feat. Since this was my first time installing and configuring an Intrusion Detection System (IDS).
                    After extensive research, I deployed my IDS using Suricata since being a powerful, versatile, and open-source threat detection engine.
                    <br />
                    Beyond that, I took the opportunity to enhance this project by integrating an interface for logs monitoring. With that, 
                    it also gave me the chance to explore and understand of integration process between FileBeats, Logstash, Elasticsearch, and Kibana.
                    <br />
                    Rule creation and testing was also an interesting component I have picked up along with rules created by the open-source community. 
                    With the usage of Emerging Threat rules, I have tested Suricata extensively with several attack scenarios with includes:
                </p>
                
                <ul>
                    <li>Reconnaissance - Port Scanning</li>
                    <li>SMB Eternal Blue Exploit</li>
                    <li>VSFTP Backdoor Exploit</li>
                    <li>Hydra Bruteforce</li>
                </ul>
            </div>
        </div>
     );
}
 
export default Suricata;