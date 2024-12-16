import readlinesync = require("readline-sync");
import { ContaController } from "./src/controller/ContaController";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { colors } from './src/util/color';


export function main() {
    let opcao, numero, agencia, tipo, saldo, limite, aniversario: number, numeroDestino, valor: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupanca'];

    // Criando um Objeto da Classe ContaController
    const contas = new ContaController();

   //Novas Instâncias da Classe ContaCorrente (Objetos)
   contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 1, 'Amanda Magro', 1000000.00, 100000.00));
   contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 4578, 1, 'João da Silva', 1000.00, 100.00));

   // Novas Instâncias da Classe ContaPoupança (Objetos)
   contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5789, 2, "Geana Almeida", 10000, 10));
   contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5698, 2, "Jean Lima", 15000, 15));
    
    while (true) {
        // Limpa o console antes de exibir o menu
        console.clear();

        // Cor de fundo escura para o título e bordas
        console.log(`${colors.bg.blackbright}${colors.fg.white}*****************************************************${colors.reset}`);
        console.log(`${colors.bg.blackbright}${colors.fg.white}*                                                   *${colors.reset}`);
        console.log(`${colors.bg.blue}${colors.fg.white}*                🌐  NEONVAULT BANK AI  🌐         *${colors.reset}`);
        console.log(`${colors.bg.blue}${colors.fg.white}*          ** Onde o futuro encontra o dinheiro **  *${colors.reset}`);
        console.log(`${colors.bg.blackbright}${colors.fg.white}*                                                   *${colors.reset}`);
        console.log(`${colors.bg.blackbright}${colors.fg.white}*****************************************************${colors.reset}`);
        console.log(`${colors.bg.green}${colors.fg.white}*                                                   *${colors.reset}`);
        
        // Opções com fundo azul escuro e texto branco
        console.log(`${colors.bg.blue}${colors.fg.white}*            1️⃣  Criar Conta                          *${colors.reset}`);
        console.log(`${colors.bg.blue}${colors.fg.white}*            2️⃣  Listar todas as Contas               *${colors.reset}`);
        console.log(`${colors.bg.blue}${colors.fg.white}*            3️⃣  Buscar Conta por Número              *${colors.reset}`);
        console.log(`${colors.bg.blue}${colors.fg.white}*            4️⃣  Atualizar Dados da Conta             *${colors.reset}`);
        console.log(`${colors.bg.blue}${colors.fg.white}*            5️⃣  Apagar Conta                         *${colors.reset}`);
        console.log(`${colors.bg.blue}${colors.fg.white}*            6️⃣  Realizar Saque                       *${colors.reset}`);
        console.log(`${colors.bg.blue}${colors.fg.white}*            7️⃣  Fazer Depósito                       *${colors.reset}`);
        console.log(`${colors.bg.blue}${colors.fg.white}*            8️⃣  Transferir Valores entre Contas      *${colors.reset}`);
        console.log(`${colors.bg.blue}${colors.fg.white}*            9️⃣  Visualizar Extrato                   *${colors.reset}`);
        console.log(`${colors.bg.blue}${colors.fg.white}*            🔟  Sair                                 *${colors.reset}`);
        console.log(`${colors.bg.green}${colors.fg.white}*                                                   *${colors.reset}`);
        console.log(`${colors.bg.green}${colors.fg.white}*****************************************************${colors.reset}`);
        
        // Fundo em vermelho para destacar a seção de segurança
        console.log(`${colors.bg.redbright}${colors.fg.white}*       💡 Segurança cibernética de última geração 💡  *${colors.reset}`);
        console.log(`${colors.bg.redbright}${colors.fg.white}*****************************************************${colors.reset}`);

        // Solicita a opção do usuário
        opcao = readlinesync.questionInt("\nEscolha uma opção: ");

        if (opcao === 10) {
            console.log("\nObrigado por usar o NeonVault Bank AI!");
            sobre();
            break; // Encerra o loop e finaliza o programa
        }

        // Processa a opção escolhida
        switch (opcao) {
            case 1:
                console.log(`${colors.bg.green}${colors.fg.white}\n\n👉 Criar Conta\n${colors.reset}`);
                    console.log("Digite o Número da Agência: ");
                    agencia = readlinesync.questionInt('');

                    console.log("Digite o Nome do Titular: ");
                    titular = readlinesync.question('');

                    console.log("escolha o Tipo da Conta: ");
                    tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false}) + 1;

                    console.log("Digite o Saldo da Conta: ");
                    saldo = readlinesync.questionFloat('');

                    switch(tipo){
                        case 1:
                            console.log("Digite o Limite da Conta: ");
                            limite = readlinesync.questionFloat('');
                            contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite))
                        break;
                        case 2:
                            console.log("Digite o Dia do Aniversário da Poupança: ");
                            aniversario = readlinesync.questionInt('');
                            contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario))
                        break;
                    }

                keyPress()
                break;
            case 2:
                console.log(`${colors.bg.green}${colors.fg.white}\n\n👉 Listar todas as Contas\n${colors.reset}`);
                contas.listarTodas();
                keyPress()
                break;
                
            case 3:
                console.log(`${colors.bg.green}${colors.fg.white}\n\n👉 Buscar Conta por Número\n${colors.reset}`);
                
                console.log("Digite o número da conta:");
                    numero = readlinesync.questionInt('');

                    contas.procurarPorNumero(numero);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, 
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);

                    console.log("Digite o número da conta:");
                    numero = readlinesync.questionInt('');

                    let conta = contas.buscarNoArray(numero);

                    if (conta !== null){

                        console.log("Digite o novo Número da Agência: ");
                        agencia = readlinesync.questionInt('');

                        console.log("Digite o novo Nome do Titular: ");
                        titular = readlinesync.question('');

                        console.log("Digite o novo Saldo da Conta: ");
                        saldo = readlinesync.questionFloat('');

                        tipo = conta.tipo;

                        switch(tipo){
                            case 1:
                                console.log("Digite o novo Limite da Conta: ");
                                limite = readlinesync.questionFloat('');
                                contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite))
                            break;
                            case 2:
                                console.log("Digite o novo Dia do Aniversário da Poupança: ");
                                aniversario = readlinesync.questionInt('');
                                contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario))
                            break;
                        }
                    
                    }else{
                        console.log("Conta não encontrada!");
                    }
                keyPress()
                break;
            case 5:
                console.log(`${colors.bg.green}${colors.fg.white}\n\n👉 Apagar Conta\n${colors.reset}`);
                
                console.log("Digite o número da conta:");
                numero = readlinesync.questionInt('');

                contas.deletar(numero);

                keyPress()
                break;
            case 6:
                console.log(`${colors.bg.green}${colors.fg.white}\n\n👉 Realizar Saque\n${colors.reset}`);
                
                console.log("Digite o numero da conta: ");
                numero = readlinesync.questionInt("");

                console.log("Digite o valor do saque: ");
                valor = readlinesync.questionFloat("");

                contas.sacar(numero, valor);
                
                keyPress()
                break;
            case 7:
                console.log(`${colors.bg.green}${colors.fg.white}\n\n👉 Fazer Depósito\n${colors.reset}`);
                
                console.log("Digite o numero da conta: ");
                numero = readlinesync.questionInt("");

                console.log("Digite o Valor do deposito: ");
                valor = readlinesync.questionFloat("");

                contas.depositar(numero, valor);
                keyPress()
                break;
            case 8:
                console.log(`${colors.bg.green}${colors.fg.white}\n\n👉 Transferir Valores entre Contas\n${colors.reset}`);
                
                console.log("Digite o numero da conta de origem: ");
                numero = readlinesync.questionInt("");

                console.log("Digite o numero da conta de destino: ");
                numeroDestino = readlinesync.questionInt("");

                console.log("Digite o numero da conta: ");
                valor = readlinesync.questionFloat("");

                contas.transferir(numero, numeroDestino, valor);
                keyPress()
                break;
            case 9:
                console.log(`${colors.bg.green}${colors.fg.white}\n\n👉 Visualizar Extrato\n${colors.reset}`);
                keyPress()
                break;
            default:
                console.log(`${colors.bg.redbright}${colors.fg.white}\n❌ Opção Inválida! Por favor, tente novamente.\n${colors.reset}`);
                keyPress()
                break;
        }

        // Pausa antes de retornar ao menu
        readlinesync.question("\nPressione ENTER para continuar...");
    }
}


function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

/* Função com informações sobre o projeto */
export function sobre(): void {
    console.log(`${colors.bg.blackbright}${colors.fg.white}\n*****************************************************${colors.reset}`);
    console.log(`${colors.bg.blackbright}${colors.fg.white}*       Projeto Desenvolvido por: Eliseu F Souza      *${colors.reset}`);
    console.log(`${colors.bg.blackbright}${colors.fg.white}*       Contato: eliseu.de1souza@gmail.com           *${colors.reset}`);
    console.log(`${colors.bg.blackbright}${colors.fg.white}*       GitHub: github.com/EliseuZz            *${colors.reset}`);
    console.log(`${colors.bg.blackbright}${colors.fg.white}*****************************************************${colors.reset}`);
}

// Executa o programa
main();
