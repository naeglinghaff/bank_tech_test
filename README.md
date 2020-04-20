# Bank Account Tech Test

Created in JavaScript and Node,  tested with Jasmine, ESLint and Istanbul.

## Running the program

```
npm start
```
Visit localhost:8080 and hit command j to start interacting with the application. Standard commands are:

Make sure you initialise the bank account first, in the examples below I have created my own local 'account'.

```
const account = new BankAccount();
account.addMoney(amount);
account.withdrawMoney(amount);
account.printStatement;
```

## Running the tests

Make sure you have ESlint and Istanbul functioning locally to see the coverage and test the code quality:

```
npm install -g istanbul
npm install eslint --save-dev
```

To run the tests enter:

```
npm test
npx eslint BankAccount.js
```

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

Setup - initialising a git, setting up my jasmine test suite and linter
Planning - modelling the objects and the possible solutions for our requirements
Feature Test - writing the first feature test for initial behaviour
Unit Test - to check each object operates independently of another and reports the expected behaviour
Red, Green, Refactor - write these failing tests, pass them with the simplest solution and then tidy up the code. Repeat.

## Plan and Model

To start with I began to think about all of the things this bank account would need to be able to do:

• Track the total amount of money (balance) • Increase the total when a deposit is made • Decrease the total when a withdrawal is made • Track the dates and transaction history • Output a formatted statement of the account's transaction history

| Object     | State         | Behaviour |
| ------------- |:-------------:| -----:|
| BankAccount | balance, Statement | addMoney(x), withdrawMoney(x), printStatement  |
| Transaction | total_amount, created_at | NA |
| Statement | transactions = []; | formatStatement |

BankAccount Class
 • Responsible for tracking and printing the transactions to the user

Transaction Class
 • Responsible for keeping track of when it was initialised and the amount that was added or subtracted during the transaction

 Statement Class
 • Responsible for formatting the account summary to the user

This rough outline has a class BankAccount which oversees the implmentation of 2 other classes, transactions and statements. Transaction objects are created anytime money is added or withdrawn from the account and they track when and how much was moved. Statement objects are initialised when the user asks to see their account statement, they fetch transaction objects and format them so the BankAccount object can render a formatted response to the user.
