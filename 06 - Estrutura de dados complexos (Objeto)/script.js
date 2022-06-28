// Crie um objeto que receba ao menos três propriedades sobre você.

let sobreMim = {
    nome: "Beatriz",
    idade: 22,
    cursaFaculdade: true
}

//Adicione uma nova propriedade sem alterar seu objeto inicial.

sobreMim.time = "São Paulo";
console.log(sobreMim);

// Remova uma propriedade desse objeto.

delete sobreMim.idade;
console.log(sobreMim);

//Mostre no console todas as propriedades desse objeto.

console.log(sobreMim);

// // Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
// //Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone,
// // amigos. 
// //Na propriedade amigos, adicione ao menos 4 itens.

 const cadastro = [
    {
        nome:"Beatriz",
        idade: 22,
        telefone:2131231,
        amigos: ["Mari","Myllena","Isabel","Maria"]
    },
    {
        nome: "Mari",
        idade: 18,
        telefone: 321313,
        amigos:["Beatriz","Isabel","Maria","Myllena"]
    },
{
    nome:" Isabel",
    idade: 19,
    telefone:2312313,
    amigos:["Mari","Beatriz","Maria","Myllena"]
},
{
    nome: "Maria",
    idade:20,
    telefone:3141242,
    amigos:["Myllena","Mari","Beatriz","Isabel"]
},
{
 nome: "Myllena",
 idade: 23,
 telefone:123131,
 amigos:["Maria","Beatriz,Isabel,Mari"]
}   
 ];

 // Mostre no console o nome de um amigo de cada lista.

 console.log(cadastro[0].amigos[0]);
 console.log(cadastro[1].amigos[0]);
 console.log(cadastro[2].amigos[0]);
 console.log(cadastro[3].amigos[0]);
 console.log(cadastro[4].amigos[0]);