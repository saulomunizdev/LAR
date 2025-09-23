import Cabecalho from "../Components/Cabecalho";
import Rodape from "../Components/Rodape";
import { useState } from "react";
import style from "../Style/jean.module.css";
import { Link } from "react-router-dom";

function Login() {
  const [login, setLogin] = useState("Login");

  return (
    <div className={style.containerLogin}>
      <Cabecalho />

      <div className={style.loginGeral}>
        <div className={style.loginCard}>
          <div className={style.bemVindo}>
            <p>BEM-VINDO</p>
            <span>Estamos aqui para te apoiar.</span>
          </div>
          <div className={style.form}>
            <div className={style.formDiv}>
              {login === "Login" ? (
                <></>
              ) : (
                <div className={style.email}>
                  <label>Nome:</label>{" "}
                  <input
                    className={style.divInput}
                    type="text"
                    placeholder="Digite seu nome"
                  />
                </div>
              )}

              <div className={style.email}>
                <label>E-mail:</label>{" "}
                <input
                  className={style.divInput}
                  type="email"
                  placeholder="Digite seu email"
                />
              </div>
              <div className={style.email}>
                <label>Senha:</label>{" "}
                <input
                  className={style.divInput}
                  type="password"
                  placeholder="Digite sua senha"
                />
              </div>
            </div>
            <div className={style.esqueciSenha}>
              <Link to={"/esqueci-senha"} className={style.botaoCadastro}>
                Esqueci a senha
              </Link>
            </div>
          </div>

          <div className={style.containerCadastreSe}>
            <button>{login === "Login" ? "Entrar" : "Cadastrar"}</button>
          </div>

          {login === "Login" ? (
            <div className={style.cadastreSe}>
              <p>Não tem uma conta? </p>{" "}
              <span
                onClick={() => setLogin("Cadastre-se")}
                className={style.botaoCadastro}
              >
                Cadastre-se
              </span>
            </div>
          ) : (
            <div className={style.cadastreSe}>
              <p> Já tenho uma conta. </p>{" "}
              <span
                onClick={() => setLogin("Login")}
                className={style.botaoCadastro}
              >
                Login
              </span>
            </div>
          )}
        </div>
      </div>
      <Rodape />
    </div>
  );
}

export default Login;
