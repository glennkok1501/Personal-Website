const Tab = ({name, section}) => {
    return ( 
        <li className="nav-item p-2 px-4 btn">
            <a className="text-decoration-none text-dark" href={`#${section}`}>{name}</a>
        </li>
     );
}
 
export default Tab;