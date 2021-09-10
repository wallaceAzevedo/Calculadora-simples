import React from 'react'
import '../Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import calcula from "../images/calculadora.png";

function Calculadora(){
    return (
    <div class="container " style={{marginTop:'80px'}}>          
        <div class="row">
            <div  class="col-lg-8 col-md-8 col-sm-12" >
                <div class="row" style={{textAlign:'center'}}>
                   <div style={{marginTop:'20px'}}>
                    <h3 className="gradient" style={{fontWeight:'700', fontSize:'30px'}}>
                        CALCULADORA DE SIMULAÇÃO DE CAPTAÇÃO
                    </h3>
                   </div>
                </div>
                <div class="row" style={{ textAlign:'center', marginTop:'60px'}}>
                    <div class="col-3" style={{height:'100%'}}>
                        <h2 className="gradient" style={{fontWeight:'700', fontSize:'26px'}}>10 MM</h2>
                        <p style={{fontWeight:'500', fontSize:'16px'}}>Quantidade de seguidores</p>
                    </div>
                    <div class="col-3"  style={{height:'100%'}}>
                        <h2 className="gradient" style={{fontWeight:'700', fontSize:'26px'}}>r$ 30</h2>
                        <p style={{fontWeight:'500', fontSize:'16px'}}>Valor do token</p>
                    </div>
                    <div class="col-3"  style={{height:'100%'}}>
                        <h2 className="gradient" style={{fontWeight:'700', fontSize:'26px'}}>1%</h2>
                        <p style={{fontWeight:'500', fontSize:'16px'}}>Percentual de conversão de compra</p>
                    </div>
                    <div class="col-3"  style={{height:'100%'}}>
                        <h2 className="gradient" style={{fontWeight:'700', fontSize:'26px'}}>3 MM</h2>
                        <p style={{fontWeight:'500', fontSize:'16px'}}>Total arrecadado</p>
                    </div>
                </div>
            </div> 
            
             
            <div  class="col-lg-4 col-md-4 col-sm-12">
                 
            </div> 
        </div>        
    </div>
        
    );
}

export default Calculadora;