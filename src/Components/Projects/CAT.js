import ImgView from "../ImageGallery/ImgView";
import img from '../../Assets/projects/cat/img.jpg'

const CAT = () => {
    return ( 
        <>
            <ImgView img={img} />
            <div className="mt-3">
                    <p>
                    In AWS, I have created a virtual private cloud (VPC) with 2 private and 2 public subnets and 2 availability zones to provide high availability. 
                    In order for the VPC to connect to the internet, an Internet gateway was created and attached to the VPC. 
                    I have created 2 route tables, one for public route and one for private route. The public route will have a default route additionally added so that any traffic can go back out to the internet. 
                    Whereas for the private subnet, it will only have its own local address range as it is only meant for local network communication. 
                    This solution allows users to be notified whenever there is a file uploaded to the DynamoDB and S3 buckets and we are able to achieve this by using Lambda and simple notification service (SNS) along with setting up identity management access (IAM) roles and policies. 
                
                </p>
                
            </div>
        </>
     );
}
 
export default CAT;