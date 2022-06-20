//1 - crie uma função que exiba uma mensagem no console
 
function msg(){
 console.log("Olá")
 } 

 msg()

 //2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

 function myName(nome){
    console.log(`Bem-vindo(a), ${nome}!`)
 }

 myName("Beatriz")
 myName("Mariana")
 myName("Evelyn")

 //3 - crie uma função que receba nome, idade, e um estilo musical 
 //preferido (parâmetros) e exiba no console

  function about(name, age, music){
    console.log(`Meu nome é ${name}, eu tenho ${age} anos e amo ouvir ${music}`)
 }

 about("Beatriz", 25, "pop")
 about("Evelyn", 18, "citypop")
 about("Karina", 20, "rap")
 about("Mariana", 19, "Imagine Dragons")

 // 4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

 function fun(movie, music){
     console.log(`Meu filme favorito é ${movie} e minha música favorita é ${music}`)
 }

 fun("Luísa", "Penhasco")
 fun("Como eu era antes de você", " Dinastia")

 //5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

  function calc(triplo){
     return triplo * 3
 }
 console.log(calc(9))
