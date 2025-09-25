import MenuCards from '../Components/MenuCards'
import '../Style/style.css'
import HomeInicio from '../Components/hero';
import TiposAbusos from '../Components/tiposAbusos';
import PerguntasFrequentes from '../Components/perguntasFrequentes';
import CabecalhoHome from '../Components/CabecalhoHome';
import RodapeHome from '../Components/RodapeHome';


function Home () {
    return(
        <div>
            <CabecalhoHome/>
            
            <HomeInicio/>
            
            <MenuCards/>

            <TiposAbusos/>

           <PerguntasFrequentes/>

           <RodapeHome/>

        </div>
    )
}

export default Home;