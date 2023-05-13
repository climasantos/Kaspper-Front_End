let admin;
admin = '';

switch (admin) {
    case "Supervisor":
        console.log('Acesso aos Relatórios');
    break;

    case "Desenvolverdor":
        console.log('Todos os módulos e delete all tables do sistema');
    break;

    case "Operador":
        console.log('Cadastros e movimentações');
    break;

    default:
        console.log('Usuário não reconhecido');

}
