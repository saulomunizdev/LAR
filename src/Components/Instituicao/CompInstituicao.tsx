import '../../Style/style.css'

type Prop = {
    titulo?: String;
    nome?: String;
    telefone?: String;
}

function CompInstituicao (parametros: Prop){
    return (
        <div className='divInst'>
            <div className="instCard">
                <br /><br />
                Tipo de Instituicao: {parametros.titulo}
                <br />
                Nome Instituição: {parametros.nome}
                <br />
                Telefone: {parametros.telefone}
                <br />
                <button>Ajudar</button>
                <button>Preciso de Ajuda</button>
                
            </div>
        </div>
    )
}

export default CompInstituicao;