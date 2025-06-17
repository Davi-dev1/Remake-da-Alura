// Oções que avaliam a quantidade de atributos existentes lá no seu html (no caso temos 3 ) e dão esses valores em texto então para cada valor temos:1-pedra 2-papel 3-tesoura
const opcoes={1:"Pedra",
              2:"Papel",
              3:"Tesoura"
};


document.querySelectorAll("img").forEach(img=>{
    img.addEventListener("click", function(){
        var valor=this.getAttribute("data-value")
        alert(`Valor escolhido por você foi ${opcoes[valor]}`);

let escolhaComputador=Math.floor(Math.random()*3) +1;

alert(`A escolha do computador foi ${opcoes[escolhaComputador]}`)
if(escolhaComputador==valor){
    document.body.innerHTML=`Houve empate a sua escolha e a do computador foi <br> respectivamente: <br>${opcoes[valor]}` //aqui pega aquelas opções e avalia a escolha dos 2(computador e do usuario) ai se forem iguais gera o texto ai concatenando as opções e pegando um dos valores do computador ou usuario(definido aqui como valor) no caso pegamos o valor mas se quiser como é empate pode pegar a escolhaDoComputador
        document.body.style.marginLeft="300px";
    document.body.style.fontFamily="Arial, Sans-serif";
    document.body.style.fontSize="45px";
     document.body.style.marginTop="60px"
       document.body.style.background = "cornflowerblue";
}
// Probabilidades de o usuario ganhar 
else if (

(escolhaComputador==1 && valor==2) ||(escolhaComputador==2 && valor==3) ||(escolhaComputador==3 && valor==1) // ||esse simbolo ai avalia todas as afirmações se colocar a virgula ele só avaliará a última condição

){
    document.body.innerHTML=`Parabens Você ganhou sua escolha foi ${opcoes[valor]}`
    document.body.style.marginLeft="300px";
         
  document.body.style.background = "cornflowerblue";
  document.body.style.marginTop="60px"

    document.body.style.fontSize="45px";

}else{
    document.body.innerHTML=`O pc ganhou de vc, a escolha dele foi ${opcoes[escolhaComputador]}`;
        document.body.style.marginLeft="400px";
  document.body.style.background = "cornflowerblue";
    document.body.style.fontSize="45px";
    document.body.style.marginTop="60px"
}




    });

});






