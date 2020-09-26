
class Cliente{

    nome;
    cpf;
    
}

class ContaCorrente{

    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }
}

const cliente1 = new Cliente();

 cliente1.nome = "Luis";
 cliente1.cpf = 11122233309; 

 const cliente2 = new Cliente();
 cliente2.nome = "Alice";
 cliente2.cpf = 888822233309;

 
const contaCorrenteLuis = new ContaCorrente();
contaCorrenteLuis.saldo = 100;
contaCorrenteLuis.agencia = 1001;

console.log("Valor antes de colocar saldo:  "+contaCorrenteLuis.sacar(50));

// contaCorrenteLuis.saldo = 100;



console.log("Valor após colocar saldo: "+contaCorrenteLuis.saldo);
// console.log(cliente1);
// console.log(cliente2);