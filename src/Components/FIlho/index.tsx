import { useState } from "react"

type Props = {
    texto: String
    onClickFN:(resposta: string) => void
}

function Filho(param: Props) {

    const [nome, setNome] = useState('');
    function modificarInput (evento: React.ChangeEvent<HTMLInputElement>) {
        setNome(evento.target.value);
    }

    function HandleClickBotao (){
        param.onClickFN(nome)
    }

    return (
        <div>
           <hr />
           Componente Filho.
           <br />
           O valor do parâmento é: {param.texto}
           <br />
           <input type="text" onChange={modificarInput}/>
           <button onClick={HandleClickBotao}>Cliqui aqui</button>
           <hr />
        </div>
    )
}

export default Filho