// Trabalhando com arrays

let array = ["string", 10, false];
console.log(array);

let clientes = ["Bill", "Steve", "Goku"];
// acessar o indice

console.log(clientes[2]);

// manipulando o array
// adicionando um elemento novo

clientes.push("Vegeta");
console.log(clientes);

//remover um elemento(primeiro elemento)

clientes.shift();
console.log(clientes);

// Adiciona um elemento no início

clientes.unshift("Bob", "Patrick");
console.log(clientes);

// Tamanho do array;

console.log(clientes.length);

// Utilizando o tipo object

const cliente = {
  nome: "Goku da silva",
  idade: 50,
  ativo: true,
  endereco: {
  rua: "Casa do mestre Kame",
  numero: 3,
  },
  filhos:["Gohan", "Goten"]
}
console.log(cliente);

// Exibindo uma propriedade especifíca do objeto
console.log(cliente.nome);

console.log(cliente["endereco"]);

console.log(cliente.endereco.rua);


