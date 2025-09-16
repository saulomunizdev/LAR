import { useState } from "react";


function FormAjuda () {

    const [nome, setNome] = useState('');
    function doacaoNome (evento: React.ChangeEvent <HTMLInputElement>) {
        setNome(evento.target.value);
    }

    const [sobrenome, setSobrenome] = useState('');
    function doacaoSobrenome (evento: React.ChangeEvent <HTMLInputElement>) {
        setSobrenome(evento.target.value);
    }

    const [telefone, setTelefone] = useState('');
    function doacaoTelefone (evento: React.ChangeEvent <HTMLInputElement>) {
        setTelefone(evento.target.value);
    }

    const [email, setEmail] = useState('');
    function doacaoEmail (evento: React.ChangeEvent <HTMLInputElement>) {
        setEmail(evento.target.value);
    }
   
    const [valor, setValor] = useState('');
    function doacaoValor (evento: React.ChangeEvent <HTMLInputElement>) {
        setEmail(evento.target.value);
    }

    const [valorSelecionado, setValorSelecionado] = useState('');
    const opcoes = ['Opção 1', 'Opção 2', 'Opção 3'];

    const handleChange = (event) => {
    setValorSelecionado(event.target.value);
    };


    return(
        <div>
            Nome Completo: <br />
            <input className="FormInput" onChange={doacaoNome} type="text" placeholder="Nome " /> 
            <input className="FormInput" onChange={doacaoSobrenome} type="text" placeholder="Sobrenome" /> 
            <br /><br />
            Telefone: <br />
            <input className="FormInput" onChange={doacaoTelefone} type="text" placeholder="Celular" /> 
            <br /><br />
            Email: <br />
            <input className="FormInput" onChange={doacaoEmail} type="text" placeholder="E-mail" /> 
            <br /><br />
             Instituição que quer ajudar: <br />
                      
            <select value={valorSelecionado} onChange={handleChange}>
                <option value="">Selecione uma opção</option>
                {opcoes.map((opcao, index) => (
                    <option key={index} value={opcao}>
                    {opcao}
                    </option>
                ))}
            </select>
            <br /><br />
            Valor: <br />
            <input className="FormInput" onChange={doacaoValor} type="text" placeholder="Valor" /> 
            <br /><br />
            <button>Enviar</button>
        </div>
    )
}

export default FormAjuda;