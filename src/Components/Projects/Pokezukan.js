import { mdiDownload, mdiGithub, mdiStore } from '@mdi/js';
import logo from '../../Assets/projects/pokezukan/pokezukan.png'
import ImageGallery from '../ImageGallery/ImageGallery';
import Icon from '@mdi/react';

const Pokezukan = () => {

    const moreDetails = [
        {
            "name": "Amazon Appstore",
            "link": "https://www.amazon.com/gp/product/B09GJGY1L3",
            "icon": mdiStore
        },
        {
            "name": "GitHub",
            "link": "https://github.com/glennkok1501/PokeZukan-MobileApp",
            "icon": mdiGithub
        },
        {
            "name": "Download",
            "link": "https://github.com/glennkok1501/PokeZukan-MobileApp/raw/main/app/release/app-release.apk",
            "icon": mdiDownload
        },
    ]
    return ( 
        <>
            <div className="row align-items-center">
                <div className="col-5">
                    <img className='rounded img-fluid' src={logo} alt="logo"/>
                </div>
                <div className='col-7'>
                    <h5>
                    Simple and easy to use encyclopedia for Pokémon.
                    </h5>
                    <p className='d-none d-md-block'>
                    PokeZukan is an unofficial app that offers a free and minimalistic Pokédex.
                    It is especially catered for beginners starting the Pokémon game with the basic information needed to progress their journey.
                    Network connection is needed as data is retrieved from <a href="https://github.com/glennkok1501/PokeZukanAPI" rel="noopener noreferrer" target='_blank'>PokeZukanAPI</a>.
                    </p>
                </div>
            </div>
            <p className='mt-2 d-lg-none'>
            PokeZukan is an unofficial app that offers a free and minimalistic Pokédex.
            It is especially catered for beginners starting the Pokémon game with the basic information needed to progress their journey.
            Network connection is needed as data is retrieved from <a href="https://github.com/glennkok1501/PokeZukanAPI" rel="noopener noreferrer" target='_blank'>PokeZukanAPI</a>.
            </p>
            <h5 className="mt-2">DISCLAIMER</h5>
            <p>PokeZukan is an unofficial, free fan made app and is not affiliated, endorsed or supported by Nintendo, GAME FREAK or The Pokémon Company in any way. Some images used in this app are copyrighted and are supported under fair use. Arts, visuals, names, Pokémon and Pokémon names are properties of the companies mentioned previously.
            No copyright or trademark infringement is intended.
            © 2021 Pokémon.
            © 1995–2021 Nintendo/Creatures Inc./GAME FREAK inc.</p>

            <h5 className="mt-3">Features</h5>
            <ul>
                <li>View Pokémon entries such as stats, location, and moves</li>
                <li>Learn about the different Abilities each Pokémon has</li>
                <li>Study a variety of moves used in the Pokémon world</li>
            </ul>

            <b>Find out more below:</b>
            <div className='d-flex justify-content-around'>
                {
                    moreDetails.map((i) => (
                        <a key={i.name} className='btn text-white' target="_blank" rel="noreferrer" href={i.link}>
                            <Icon className='text-white' path={i.icon} size={1} /> {i.name}
                        </a>
                    ))
                }
                
            </div>

            <ImageGallery images={[
                "https://raw.githubusercontent.com/glennkok1501/PokeZukan-MobileApp/main/images/1.jpg",
                "https://raw.githubusercontent.com/glennkok1501/PokeZukan-MobileApp/main/images/2.jpg",
                "https://raw.githubusercontent.com/glennkok1501/PokeZukan-MobileApp/main/images/3.jpg",
                "https://raw.githubusercontent.com/glennkok1501/PokeZukan-MobileApp/main/images/4.jpg",
                "https://raw.githubusercontent.com/glennkok1501/PokeZukan-MobileApp/main/images/5.jpg",
                "https://raw.githubusercontent.com/glennkok1501/PokeZukan-MobileApp/main/images/6.jpg",
                "https://raw.githubusercontent.com/glennkok1501/PokeZukan-MobileApp/main/images/7.jpg",
                "https://raw.githubusercontent.com/glennkok1501/PokeZukan-MobileApp/main/images/8.jpg",
                ]} />

        </>
        

     );
}
 
export default Pokezukan;