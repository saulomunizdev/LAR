import style from './../Style/saulo.module.css';
import ilustracao from './../images/Formulario.jpg';


function FormQueroAjuda() {

  return (
    <div className={style.divFormGeral}>
      <div className={style.divLateral}>
        <h1>Olá!</h1>
        <hr />
        <p>Estamos felizes por você estar dando esse grande passo.</p>
        <p>Calma, tudo vai melhorar só precisamos que você responda o formulário para entendermos melhor como podemos te ajudar.</p>
        <p>Em casos de emergência para assuntos psicológicos ligue para <strong>188</strong> ou <strong>190</strong>.</p>
        <p>Em casos de emergência para abusos ligue para <strong>188</strong> ou <strong>190</strong>.</p>
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
              <label>Assunto</label>
              <input type="text" placeholder="Digite a doença" />
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
            <p><strong>O que você sente?</strong></p>
            <div className={style.checkboxColunas}>
              <div>
                <label><input type="checkbox" /> Tremor</label>
                <label><input type="checkbox" /> Cansaço</label>
                <label><input type="checkbox" /> Desânimo</label>
                <label><input type="checkbox" /> Falta de ar</label>
                <label><input type="checkbox" /> Agonia</label>
                <label><input type="checkbox" /> Falta de foco</label>
                <label><input type="checkbox" /> Alteração de humor</label>
                <label><input type="checkbox" /> Sensação de desconexão</label>
                <label><input type="checkbox" /> Preocupação com peso</label>
              </div>
              <div>
                <label><input type="checkbox" /> Perda de interesse</label>
                <label><input type="checkbox" /> Sofri abuso psicológico</label>
                <label><input type="checkbox" /> Sofri abuso físico</label>
                <label><input type="checkbox" /> Sofri abuso sexual</label>
                <label><input type="checkbox" /> Sofri abuso patrimonial</label>
                <label><input type="checkbox" /> Sofri abuso moral</label>
              </div>
            </div>
          </div>
        </form>
        <div>
            <button>Enviar</button>
        </div>
        <img src={ilustracao} alt="Ilustração" className={style.ilustracaoDireita} />
      </div>
    </div>
  );
}
export default FormQueroAjuda;


