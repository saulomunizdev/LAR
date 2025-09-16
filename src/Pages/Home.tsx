import Cabecalho from '../Components/Cabecalho';
import Rodape from '../Components/Rodape';
import '../Style/style.css'
// import { Link } from 'react-router-dom';


function Home () {
    return(
        <div>
            <Cabecalho />
            <h1>Empresa</h1>
            <p>A empresa, quer ajudar as instituições e ao publico!</p>

            <Rodape />
        </div>
    )
}

export default Home;