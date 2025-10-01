import seta from '../../assets/icons/seta.svg'
import style from '../../Style/jean.module.css';
import { dados_cards } from '../../dados/dados-cards';
import { useState } from 'react';
import MeusCards from './meusCards';


function MenuCards(){
    
 const [show, setShow] = useState(false)
 const [cards, setCards] = useState('')

    function HandleClickMostrar (id: string){
        if (show){            
            setShow(false)
        } else {
            setShow(true)
            setCards(id)
        }
    }

    function HandleClickFechar(){
        setShow(false)
    }

    return (
    <div className={style.menuCards}>
                <div> <h1>Entendendo o que você está sentindo</h1> </div> 
                <img src={seta} alt="seta" />
              <div className={style.containerCards}>
            

                   { dados_cards.map((item)=>(
                    <div onClick={() => HandleClickMostrar(item.id)} className={style.card} key={item.id}>
                        <h3>{item.titulo}</h3>
                        <p>{item.descricao}</p>
                    </div>
                ))}
            
        </div>
    
            <div><p>*Esse site não se destina para atendimento imediato. Em caso de urgência ligue para 190 ou 188.</p></div>

            {show && <MeusCards HandleClickFechar={HandleClickFechar} id={cards}/>}
        </div>
    
    )
}
export default MenuCards;