let input1=document.getElementById("nome");
let input2=document.getElementById("idade");
let input3=document.getElementById("envio");

input3.addEventListener("click",function(){
event.preventDefault();
var nome=String(input1.value);
var idade=Number(input2.value);
if(idade<18){
    document.body.innerHTML=nome+" , " + "você é menor de idade, site restrito 🔒";
    
}else if(isNaN(idade)){
    document.body.innerHTML=nome + " , " +" Por favor recarregue a página e digite apenas número";
}else{
    alert("Acesso concedido, aproveite o jogo 😈 "  );
    
    window.location.href="aula2.1.html";
}


}
);