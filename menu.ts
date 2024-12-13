import readlinesync = require("readline-sync");
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { colors } from './src/util/color';


export function main() {
    let opcao: number;

    // Contas Correntes
    const cc1 = new ContaCorrente(3, 789, 1, "Andressa", 100000, 1000);
    cc1.visualizar();

    // Saque na Conta Corrente
    cc1.sacar(100500);
    cc1.visualizar();

    // Depósito na Conta Corrente
    cc1.depositar(2000);
    cc1.visualizar();

   // Contas Correntes
   const cp1 = new ContaPoupanca(4, 789, 2, "Amanda", 10000, 15);
   cp1.visualizar();

   // Saque na Conta Poupança
   cp1.sacar(500);
   cp1.visualizar();

   // Depósito na Conta Poupança
   cp1.depositar(2000);
   cp1.visualizar();

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
                keyPress()
                break;
            case 2:
                console.log(`${colors.bg.green}${colors.fg.white}\n\n👉 Listar todas as Contas\n${colors.reset}`);
                keyPress()
                break;
            case 3:
                console.log(`${colors.bg.green}${colors.fg.white}\n\n👉 Buscar Conta por Número\n${colors.reset}`);
                keyPress()
                break;
            case 4:
                console.log(`${colors.bg.green}${colors.fg.white}\n\n👉 Atualizar Dados da Conta\n${colors.reset}`);
                keyPress()
                break;
            case 5:
                console.log(`${colors.bg.green}${colors.fg.white}\n\n👉 Apagar Conta\n${colors.reset}`);
                keyPress()
                break;
            case 6:
                console.log(`${colors.bg.green}${colors.fg.white}\n\n👉 Realizar Saque\n${colors.reset}`);
                keyPress()
                break;
            case 7:
                console.log(`${colors.bg.green}${colors.fg.white}\n\n👉 Fazer Depósito\n${colors.reset}`);
                keyPress()
                break;
            case 8:
                console.log(`${colors.bg.green}${colors.fg.white}\n\n👉 Transferir Valores entre Contas\n${colors.reset}`);
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
