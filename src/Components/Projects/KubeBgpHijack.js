import diagram from '../../Assets/projects/kubebgphijack/Picture1.png'
import demo from '../../Assets/projects/kubebgphijack/Kubernetes BGP Hijacking.mp4'
const KubeBgpHijack = () => {
    return ( 
        <>
            <div className="row">
                <div className="col-md-6">
                    <p>
                    One of Calico network plugin key components is the BIRD routing daemon. 
                    BIRD is an Internet routing daemon that is responsible for interacting with the Linux kernel 
                    routing data and distributing it to BGP peers on the network. By abusing this protocol,
                    traffic destined to a pod on a node can be redirected after BGP session hijacking is carried out 
                    by injecting malicious routes into the node routing table.
                    </p>
                    <img className='img-fluid' src={diagram} alt="diagram"/>
                    
                </div>
                <div className="col-md-6">

                    <div className='text-center mt-3'>
                        <video className='rounded p-3' width="100%" height="auto" controls>
                            <source src={demo} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
            <div className='row'>
                
            </div>
        </>
     );
}
 
export default KubeBgpHijack;