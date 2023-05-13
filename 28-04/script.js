// forma tradicional
const livro = {
    id: 1019,
    titulo: "Os guris da Rua 3",
    statusVenda: true,
};
//const id = livro.id;
//const titulo = livro.titulo;
//const statusVenda = livro.statusVenda;

// Desestruturando propriedades abaixo
const { id, titulo } = livro;

console.log(`Informações do livro id: ${id} titulo: ${titulo}`);
console.log(livro);

// customizando o nome dos atributos
const { id: idLivro } = livro;
console.log(idLivro);