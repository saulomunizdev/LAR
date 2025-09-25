import '../../style/style.css'
import style from '../../Style/jean.module.css'
import facebook from '../../assets/imagens/facebook.png'
import instagram from '../../assets/imagens/Instagram.png'

function RodapeHome() {
    return (
        <div>
            <footer className={style.rodapeHome}>

                <div className={style.redesRodape}>
                    <span className={style.redesSociais}>ACOMPANHE O LAR NAS REDES SOCIAIS: <img src={facebook} alt="facebook" /> <img src={instagram} alt="instagram" /></span>
                    <hr />
                    <span>FALE CONOSCO</span>
                    <hr />
                    <span>POLÍTICA DE PRIVACIDADE</span>
                    <hr /> <br /> <br />

                        <div className={style.criadoLar}>
                            <h1>© 2025 - Criado por LAR  </h1> 
                            <p>-Lugar de apoio e recomeço.</p>
                        </div>
                </div>

           
            

            </footer>
        </div>
    )
}

export default RodapeHome