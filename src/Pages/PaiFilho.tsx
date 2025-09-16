import Filho from "../Components/FIlho";


function PaiFilho () {

    function btnEventAction(txt: string) {
        alert('Cliente ' + txt + ' inserido com sucesso!')
    }

    return (
        <div>
            <hr />
            <Filho texto={'Este valor, foi criado pelo filho'} onClickFN={btnEventAction} />

        </div>
    )
}

export default PaiFilho;