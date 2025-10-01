import { useState } from "react";
import style from './../Style/saulo.module.css';
import ilustracao from './../images/Formulario.jpg';


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
    <div className={style.divFormGeral}>
      <div className={style.divLateral}>
        <h1>Olá!</h1>
        <hr />
        <p>Estamos felizes por você estar dando esse grande passo.</p>
        <p>Calma, tudo vai melhorar só precisamos que você responda o formulário para entendermos melhor como podemos te ajudar.</p>
        <p>Em casos de emergência para assuntos psicológicos ligue para <strong>188</strong> ou <strong>190</strong>.</p>
        <p>Em casos de emergência para abusos ligue para <strong>188</strong> ou <strong>190</strong>.</p>
      </div>
      <div className={style.divFormBto}>
        <button className={style.divBto}>Login</button>
        <button className={style.divBto}>Preciso de ajuda</button>
      </div>
      <div className={style.divConteudo}>
        <form className={style.formAjuda}>
          <div className={style.linhaInputs}>
            <div>
              <label>Nome</label>
              <input type="text" placeholder="Digite seu nome" />
            </div>
          </div>
          <div className={style.linhaInputs}>
            <div>
              <label>Telefone</label>
              <input type="text" placeholder="Digite seu telefone" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" placeholder="Digite seu Email" />
            </div>
          </div>
          <div className={style.linhaInputs}>
            <div>
              <label>Instituição</label>
              <input type="text" placeholder="Qual Instituição" />
            </div>
          </div>
          <div className={style.linhaInputs}>
            <div>
              <label>Valor</label>
              <input type="text" placeholder="Digite o valor que deseja ajudar" />
            </div>
          </div>
          <div className={style.linhaInputs}>
            <div>
              <label>Cidade</label>
              <input type="text" placeholder="Digite o nome da sua cidade" />
            </div>
            <div>
              <label>Estado</label>
              <input type="text" placeholder="Digite o nome do seu estado" />
            </div>
          </div>
          <div className={style.checkboxGrupo}>
            <p><strong>O que você sente?</strong></p><br />
            
          </div>
        </form>
        <div>
            <button className={style.botaoEnviar}>Enviar</button>
        </div>
        <img src={ilustracao} alt="Ilustração" className={style.ilustracaoDireita} />
      </div>
    </div>
  );
}

export default FormAjuda;