// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/
//Criar uma funcao construtora que vaireceber o CPF e depois criar com define propety 
//um getter que vai return o cpf somente com os numeros,sem os pontos ou traços
//depois criar um metodo valida no prototype , se ele for undefined,retorna false
//se o tamanho do cpf for diferente de 11 , return false,senao return true

function ReceberCpf(cpf){
    this.cpf =_cpf
    const cpf = '705.484.450-52'
}
Object.defineProperty(ReceberCpf.prototype,'cpf',{
    get:function (){
        return this.cpf.prototype.slice(0,-2)
    }
})
console.log(ReceberCpf)