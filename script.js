function EnviarFormulario() {
    // Captura os valores dos campos do formulário e cria um objeto para armazenar esses valores
    var contaCliente = new Object();

    // Atribui os valores dos campos do formulário ao objeto 'contaCliente'
    contaCliente.nome = document.getElementById("nome").value;          // Captura o valor do campo 'Nome Completo'
    contaCliente.cpf = document.getElementById("cpf").value;            // Captura o valor do campo 'CPF'
    contaCliente.datanasci = document.getElementById("datanasci").value; // Captura o valor do campo 'Data de Nascimento'
    contaCliente.genero = document.getElementById("genero").value;      // Captura o valor do campo 'Gênero'
    contaCliente.idade = document.getElementById("idade").value;        // Captura o valor do campo 'Idade'
    contaCliente.altura = document.getElementById("altura").value;      // Captura o valor do campo 'Altura'
    contaCliente.peso = document.getElementById("peso").value;          // Captura o valor do campo 'Peso'
    contaCliente.queixa = document.getElementById("queixa").value;      // Captura o valor do campo 'Queixa'

    // Converte o objeto 'contaCliente' em uma string JSON
    var json = JSON.stringify(contaCliente);

    // Exibe a string JSON no console para verificação
    console.log(json);
    
    // Exibe o valor atual do objeto 'contaCliente' no console
    console.log(contaCliente.valueOf());

    alert("Seu cadastro foi concluído com sucesso!!!")
}
