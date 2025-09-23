import '../../style/style.css'
import {  useNavigate} from 'react-router-dom';
import logo from '../../assets/image1.png'
import style from '../../Style/jean.module.css'
function Cabecalho () {




const navigate = useNavigate();
    
function handleNavegarLogin(){
        navigate('/login')
    }
function handleNavegarHome(){
        navigate('/')
    }
function handleNavegarInstituicao(){
    navigate('/instituicao')
}
function handleNavegarInstituicaoAjuda(){
    navigate('/instituicaoAjuda')
}
function handleNavegarPrecisoAjuda(){
    navigate('/instituicaoQueroAjuda')
}
function handleNavegarSos(){
    navigate('/Sos')
}
    return (
        <div>
         <div className={style.cabecalho}>
            <div className={style.Logo}>
                <img src={logo} alt="Logo" />
            </div>
            
           <div>
                <button className={style.bto} onClick={handleNavegarHome}>Home</button>
                <button className={style.bto}  onClick={handleNavegarInstituicao}>Instituição</button>
                <button className={style.bto}  onClick={handleNavegarInstituicaoAjuda}>Quero Ajudar</button>
                <button className={style.bto}  onClick={handleNavegarPrecisoAjuda}>Preciso de Ajuda</button>
                <button className={style.bto}  onClick={handleNavegarLogin}>Entrar</button>
                
           </div>

                 <button className={style.btoSOS}  onClick={handleNavegarSos}>SOS</button>
                
            </div>
        </div>
    )
}

export default Cabecalho
