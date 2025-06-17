

    let escolha1=document.getElementById("escolha1");
    let envio=document.getElementById("submit");
   
  

//    escolha1.addEventListener("click",function(){
//     var selectedOption=escolha1.options[escolha1.selectedIndex]
//     var valor=selectedOption.getAttribute("data-value")
//     alert("O valor selecionado foi ....." +valor)
//    })
   
    // escolha1.addEventListener("change",function(){
    // var valor=this.value;
    // alert("A escolha do usuario foi :" +valor)

    // })

let rodada= 1;

 

envio.addEventListener("click",function(){
if(rodada>3 )return //aqui faz um retorno e previni que o usuario tente avançar um valor maior que 3 
alert("Rodada "+rodada)
 
var res=escolha1.value;
var escolhadoPc=Math.floor(Math.random()*3)+1;
if(res==escolhadoPc){
    document.body.innerHTML="O vidro quebrou";
    document.body.style.background="green"
}
if(rodada===3){ //se chegar na rodada 3 e vencer venceu
document.body.innerHTML="PARABENS VC GANHOU DO PC"
document.body.style.background="red"

}else{ // senão chegou na rodada 3 ele vai para a próxima rodada
    alert("voce passou para o próximo nível")
rodada++
}
});



// o value só recebe valor fixo então para mudar tem que usar o change, não use o getAtribute pois o getAtribute não pega o valor atualizado ou seja ele pega o valor que ja foi definido no HTML se o usuario de repente alternou o valor ele não pega



//LONGE DOS PERIGOS NOTURNOS< PERTO DOS PERIGOS MENTAIS ^