import Cabecalho from '../Components/Cabecalho';
import Rodape from '../Components/Rodape';
import '../Style/style.css'
import style from '../Style/jean.module.css'


function Home () {
    return(
        <div>
            <Cabecalho />
            <h1>Empresa</h1>
            <p>A empresa, quer ajudar as instituições e ao publico!</p>
            

            <div className={style.containerModal}>
                <h1>Entendendo o que você está sentindo</h1>

            </div>

            <Rodape />
        </div>
    )
}

export default Home;