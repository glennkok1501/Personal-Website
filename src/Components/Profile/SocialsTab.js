import Icon from '@mdi/react';

const SocialsTab = ({icon, link, title}) => {

    return ( 
        <li className="nav-item bg-dark">
            <a className="nav-link text-white" target="_blank" rel="noreferrer" href={link} >
                <Icon path={icon} title={title} size={1}/>
            </a>
        </li>
     );
}
 
export default SocialsTab;