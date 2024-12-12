function multiplicar(num1: number, num2: number): number {
    return num1 * num2;
}

function saudar(nome: string): string {
    return "Olá " + nome;
}

const resultadoMultiplicacao = multiplicar(3, 4); 
console.log(resultadoMultiplicacao);

const saudacao = saudar("Maria");
console.log(saudacao);
