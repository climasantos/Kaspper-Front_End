// Declaração
function ola(){
    console.log("Hello World utilizando função");
}
// Chamando a função
ola();

// 2ª Forma Expressão
const olaExpressao = function(){
    console.log("Função com function expression");
}
olaExpressao();

//3ª Forma Arrow Functions
const numeroAleatorio = () => Math.random();

// Utilizando parâmetros(1)
function digaOla(nome){
    return `Olá ${nome}`;
}
// Utilizando parametro usando a 3F
const digaOlaAF = (nome) => `Olá ${nome}`;
console.log(digaOlaAF("Carlos"));
