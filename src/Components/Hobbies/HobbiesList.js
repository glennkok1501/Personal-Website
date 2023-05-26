import img4 from '../../Assets/hobbies-5.jpg'

const HobbiesList = () => {

    return ( 
        <>
            <ul>
                <li className="pb-2">Playing team sports especially Floorball</li>
                <li className="pb-2">Going out with my friends during weekends or holidays</li>
                <li className="pb-2">Listening to Music (KPOP)</li>
                <li className="pb-2">Playing online video games</li>
                <li>Watching variety shows and kdramas</li>
            </ul>

            <div className='text-center'>
                <img className='rounded' style={{"width": "100%"}} src={img4} alt='img4' />
            </div>
        </>
       
     );
}
 
export default HobbiesList;