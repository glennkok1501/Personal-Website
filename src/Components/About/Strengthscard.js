import Icon from "@mdi/react";

const Strengthscard = ({title, icon, height}) => {
    return ( 
        <div className="col">
            <div className="card text-center shadow m-3 text-dark" style={{"height": `${height}px`}}>
                <div className="m-3">
                    <Icon className="mx-auto" path={icon} size={3} />
                    <div className="text-muted mt-2">
                        {title}
                    </div>
                </div>
                
            </div>
        </div>
        
     );
}
 
export default Strengthscard;