# Bank Account Tech Test

## The Challenge...

To TDD a bank account that can accept withdrawals, deposits and create bank statements. As follows:

* You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

## Extra Criteria:

Given a client makes a deposit of 1000 on 10-01-2012
And a deposit of 2000 on 13-01-2012
And a withdrawal of 500 on 14-01-2012
When she prints her bank statement
Then she would see

date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00


## The Process

Setup
Planning
Feature Test
Unit Test
Red, Green, Refactor

## Plan and Model

To start with I began to think about all of the things this bank account would need to be able to do:

• Track the total amount of money (balance) • Increase the total when a deposit is made • Decrease the total when a withdrawal is made • Track the dates and transaction history • Output a formatted statement of the accounts transaction history

| Object     | State         | Behaviour |
| ------------- |:-------------:| -----:|
| BankAccount    | balance, dates of deposits | addMoney(x), withdrawMoney(x)  |
| BankStatement   | refers to Account state     |   printStatement |

BankAccount Class
 • Responsible for tracking the transactions and updating the balance accordingly

Statement Class
 • Responsible for outputting statement data to a readable format into the console
