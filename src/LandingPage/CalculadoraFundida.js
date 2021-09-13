import React ,{useState} from 'react'
import '../Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import calcula from "../images/calculadora.png";


function Calcular(){

    const [qtdUsers, setSubtotal] = useState();
    const [valorUsers, setNumDiners] = useState();
    const [conversao, setTipPercetnage] = useState();

    const submit = (e) => {
        e.preventDefault();

    if (qtdUsers == "" || valorUsers == "" || conversao == "") {
        return false;
    }

    const usuariosComprados = ( parseInt(conversao) / 100 ) * parseInt(qtdUsers)

    const resultadoCompra = usuariosComprados * parseInt(valorUsers)


    document.getElementById("resultado").innerHTML = resultadoCompra;
    };
    
    return (
    <div class="container " style={{marginTop:'80px'}}>          
        <div class="row">
       

    <form onSubmit={submit}>
        Quantidade de usuários:
        
        <input value={qtdUsers} onChange={(e) => setSubtotal(e.target.value)}/><br/>

        valor em reais R$ do token por usuário:
        <input value={valorUsers} onChange={(e) => setNumDiners(e.target.value)}/><br/>

        Conversão de compra %:
        <input value={conversao} onChange={(e) => setTipPercetnage(e.target.value)}/>
                

        R$ <label id="resultado">0</label>

        <br/>

        <button type="submit">Calcular</button>
    </form>
 
        </div>        
    </div>
        
    );
}

export default Calcular;
