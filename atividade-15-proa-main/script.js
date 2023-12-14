/* 
   1- Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou meno a ZERO, deve ser lido um novo valor.
   Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo. O seu programa deve imprimir o resultado da divisão do primeiro
   valor lido pelo segundo valor.
*/

function atividade1(){
    let valor1 = parseFloat(prompt("Digite o primeiro valor"));
    let valor2 = parseFloat(prompt("Digite o segundo valor"));

    while(valor2 <= 0){
        alert("Insira apenas valores maiores que 0");
        valor2 = parseFloat(prompt("Digite o valor 2, novamente"));
    }
    alert(valor1 / valor2);
}

/* 
  2- Crie uma bomba relógio(usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. Utilize "document.write" para escrever em 
  tela e no final da repetição escreva "EXPLOSÃO".
*/

function atividade2(){
    let contagem = 30;
    let final = 0;

    while(contagem >= final){
        document.write(`<p> Faltam ${contagem} segundos</p>`);
        contagem--;
    }
    document.write(`<p> EXPLOSÃO </p>`)
}

/* 
 3- Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.
  Exemplo: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
*/

function atividade3(){
    let contagem = 10;
    let final = 0;

    while(contagem >= final){
        document.write(`<p> ${contagem} </p>`);
        contagem--;
    }
}

/* 
 4- Faça um algoritimo que calcule e escreva a média aritmética dos números inteiros entre 15(inclusive) e 100(inclusive)
*/

function atividade4(){
    let contagem = 15;
    let final = 100;
    let soma = 0;
    let contador= 0;

    while(contagem <= final){
        soma += contagem;
        contagem++;
        contador++
    }
    document.write(`<p> A média é ${soma/contador} </p>`);
}

/* 
   5- Faça um algoritimo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os numeros
   inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.
*/

function atividade5(){
    let valor1 = parseInt(prompt("Digite o primeiro valor"));
    let valor2 = parseInt(prompt("Digite o segundo valor"));
    let soma = 0;
    let contador = 0;

    while(valor1 <= valor2){
        soma += valor1;
        valor1++;
        contador++;
    }
    document.write(`<p> A média é ${soma/contador} </p>`);
}

/* 
  6 - Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. 
  Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve 
  ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.
*/

function atividade6(){
    let nota1 = parseFloat(prompt("Digite a primeira nota"));
    let nota2 = parseFloat(prompt("Digite a segunda nota"));
    let media = (nota1 + nota2) / 2;
    let contador = 0;
    
    while(media >= 9.5){
        contador++;
        let resposta = prompt("Calcular a média de outro aluno Sim/Não?");
        if(resposta == "S"){
            nota1 = parseFloat(prompt("Digite a primeira nota"));
            nota2 = parseFloat(prompt("Digite a segunda nota"));
            media = (nota1 + nota2) / 2;
        }else{
            break;
        }
    }
    document.write(`<p> A quantidade de alunos aprovados é: ${contador} </p>`);
}


/* 
  7 - Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores 
      válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total.
      Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário.  
*/

function atividade7(){
    let contador = 0;
    let nota = parseFloat(prompt("Digite sua nota"));
    while(contador < 6){
        if(nota >= 0 && nota <= 10){
            contador++
            nota = parseFloat(prompt("Digite sua nota"));
        }else{
            alert("Insira apenas valores entre 0 e 10");
            nota = parseFloat(prompt("Digite sua nota"));
        }
    }
    document.write(`<p> A quantidade de notas inseridas é: ${contador} </p>`);
}

/* 
 8- Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO.
N  é um valor informado pelo usuário
*/

function atividade8(){
    let numero = parseInt(prompt("Digite um numero"));
    let inicio = 1;
    while(inicio <= numero){
      if(numero > 0){
        document.write(`<p> ${inicio}</p>`);
        inicio++;
      }
      else{
        alert("Digite apenas valores maiores que zero");
        numero = parseInt(prompt("Digite um numero novamente")); 
      }

    }
}

/* 
  9- Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100.
*/

function atividade9(){
    let inicio = 101;
    let final = 110;
    while(inicio <= final){
        document.write(`<p> ${inicio} </p>`);
        inicio++;
    }
}

/* 
  10- Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.
*/

function atividade10(){
    let qntdTabuadas = prompt("Escreva o número para o total de tabuadas: ");
    let laco = 1;

    qntdTabuadas = parseInt(qntdTabuadas);

    while(laco <= qntdTabuadas){
        document.write("<p>-------------------------------------------</p>");
        document.write("<p>Tabuada do " + laco + "</p>");
        let tab1 = laco * 1;
        document.write("<p>" + laco + " x 1 = " + tab1 + "</p>");
        let tab2 = laco * 2;
        document.write("<p>" + laco + " x 2 = " + tab2 + "</p>");
        let tab3 = laco * 3;
        document.write("<p>" + laco + " x 3 = " + tab3 + "</p>");
        let tab4 = laco * 4;
        document.write("<p>" + laco + " x 4 = " + tab4 + "</p>");
        let tab5 = laco * 5;
        document.write("<p>" + laco + " x 5 = " + tab5 + "</p>");
        let tab6 = laco * 6;
        document.write("<p>" + laco + " x 6 = " + tab6 + "</p>");
        let tab7 = laco * 7;
        document.write("<p>" + laco + " x 7 = " + tab7 + "</p>");
        let tab8 = laco * 8;
        document.write("<p>" + laco + " x 8 = " + tab8 + "</p>");
        let tab9 = laco * 9;
        document.write("<p>" + laco + " x 9 = " + tab9 + "</p>");
        let tab10 = laco * 10;
        document.write("<p>" + laco + " x 10 = " + tab10 + "</p>");
        laco++;
    }
}



/* 
  11- Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os 
   números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.
*/

function atividade11(){
   let numerosValidos = [];
   let numerosInvalidos = [];

   let inicio = 1
   while(inicio <= 10){
     let valor = parseFloat(prompt("Digite um numero"));
     if (valor >=24 && valor <=42){
        numerosValidos.push(valor);
     }
     else{
        numerosInvalidos.push(valor);
     }
     inicio++
   }
   alert(`Numeros validos: ${numerosValidos} \n Numeros invalidos: ${numerosInvalidos}.`);
}











