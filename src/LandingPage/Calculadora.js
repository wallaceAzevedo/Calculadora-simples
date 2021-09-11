import React from 'react'
import '../Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import calcula from "../images/calculadora.png";

function Calculadora(){

    var quantidade = document.getElementById("quantidade").value;
    var valor = document.getElementById("valor").value;
    var percentual = document.getElementById("percentual").value;

    var soma = quantidade + valor + percentual;

    document.getElementById("resultado").innerHTML= soma;
    
    return (
    <div class="container " style={{marginTop:'80px'}}>          
        <div class="row">
            <form id="cadastro">
                <label>Seguidores</label>
                <input type="text" id="quantidade" onblur="calcular()"/>
                
                <label>Valor token</label>
                <input type="text" id="valor" onblur="calcular()"/>

                <label>Resultado</label>
                <input type="text" id="percentual" onblur="calcular()"/><br/>
                
                <label>Valor/Quantidade</label>
                <input type="text" id="resultado" value='' readonly/>
                
            </form>     
        </div>        
    </div>
        
    );
}

export default Calculadora;