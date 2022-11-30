import Icon from '@mdi/react';

const SocialsTab = ({icon, link, title}) => {
    const style = {
        "backgroundColor": "rgba(0, 0, 0, .75)"
    }

    return ( 
        <li className="nav-item" style={style}>
            <a className="nav-link text-white" target="_blank" rel="noreferrer" href={link} >
                <Icon path={icon} title={title} size={1}/>
            </a>
        </li>
     );
}
 
export default SocialsTab;