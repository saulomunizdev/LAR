import { useState } from "react";
import style from './../Style/saulo.module.css';

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

        <div className={style.divPaiForAjuda}>
            <h1>FORMULÁRIO DE AJUDA</h1>
            <h2 className={style.formH2}>Informe todas as informações abaixo </h2>
            <div className={style.FormAjuda}>
                <p className={style.FormParagrafo}>Nome</p>
                <input className={style.FormInput} onChange={modificarNome} type="text" placeholder="Digite seu nome" /> 
                <p className={style.FormParagrafo}>Telefone</p>
                <input className={style.FormInput} onChange={modificarTelefone} type="text" placeholder="Digite seu telefone" /> 
                <p className={style.FormParagrafo}>Email</p>
                <input className={style.FormInput} onChange={modificarEmail} type="text" placeholder="Digite seu e-mail" /> 
                <p className={style.FormParagrafo}>Assunto</p>
                <input className={style.FormInput}  onChange={modificarAssunto} type="text" placeholder="Digite a doença" /> 
                <p className={style.FormParagrafo}>Cidade</p>
                <input className={style.FormInput}  onChange={modificarCidade} type="text" placeholder="Digite o nome da sua cidade" /> 
                <p className={style.FormParagrafo}>Estado</p>
                <input className={style.FormInput}  onChange={modificarEstado} type="text" placeholder="Digite o nome do seu estado" /> 
                <p className={style.FormParagrafo}>O que você sente?</p>

                <input type="checkbox" /> Tremor <br />
                <input type="checkbox" /> Cansaço <br />
                <input type="checkbox" /> Desanimo <br />
                <input type="checkbox" /> Falta de ar <br />
                <input type="checkbox" /> Agonia <br />
                <input type="checkbox" /> Falta de foco <br />
                <input type="checkbox" /> Alteração de humor <br />
                <input type="checkbox" /> Sensação de desconexão <br />
                <input type="checkbox" /> Preocupação com peso <br /><br />

                <button className={style.btoFormAjuda} >Enviar</button>
                <button className={style.btoFormAjuda}>Limpar</button>
                <br />
            </div>
        </div>
    )
}

export default FormQueroAjuda;