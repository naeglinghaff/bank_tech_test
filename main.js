var Transaction = require('./src/transaction.js');
var BankAccount = require('./src/bank-account.js');

"use strict";

let account = new BankAccount();
account.addMoney(100);
account.withdraw(50);
account.printStatement();

module.exports = {
  Transaction : Transaction,
  BankAccount : BankAccount
};
