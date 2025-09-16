import Cabecalho from "../Components/Cabecalho";
import Rodape from "../Components/Rodape";



function Cadastro () {
    return(
        <div>
            <Cabecalho />
                <div className="cadastro">
                    <h1>Cadastro</h1>  
                    <p>Faça seu cadastro para acessar sua conta!</p>
                    <p>Nome:</p> <input type="text" /> 
                    <p>Email:</p> <input type="text" />
                    <p>Senha:</p> <input type="password" />
                    <br /><br />
                    <button>Cadastrar</button>

                </div>
            <Rodape />
        </div>
    )
}

export default Cadastro;