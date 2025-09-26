import { dados_cards } from '../../dados/dados-cards';
import style from '../../Style/jean.module.css';
import seta from '../../assets/icons/seta.svg'


function MenuCards(){
    return (
    <div className={style.menuCards}>
                <div> <h1>Entendendo o que você está sentindo</h1> </div> 
                <img src={seta} alt="seta" />

        <div className={style.containerCards}>
            {
                dados_cards.map((item)=>(
                    <div className={style.card} key={item.id}>
                        <h3>{item.titulo}</h3>
                        <p>{item.descricao}</p>
                    </div>
                ))
            }
        </div>

        </div>
    
    )
}
export default MenuCards;