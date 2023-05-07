const Numero = prompt ("digite seu numero aqui");

alert(Numero * 2);


let valorConta = prompt("Digite o valor da compra aqui:");

const custogarcom = 10;
let taxaGarcom = parseFloat(valorConta) * custogarcom /100;
let valorTotal = parseFloat (valorConta) + custogarcom;


 alert(valorTotal);


 let valorPizza = (prompt("Digite o valor")); 
 let NumPessoas = (prompt("Quanstas pessoas serão"));

 let valorPorPessoa = parseFloat(valorPizza) / parseFloat (NumPessoas);


 alert("Cada pessoa deve pagar R$ " +valorPorPessoa);