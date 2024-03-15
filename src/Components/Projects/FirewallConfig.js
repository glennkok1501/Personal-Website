import img from '../../Assets/projects/ns/ns_2.png'
import ImgView from '../ImageGallery/ImgView';

const FirewallConfig = () => {
    return ( 
        <>
            <ImgView img={img} />
            <div className='mt-3'>
                <p>
                    The diagram depicts the network diagram of this project. There will be two remote sites being Singapore and Kuala Lumpur (KL). 
                    A Palo Alto Firewall will be deployed in each site with a LAN zone for staff and employees to connect to the internal network. 
                    However, the Singapore site will have an additional Demilitarized (DMZ) zone for external and internal access where an FTP server will be deployed. 
                    Users from the LAN and Internet will be able to access resources on the FTP server in the DMZ zone.
                    Moreover, several policies were implemented on the firewall to enhance the security of the organization.
                    Lastly, both firewalls will be connected to the Internet and a secure LAN-to-LAN Virtual Private Network will be configured using an IPSec tunnel between Singapore office and KL office.
                </p>
            </div>
            <div className='table-responsive'>
                    <table className='table text-white'>
                        <thead className='thead-dark'>
                            <tr>
                                <th scrol="col">Source</th>
                                <th scrol="col">Destination</th>
                                <th scrol="col">Applications</th>
                                <th scrol="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>LAN</td>
                                <td>Internet</td>
                                <td>
                                    <ul>
                                        <li>Web browsing (http & https)</li>
                                        <li>Facebook base only</li>
                                        <li>Banking websites: ocbc.com.sg and uob.com.sg</li>
                                    </ul>
                                </td>
                                <td>Allow</td>
                            </tr>
                            <tr>
                                <td>LAN</td>
                                <td>DMZ</td>
                                <td>File Transfer</td>
                                <td>Allow</td>
                            </tr>
                            <tr>
                                <td>DMZ</td>
                                <td>LAN</td>
                                <td>File Transfer</td>
                                <td>Allow</td>
                            </tr>
                            <tr>
                                <td>DMZ</td>
                                <td>Internet</td>
                                <td>All</td>
                                <td>Allow</td>
                            </tr>
                            <tr>
                                <td>Internet</td>
                                <td>DMZ</td>
                                <td>File Transfer</td>
                                <td>Allow</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </>
        
     );
}
 
export default FirewallConfig;