import { useState } from "react";



function Contador () {

    const [numero, setNumero] = useState(10); 

    function handleSomar(){
        setNumero (numero + 1)
    }

    function handleSubtrair(){
        setNumero (numero - 1)
    }

    const [nome, setNome] = useState('');

    function modificarInput (evento: React.ChangeEvent <HTMLInputElement>) {
        setNome(evento.target.value);
    }

    return(
        <div>
            O número é : {numero} 
            <br /><br />
            <button onClick={handleSomar}>Somar +1 </button>
            <button onClick={handleSubtrair}>Subtrair -1 </button>

            <hr />
            <br />

            <input onChange={modificarInput} type="text" placeholder="Digite seu nome" />
            <br /><br />
            O texto digitado é: {nome}
        </div>
    )
}

export default Contador;