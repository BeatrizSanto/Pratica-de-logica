 // Crie um array que receba 5 itens e exiba no console.

 let filme = ["Ainda Estou Aqui","Superação: O Milagre da Fé","Nasce Uma Estrela","Extraordinário","Sol da Meia-noite1"];

 console.log(filme);


// Utilize um método para adicionar um nome ao inicio do array.

filme.unshift("Como Eu Era Antes de Você");
console.log(filme);

// Utilize um método para remover o último nome do array.

filme.pop();
console.log(filme);

// Utilize um método para adicionar dois nomes ao fim do array.
filme.push("A Barraca do Beijo","De Repente 30");
console.log(filme);

// Utilize um método para remover o primeiro nome do array.
filme.shift();
console.log(filme);

// Utilize um método para organizar em ordem crescente o seguinte array:
 let numbers = [7,5,6,3,8,9,2,1,4]

 numeros.sort(function(a, b){
     return a - b
 })

 console.log(numeros);

 console.log("");
console.log("==============================================");
 console.log("");