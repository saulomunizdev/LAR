import { dados_cards } from '../../dados/dados-cards';
import style from '../../Style/jean.module.css';
import seta from '../../assets/imagens/seta.png'


interface MeusCardsProps {
    id:string
    HandleClickFechar:() => void 
}



export default function MeusCards({id, HandleClickFechar}:MeusCardsProps){
   
     
    const cardsId = dados_cards.find((item)=>item.id === id)
    
    return (
            <div className={style.meusCardsContainer}>
              
                <div className={style.tituloModal}>
                    <div className={style.voltarCards} onClick={HandleClickFechar}> 
                        <img src={seta} alt="seta" />
                    </div>
                    <h1>{cardsId?.titulo}</h1>
                    <p>{cardsId?.descricao}</p>
                </div>

                <div className={style.topicosModal}>
                    <h3> {cardsId?.titulo2}</h3>

                 <h3>{cardsId?.topico1_1}</h3>
                    
                 <ul>
                        {cardsId?.topico1?<li> {cardsId?.topico1} </li>:''} 
                        {cardsId?.topico2?<li> {cardsId?.topico2} </li>:''} 
                        {cardsId?.topico3?<li> {cardsId?.topico3} </li>:''} 
                </ul>

                <h3>{cardsId?.topico1_2}</h3>

                <ul>
                    {cardsId?.topico4?<li> {cardsId?.topico4} </li>:''} 
                    {cardsId?.topico5?<li> {cardsId?.topico5} </li>:''} 
                    {cardsId?.topico6?<li> {cardsId?.topico6} </li>:''} 
                 </ul>

                 <h3>{cardsId?.topico1_3}</h3>
                </div>
             
            </div>
    )
} 