
let p1=document.getElementById("p1");
let p2=document.getElementById("p2");
let p3=document.getElementById("p3");
let envio=document.getElementById("envio");

envio.addEventListener("click",function(){
    let forcaHeroi=0;
   let forcaVilao=0;


let viloes=[" "," "," " ];

//Calculo da força do heroi
forcaHeroi=Math.floor(Math.random()*10)+1;
forcaHeroi+=Math.floor(Math.random()*10)+1;//meio que ele pega o resultado da soma de cada heroi dado na linha de cima e soma tudo nessa linha

var primeiropersonagem=String(p1.value);
var segundopersonagem=String(p2.value);
var terceiropersonagem=String(p3.value);
alert(`A escolha de seus personagens foram respectivamente : ${primeiropersonagem}, ${segundopersonagem} e ${terceiropersonagem}; suas forças são: ${forcaHeroi}`)

for(let i=0;i<3;i++){
   let escolhaVilao= Math.floor(Math.random()*10);//se colocar +1 meio que o código tira 1 que foi adicionado para aproximar o valor
   let possiveisViloes=["Coringa","Thanos","Voldemort","Lula","Darth veder","Venom","Freeza","Cooler","Darkside","Sebastião"];
  viloes[i]=possiveisViloes[escolhaVilao];// A PARTIR DO LOOP DE REPETIÇÃO ELE ESCOLHE 3 VILOES NESSE ESCOPO DE 10 (PC COMEÇA A CONTAGEM A PARTIR DO 0)
}
//calculo da força do vilão
 forcaVilao=Math.floor(Math.random()*10)+1;
 forcaVilao+=Math.floor(Math.random()*10)+1;
 alert(`Os vilões que vão duelar são respectivamente: ${viloes}`)


//nossas condicionaisss
if(forcaHeroi==forcaVilao){
    document.body.innerHTML=`Houve empate as forças foram iguais. As forças dos heróis foram: ${forcaHeroi} e as forças dos vilões foram: ${forcaVilao}`
    document.body.style.color="white";
}else if(forcaHeroi>forcaVilao){
    document.body.innerHTML=`Os Heróis ganharam suas forças foram respectivamente:
    ${forcaHeroi} enquanto a força dos vilões foram respectivamente: ${forcaVilao}`
    document.body.style.color="white";
}else{
    document.body.innerHTML=`INFELIZMENTE OS VILÔES GANHARAM SUAS FORÇAS FORAM MAIORES QUE A DOS HERÓIS A FORÇA DELES FOI: ${forcaVilao}<BR> ENQUANTO QUE A DOS HERÓIS FORAM: ${forcaHeroi}`
    document.body.style.color="white";
}

});

