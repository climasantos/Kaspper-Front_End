// Para manipular o DOM é preciso selecionar o objeto

//getElementsByTagName
let testeTags = document.getElementsByTagName('section')
console.log(testeTags);

// document.write(testeTags[0].textContent);

// getElementById
let testeId = document.getElementById('tituloPrincipal');
//console.log(testeId);

// Alterando o conteúdo
testeId.innerText = "Alterando o DOM";

// getElementsByClassName
let testClass = document.getElementsByClassName('box');
console.log(testClass);

// Percorrendo os elementos
for (let i = 0; testClass.length; i++){
    testClass[i].innerText = `Percorrendo ${i}`;
}
