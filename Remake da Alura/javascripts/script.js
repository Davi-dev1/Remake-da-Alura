let saida=document.getElementById("saida");
let won=document.getElementById("input");
let submeter=document.getElementById("envio");




let cotacao_won=0.0040;
    submeter.addEventListener("click",function(){
        event.preventDefault();
let valor=Number(won.value);
let result = valor*cotacao_won;
saida.innerHTML+=`O valor da conversão de Wons é : R$${result}`

saida.style.marginLeft="750px";
saida.style.marginRight="0px";
saida.style.marginTop="30px";
saida.style.color="black";
saida.style.fontWeight="900"
    }
    );

    let submetendo=document.getElementById("submetendo");
    let input2=document.getElementById("input2");
    let  resposta= document.getElementById("resposta");

  var cotacao_dolar=5.68;
    submetendo.addEventListener("click",function(){

     event.preventDefault(); 
     let Result=Number(input2.value);
     let R=Result*cotacao_dolar;
     resposta.innerHTML+=`O valor da conversão do dólar é : R$${R}`

        resposta.style.marginLeft="750px"
        resposta.style.marginTop="30px";
        resposta.style.color="black";
        resposta.style.fontWeight="900"

}
);