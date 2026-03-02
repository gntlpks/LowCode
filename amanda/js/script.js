function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// //primeira linha de código JS
// //alert('Hello world')
 
// //criar uma variável
// let firstCode = 'hello world';
 
// let className = 'Low Code';

// //reassignar valor à variavel
// className = "Design UX";

// //concatenar variaves
// //alert(className+' : '+firstCode);

// //IF/ELSE validar se numero é par ou impar e informar

// //forma alternativa de concatenar variáveis

// //alert(`a turma é ${className}: ${firstCode}!`);
//  let nota = prompt("Digite uma nota de 0 a 100").trim();

//  if(nota<50){
//     alert("Reprovado")
//  }
// else if(nota == 50 && nota <79){
//     alert("Aprovado");
// }
// else{
//     alert("Aprovado com Distinção")
// }



// let UserName = prompt("Qual é o seu nome?");
// let UserAge = prompt("Qual é a sua idade?");

// let Servico = prompt(" 1 ver saldos, 2 fazer levantamento ou 3 depositar")
 
// if(UserAge>=18){
//     alert('tem 1.0000 de euros');
//     switch(Servico){
//         case "lev":

        
//         valor = prompt("Qual o valor que quer levantar?");
//         valor = 10000 - valor;
//         alert("O seu saldo atual é "+valor+" euros");
       
//         case "dep":
//         valor = prompt("Qual o valor que quer levantar?");
//         valor = 10000 + Number(valor);
//         alert("O seu saldo atual é "+valor+" euros");
// }
 
// }
// else{
//     alert("Acesso negado");
// }
 
 let alunos = ["Maria Cardoso", "Bruno Azevedo", "Beatriz Afonso"];


 let notas = [20, 12, 9];
 let mixedArray = ["Cesae", 15, true];

// //  alunos[1] = "Bruno Silva"
// //  alert(alunos);

// //  //perguntar ao utilizador qual index qr alterar

// //  let alteracaoIndex = prompt("Qual index quer alterar?");

// // //qual o novo valor para o index

// // let nomeIndex = prompt("Qual o nome quer colocar?");


// alunos[index] = nomeIndex

// //adicionar no fim do array
// alunos.push("Andreia Ricardo");
// alert(alunos);
// let pushName = prompt("Qual o nome do novo aluno");
// alunos.push(pushName);
// alert(alunos);

// //remover do inicio
// alunos.shift()
// alert(alunos);

// let planetas = ["Mercúrio", "Vénus", "Terra", "Mart", "Júpiter", "Saturno", "Urano", "Neptuno", "Plutão"];
// planetas[3] = "Marte";
// planetas.pop()

// planetas.push("Candyland");
// alert(planetas);
// console.log(planetas);

//include

// let courses =
//     [["css", "html"], 
//     "bases de dados", 
//     ["funções", "tipos de dados"]];

//     alert(courses[1]);

//const airplaneSeats = ["Ruth", "Anthony", "Stevie", "Amelia", "Pedro", "Maya", "Xavier", "Anaya", "Luis", "Luke", null, "Deniz", "Rin", "Sakura", "Francisco"]

// airplaneSeats[10] = "Amanda"
// alert(airplaneSeats)

// const airplaneSeats =
//  [
// ["Ruth", "Anthony", "Stevie"],
//  ["Amelia", "Pedro", "Maya"],
//  ["Xavier", "Anaya", "Luis"],
//  ["Luke", null, "Deniz"],
//  ["Rin", "Sakura", "Francisco"]];

//  airplaneSeats[3][1] = "Amanda";
// console.log(airplaneSeats);

// let meals = [
//   "Arroz e feijão",
//   "lasanha",
//   "ramen",
//   "pizza",
//   "salada de feijão frade",
//   "francesinha",
// ];
// let randomIndex = meals[getRandomInt(meals.length)];
// alert("O prato do dia é " + randomIndex);

// let frutas = ["banana", "kiwi", "morango", "manga", "graviola"];
// console.log(frutas);

// let frutafav = prompt ("Qual sua fruta preferida?");

// frutas.push(frutafav);
// alert(frutas);

// alert("O array tem " + frutas.length + " frutas")

// let randomIndex = frutas[getRandomInt(frutas.length)];
//  alert("A fruta do dia é " + randomIndex);


// let numeros = [10, 20, 30];
// numeros.push("40");
// alert(numeros);
// numeros.unshift("0");
// alert(numeros);
// numeros.unshift();
// alert(numeros);


// let cores = ["amarelo", "verde", "vermelho", "branco", "rosa"];
// cores[2] = "pink";
// console.log(cores)
// alert(cores [0]+)
//

let course = {
    cname: "Programador de Low Code",
    responsible: "Inês Castro",
     hours: 1100,
     modules: ["Programação Web", "Algoritimia", "Inglês"] 
}

// course.hours = 1150
// alert("O curso de " +course.cname+" e tem "+course.hours+" h e o módulo mais importante é "+course.modules[1]);

// alterar
// let newModules = prompt("Qual módulo queres adicionar ?");
// course.modules.push(newModules);
// alert(course.modules)

// let product = {
//     prodname: "Tshirt",
//     inStock: true,
//     price: 1.99,
//     colors: ["vermelho", "azul", "verde"]
// }

// alert(product.price);
// alert(product.colors[2]);

// product.price = 2.55;
// alert(product.price);~


 //let pass = prompt('insira uma pass com pelo menos 4 caracteres');
// // while(pass.length<4){
//     pass = prompt("Insira uma pass válida");
//  }
//  alert("pass ok");

  let pass = "segredo123";
 pass = prompt('insira a pass');
 while(pass !="segredo123"){
     pass = prompt("Pass errada, tente novamente")};

     alert("acesso concedido");


 
//  let pass = "segredo123";

// pass = prompt('insira a pass');
//  while(pass !="segredo123"){
//      pass = prompt("Pass errada, tente novamente")};

 
//     alert("acesso concedido");   





//  let listadecompra = ["Ovos", "Leite", "Arroz"];

//  let newListadecompra = prompt("Adicione os itens. Se acabou digite fim.");

// while(newListadecompra != "fim"){ 
//     listadecompra.push(newListadecompra);
//     newListadecompra = prompt ("Adicione os itens. Se acabou digite fim.");

// }
//  alert(listadecompra)