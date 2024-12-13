# 🌐 NEONVAULT BANK AI  
**Onde o futuro encontra o dinheiro**  

---

## **Descrição**  
Bem-vindo ao **NEONVAULT BANK AI**, um sistema bancário moderno e inovador, projetado para simular e gerenciar operações financeiras com segurança, eficiência e tecnologia de ponta.  

### **Principais características:**  
- Gestão de contas bancárias (Corrente e Poupança).  
- Operações como criação, consulta, edição, exclusão e transações financeiras.  
- Aplicação prática de conceitos avançados de **Programação Orientada a Objetos (POO)**:  
  - **Classes, Objetos e Interfaces**  
  - **Herança e Polimorfismo**  
  - **Classes Abstratas**  
  - **Modificadores de Acesso**  

Nosso objetivo é oferecer uma plataforma educativa e funcional, onde a experiência do usuário e o aprendizado técnico caminham lado a lado.  

---

## **Diagrama de Classes**  
O sistema **NEONVAULT BANK AI** foi projetado com uma arquitetura baseada em POO.  

```mermaid
classDiagram
    class Conta {
      - numero: number
      - agencia: number
      - tipo: number
      - titular: string
      - saldo: number
      + sacar(valor: number): boolean
      + depositar(valor: number): void
      + visualizar(): void
    }

    class ContaCorrente {
      - limite: number
      + sacar(valor: number): boolean
      + visualizar(): void
    }

    class ContaPoupanca {
      - aniversario: number
      + visualizar(): void
    }

    Conta <|-- ContaCorrente
    Conta <|-- ContaPoupanca

````

## Tecnologias Utilizadas
Node.js v16+
TypeScript v5+


# 🚀 Funcionalidades do Sistema Bancário

---

## ⚙️ **Gestão de Contas**

- **Criar Conta**  
  Adicione contas bancárias do tipo **Corrente** ou **Poupança**.

- **Listar Contas**  
  Visualize todas as contas cadastradas no sistema.

- **Buscar Conta**  
  - **Por número**: Localize uma conta específica usando o número da conta.  
  - **Por nome**: Encontre contas associadas ao nome do titular.

- **Atualizar Conta**  
  Altere informações de uma conta existente.

- **Excluir Conta**  
  Remova contas do sistema de forma definitiva.

---

## 💰 **Operações Financeiras**

- **Depósito**  
  Adicione fundos a uma conta bancária.

- **Saque**  
  Retire valores de uma conta, respeitando o saldo e os limites disponíveis.

- **Transferência**  
  Movimente dinheiro entre contas do tipo **Corrente** e/ou **Poupança**.


*****************************************************
*                                                   *
*                ✨  NEONVAULT BANK AI  ✨         *
*          ** Onde o futuro encontra o dinheiro **  *
*                                                   *
*****************************************************
*                                                   *
*            1️⃣  Criar Conta                          *
*            2️⃣  Listar todas as Contas               *
*            3️⃣  Buscar Conta por Número              *
*            4️⃣  Atualizar Dados da Conta             *
*            5️⃣  Apagar Conta                         *
*            6️⃣  Realizar Saque                       *
*            7️⃣  Fazer Depósito                       *
*            8️⃣  Transferir Valores entre Contas      *
*            9️⃣  Visualizar Extrato                   *
*            🔟  Sair                                 *
*                                                   *
*****************************************************
*       💡 Segurança cibernética de última geração 💡  *
*****************************************************





