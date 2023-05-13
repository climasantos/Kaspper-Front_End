function ola(){
    console.log("Abril de 2023 é TOP!!!");
}

ola();

const retangulo = Function('a', 'b', 'return a * b');
console.log(retangulo(2, 6));


// Math.PI em arrow function 

const calculateCircumference = (circle) => {
    return 2 * Math.PI * circle;
 } 
 
 console.log(Math.PI);
