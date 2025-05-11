const prompt = require('prompt-sync')();

// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

// let num = parseInt(prompt('insira um número inteiro'))

// if (num % 2 === 0){
//     console.log('Este número é par')
// }   else{
//     console.log('Este número é impar.')
// }

// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura decontrole if-else.

// let idade = parseInt(prompt('Insira sua idade: '))

// if (idade < 0) {
//     console.log("Idade inválida! Por favor, digite um valor positivo.");
// } else if (idade <= 12) {
//     console.log("Criança");
// } else if (idade <= 17) {
//     console.log("Adolescente");
// } else if (idade <= 64) {
//     console.log("Adulto");
// } else {
//     console.log("Idoso");
// }

// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

// const nota = Number(prompt('Insira sua nota: '))

// if(nota < 3){
//     console.log('Reprovado')
// }   else if (nota<6) {
//     console.log('Recuperação')
// }    else {
//     console.log('Aprovado')
// }

// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

// console.log('\n\nBem Vindo!\n--------------\nESCOLHA UMA OPÇÃO\n\n1 - Olá Mundo\n2 - Conte uma piada\n3 - Sair\n')

// let opc = (prompt('Faça sua escolha!\n\n'))

// switch (opc){
//     case '1':
//         console.log('\nOlá mundo! Vc esta progredindo!')
//         break
//     case '2':
//         console.log('\nPq a galinha atravessou a rua?\n\nPara chegar ao outro lado ;D')
//         break
//     case '3':
//         console.log('\nAté breve!\nE cuidado ao atravessar a rua!\n')
//         break
//     default:
//         console.log('Opção inválida!\nNice try!')
// }

// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

// let peso = Number(prompt('Insira seu peso: '))
// let altura = Number(prompt('\nInsira sua altura: '))
// let imc = peso / altura ** 2

// if (imc < 18){
//     console.log(`\nSeu imc é ${imc}: Baixo peso`)
// }   else if (imc < 25){
//     console.log(`\nSeu imc é ${imc}: Peso médio`)
// }   else if (imc < 30){
//     console.log(`\nSeu imc é ${imc}: Alto peso`)
// }    else{
//         sobrepeso
//     }

// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:

// let a = parseInt(prompt('Insira o primeiro lado do triangulo: '))
// let b = parseInt(prompt('Insira o segundo lado do triangulo: '))
// let c = parseInt(prompt('Insira o terceiro lado do triangulo: '))

// if (a + b > c && a + c > b && b + c > a){
//     if (a === b && b === c){
//         console.log('Triângulo equilátero.')
//     } else if (a === b || b === c || a === c){
//         console.log('Triângulo Isósceles.')
//     }else {
//         console.log('triangulo escaleno')
//     }
// }   else {
//     console.log('Não é um triângulo')
// }


// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

// let maca = parseInt(prompt('Quantas maçãs quer comprar?'))

// if (maca < 12){
//     console.log(`Sua compra ficou ${maca * 0.3}`)
// }   else {
//     console.log(`Sua compra ficou ${maca * 0.25}`)
// }

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

// let a = Number(prompt('Insira um valor: '))
// let b = Number(prompt('Insira um valor: '))

// if (a !== b){
//     if (a > b){
//         console.log(`O número ${a} é maior que o número ${b}`)
//     } else {
//         console.log(`O número ${b} é maior que o número ${a}`)

//     }    
// }

// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.

// for(let i = 10; i > 0; i--){
//     console.log(i)
// }

// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

// let num = Number(prompt('Insira um número: '))

// for (let i = 0; i < 10; i++){
//     console.log(`${num}\n`)
// }

// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

// let soma = null
// for (let i = 0; i < 5; i++){
//     const num = Number(prompt('Digite um número: '))
//     soma += num
// }

// console.log(`A soma é: ${soma}`)

// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

// let num = parseInt(prompt('Insira um número: '))

// for (let i = 1; i <= 10; i++){
//     console.log(`${num} x ${i} = ${num*i}`)
// }

// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

// num = null
// i = 0
// let soma = null
// while (num !== 0){
//     num = parseFloat(prompt('Digite um número (ou zero para sair): '))
//     soma += num
//     i++
// }
// console.log(`A média arit. é: ${soma/(i-1)}`)

// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

// const num = parseInt(prompt("Insira um número inteiro positivo: "))
// let i = 1
// let fat = 1

// while (i <= num){
//     fat *= i
//     i++
// }
// console.log(`O fatorial de ${num} é: ${fat}`)

// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

// let n1 = 0, n2 = 1, prox

// for (let i = 0; i < 10; i++){

//     console.log(n1)
//     prox = n1 + n2
//     n1 = n2
//     n2 = prox

// }

