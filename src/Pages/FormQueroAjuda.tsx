import { useState } from "react";

function FormQueroAjuda () {


    const [nome, setNome] = useState('');
    function modificarNome (evento: React.ChangeEvent <HTMLInputElement>) {
        setNome(evento.target.value);
    }


    const [telefone, setTelefone] = useState('');
    function modificarTelefone (evento: React.ChangeEvent <HTMLInputElement>) {
        setTelefone(evento.target.value);
    }


    const [email, setEmail] = useState('');
    function modificarEmail (evento: React.ChangeEvent <HTMLInputElement>) {
        setEmail(evento.target.value);
    }

    const [assunto, setAssunto] = useState('');
    function modificarAssunto (evento: React.ChangeEvent <HTMLInputElement>) {
        setAssunto(evento.target.value);
    }

    const [cidade, setCidade] = useState('');
    function modificarCidade (evento: React.ChangeEvent <HTMLInputElement>) {
        setCidade(evento.target.value);
    }

    const [estado, setEstado] = useState('');
    function modificarEstado (evento: React.ChangeEvent <HTMLInputElement>) {
        setEstado(evento.target.value);
    }




    

  

    

    



    return(

        <div className="divPaiForAjuda">
            <h1>FORMULÁRIO DE AJUDA</h1>
            <h2 className="formH2">Informe todas as informações abaixo </h2>
            <div className="FormAjuda">
                <p className="FormParagrafo">Nome</p>
                <input className="FormInput" onChange={modificarNome} type="text" placeholder="Digite seu nome" /> 
                {/* <br />Instituição: {nome} <br /><br /> */}
                <hr className="ForHr"/>
                <p className="FormParagrafo">Telefone</p>
                <input className="FormInput" onChange={modificarTelefone} type="text" placeholder="Digite seu telefone" /> 
                {/* <br />Ajuda: {ajuda} <br /><br /> */}
                <hr className="ForHr" />
                <p className="FormParagrafo">Email</p>
                <input className="FormInput" onChange={modificarEmail} type="text" placeholder="Digite seu e-mail" /> 
                {/* <br /> Nome: {nome} <br /><br /> */}
                <hr className="ForHr" />
                <p className="FormParagrafo">Assunto</p>
                <input className="FormInput"  onChange={modificarAssunto} type="text" placeholder="Digite a doença" /> 
                {/* <br /> Telefone: {telefone} <br /><br /> */}
                <hr className="ForHr"/>
                <p className="FormParagrafo">Email</p>
                <input className="FormInput"  onChange={modificarEmail} type="text" placeholder="Digite seu email" /> 
                {/* <br /> Email: {email} <br /><br />  */}
                <button className="btoFormAjuda" >Enviar</button>
                <button className="btoFormAjuda">Limpar</button>
                <br />
            </div>
        </div>
    )
}

export default FormQueroAjuda;