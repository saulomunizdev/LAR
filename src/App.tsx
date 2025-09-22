import { Route, Routes } from "react-router-dom";
// import './App.css'
import "./Style/style.css";
import Home from "./Pages/Home";
import InstituicaoAjuda from "./Pages/InstituicaoAjuda";
import InstituicaoQueroAjuda from "./Pages/InstituicaoQueroAjuda";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import FormAjuda from "./Pages/FormAjuda";
import FormQueroAjuda from "./Pages/FormQueroAjuda";
import DetalheAjuda from "./Pages/DetalheInstituicaoAjuda";
import DetalheQueroAjuda from "./Pages/DetalheInstituicaoQueroAjuda";
import NotFound from "./Pages/NotFound";
import Sos from "./Pages/Sos";
import Instituicao from "./Pages/Instituicao";
import Contador from "./Pages/Contador";
import PaiFilho from "./Pages/PaiFilho";
import EsqueciSenha from "./Pages/EsqueciSenha.tsx";
import ResetarSenha from "./Pages/ResetarSenha/index.tsx";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/instituicaoajuda" element={<InstituicaoAjuda />} />
      <Route
        path="/instituicaoqueroajuda"
        element={<InstituicaoQueroAjuda />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/formajuda" element={<FormAjuda />} />
      <Route path="/formqueroajuda" element={<FormQueroAjuda />} />
      <Route path="/detalheinstituicaoajuda" element={<DetalheAjuda />} />
      <Route
        path="/detalheinstituicaoaquerojuda"
        element={<DetalheQueroAjuda />}
      />
      <Route path="/sos" element={<Sos />} />
      <Route path="/instituicao" element={<Instituicao />} />
      <Route path="/contador" element={<Contador />} />
      <Route path="/formulario" element={<FormQueroAjuda />} />
      <Route path="/doacao" element={<FormAjuda />} />
      <Route path="/paifilho" element={<PaiFilho />} />
      <Route path="/esqueci-senha" element={<EsqueciSenha />} />
      <Route path="/resetar-senha" element={<ResetarSenha />} />
    </Routes>
  );
}

export default App;
