import { useContext } from 'react';
import Cabecalho from '../Components/Cabecalho';
import Rodape from '../Components/Rodape';
import '../Style/style.css'
import style from '../Style/jean.module.css'
import { UsuarioLogadoContext } from '../contexts/contextAuth';
import CabecalhoHome from '../Components/CabecalhoHome';
import HomeInicio from '../Components/hero';
import MenuCards from '../Components/MenuCards';
import PerguntasFrequentes from '../Components/perguntasFrequentes';
import RodapeHome from '../Components/RodapeHome';
import TiposAbusos from '../Components/tiposAbusos';


function Home () {

    const UsuarioCtx = useContext(UsuarioLogadoContext);

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