import { dados_cards } from '../../dados/dados-cards';
import style from '../../Style/jean.module.css';

interface MeusCardsProps {
    id:string
    HandleClickFechar:() => void 
}



export default function MeusCards({id, HandleClickFechar}:MeusCardsProps){
    console.log(id)
     
    const cardsId = dados_cards.find((item)=>item.id === id)
       
    
   
    

    return (
            <div className={style.meusCardsContainer}>
                <div className={style.voltarCards} onClick={HandleClickFechar}>Voltar</div>
               <h3> {cardsId?.titulo2}</h3>
               <p>{cardsId?.topico1}</p> 
                <p> {cardsId?.topico2}</p>     
                <p>{cardsId?.topico3}</p>
               <p>{cardsId?.topico4}</p> 
               <p> {cardsId?.topico5}</p>
            </div>
    )
} 