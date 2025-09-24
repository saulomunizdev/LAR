import style from '../../Style/jean.module.css'


function HomeInicio(){
    return (
        <div className={style.homeInicio}>
            <div className={style.textoHome}>
                <h1>
                    Seja bem vindo(a) <br />
                    Aqui é um espaço seguro.
                </h1>
                <span>Estamos aqui para te apoiar.</span>

            <button className={style.btoAjuda}>Preciso de Ajuda</button>
            </div>
        </div>
    )
}

export default HomeInicio;