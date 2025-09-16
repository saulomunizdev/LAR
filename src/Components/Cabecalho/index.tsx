import '../../style/style.css'
import { Link , useNavigate} from 'react-router-dom';

function Cabecalho () {

let cabMenu4: string = 'Empresa'
let cabMenu1: string = 'Quero Ajudar'
let cabMenu2: string = 'Preciso de Ajuda'
let cabMenu3: string = 'Entrar'
let cabMenu5: string = 'SOS'
let cabMenu6: string = 'Instituicao'


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
            
            <div className="cabecalho">
                {/* <div className='cab-menu2'>
                    <Link to={"/"} >{cabMenu4}</Link>
                </div>
                <div className='cab-menu2'>
                    <Link to={"/instituicao"} >{cabMenu6}</Link>
                </div>
                <div className='cab-menu1'>
                    <Link to={"/instituicaoAjuda"} >{cabMenu1}</Link>
                </div>
                <div className='cab-menu2'>
                    <Link to={"/instituicaoQueroAjuda"} >{cabMenu2}</Link>
                </div>
                <div className='cab-menu2'>
                    <Link to={"/login"} >{cabMenu3}</Link>
                </div>
                <div className='cab-menu2'>
                    <Link to={"/sos"} >{cabMenu5}</Link>
                </div> */}

                <button className='bto' onClick={handleNavegarHome}>Home</button>
                <button className='bto' onClick={handleNavegarInstituicao}>Instituição</button>
                <button className='bto' onClick={handleNavegarInstituicaoAjuda}>Quero Ajudar</button>
                <button className='bto' onClick={handleNavegarPrecisoAjuda}>Preciso de Ajuda</button>
                <button className='bto' onClick={handleNavegarLogin}>Entrar</button>
                <button className='btoSOS' onClick={handleNavegarSos}>SOS</button>
            </div>
        </div>
    )
}

export default Cabecalho
