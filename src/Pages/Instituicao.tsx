import Cabecalho from "../Components/Cabecalho";
import CompInstituicao from "../Components/Instituicao/CompInstituicao";
import Rodape from "../Components/Rodape";

function Instituicao (){
    return (
        <div>
            <Cabecalho />
            <CompInstituicao nome="LALALALALA" titulo='teste01' telefone= '(31)98745-4546' />
            <CompInstituicao nome="LULULULU" titulo='teste02' telefone= '(14)99788-5944'/>
            <CompInstituicao nome = 'LILILILI' titulo = 'teste03' telefone = '(11)1111-1111' />
            <Rodape />
        </div>
    )
}

export default Instituicao;