const Tab = ({name, section}) => {
    return ( 
        <li className="nav-item p-2 px-4 btn">
            <a className="nav-tab text-decoration-none text-white" href={`#${section}`}>{name}</a>
        </li>
     );
}
 
export default Tab;