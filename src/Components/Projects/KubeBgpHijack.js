import diagram from '../../Assets/projects/kubebgphijack/Picture1.png'
import demo from '../../Assets/projects/kubebgphijack/Kubernetes BGP Hijacking.mp4'
const KubeBgpHijack = () => {
    return ( 
        <>
            <div className='text-center'>
                <video className='rounded p-3 bg-white' width="100%" height="auto" controls poster={diagram}>
                    <source src={demo} type="video/mp4" />
                </video>
            </div>

            <div className='mt-3'>
                <p>
                    One of Calico network plugin key components is the BIRD routing daemon. 
                    BIRD is an Internet routing daemon that is responsible for interacting with the Linux kernel 
                    routing data and distributing it to BGP peers on the network. By abusing this protocol,
                    traffic destined to a pod on a node can be redirected after BGP session hijacking is carried out 
                    by injecting malicious routes into the node routing table.
                </p>
            </div>
            

            
        </>
     );
}
 
export default KubeBgpHijack;