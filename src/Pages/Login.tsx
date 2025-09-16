import Cabecalho from "../Components/Cabecalho";
import Rodape from "../Components/Rodape";



function Login () {
    return(
        <div className="loginGeral">
            <Cabecalho />
            <div className="login-card">
                <div className="login">
                    <h1>Login</h1>
                    <p>Faça seu login para acessar sua conta!</p>
                    <p>E-mail:</p> <input className="divInput" type="text" />
                    <p>Senha:</p> <input className="divInput" type="password" />
                    <br />
                    Não tem conta? <a href="/cadastro">Cadastre-se</a>
                    <br /><br />
                    <button>Entrar</button> 
                    
                </div>
            </div>
            <Rodape />
        </div>
    )
}

export default Login;
