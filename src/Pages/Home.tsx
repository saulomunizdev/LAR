import MenuCards from '../Components/MenuCards'
import Rodape from '../Components/Rodape';
import '../Style/style.css'
import HomeInicio from '../Components/hero';
import TiposAbusos from '../Components/tiposAbusos';
import PerguntasFrequentes from '../Components/perguntasFrequentes';
import CabecalhoHome from '../Components/CabecalhoHome';


function Home () {
    return(
        <div>
            <CabecalhoHome/>
            
            <HomeInicio/>
            
            <MenuCards/>

            <TiposAbusos/>

           <PerguntasFrequentes/>

            <Rodape />
        </div>
    )
}

export default Home;