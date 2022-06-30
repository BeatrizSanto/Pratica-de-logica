//Crie 3 variáveis, cada uma com um array:
//Dentro de cada array, insira 3 (TRÊS) Objetos, contendo:

let  comedy =[
{
    title:"Grown Ups",
    director:"Dennis Dugan",
    year: 2010
},

 { 
  title:"White Chicks",
  director:"Keenen Ivory Wayans",
  year:2004

},

{
    title:"50 First Dates",
    director: "Peter Segal",
    year: 2004,
}
];


console.log(comedy);

let action =[
{
    title:"Insurgent",
    director:"Robert Schwentke",
    year: 2015
},

{
    title: "In Time",
    director:"Andrew Niccol",
    year: 2011
},

{
    title: "The Fast and the Furious",
    director: "Rob Cohen",
    year: 2001
}
];

console.log(action);
let  fantasy =[
    {
    title: "Beastly",
    director:"Daniel Barnz",
    year: 2011

    },

    {
    title:"The Spiderwick Chronicles",
    director: "Mark Waters",
    year: 2008
},

{
    title:"Maleficent",
    director:"Robert Stromberg",
    year: 2014
}

];

//*DESAFIO EXTRA* 

//Escolha uma variável e insira uma condição para ela, (condição de sua escolha), com a seguinte mensagem ao console: 
//IF: "MY FAVORIT MOVIE IS..."
//ELSE: "NOT EVEN 5 STARS..." 

let movie = fantasy[0].title;
if (movie === "The Chronicles of Narnia"){
    console.log(`My favorite movie is:`, movie);
}else{
    console.log("Not even 5 stars");
} 