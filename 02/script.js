//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18

let idade = 16

if(idade>= 18 ) {
    console.log("Você pode entrar na balada")
}
else{
  console.log("Proibido de entrar!")
}

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade 
//E a condição humana seja true

let humano = false

if(humano == true && idade >= 18){
    console.log("Você humano!")
}else{
 console.log("Você deve ser louco")   
}

//3 - Criar uma condição que exiba uma 
//mensagem no console se você fizer aniversário em Janeiro OU Dezembro

let aniversario = "Janeiro"

if(aniversario == "Janeiro" || aniversario == "Dezembro"){
 console.log("Feliz aniversario!")
}else{
    console.log("Não é seu aniversario")
}