(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.constructionModule = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var BankAccount = require('./src/bank-account.js');

module.exports = {
  BankAccount : BankAccount
};

},{"./src/bank-account.js":2}],2:[function(require,module,exports){
let Transaction = require('./transaction')
let Statement = require('./statement')

class BankAccount {
  constructor() {
    this._balance = 0;
    this._statement = new Statement;
  }

  addMoney(amount){
    this._balance += amount;
    let transaction = new Transaction(amount, this._balance, true);
    this._statement.transactions.push(transaction);
    return transaction;
  }

  withdraw(amount){
    if(this._balance === 0) {
      throw ("Error: insufficient funds");
    } else {
      this._balance -= amount;
      let transaction = new Transaction(amount, this._balance, false);
      this._statement.transactions.push(transaction);
      return transaction;
    }
  }

  printStatement(){
    return this._statement.format();
  }
}

module.exports = BankAccount;

},{"./statement":3,"./transaction":4}],3:[function(require,module,exports){
class Statement {
  constructor() {
    this.transactions = [];
  }

  format() {
    let row = "||            date || credit || debit || balance ||\n"
      for(var i = 0; i < this.transactions.length; i ++){
        if(this.transactions[i]._credit){
          row += " || " + this.transactions[i]._created_at + " || " + this.transactions[i]._value + " || " + "   || " + this.transactions[i]._current_balance + " || " + "\n";
      } else {
          row += " || " + this.transactions[i]._created_at + " || " +  "   || " + this.transactions[i]._value + " || " +  this.transactions[i]._current_balance + " || " + "\n";
      }
    }
    return row;
  }
}
module.exports = Statement;

},{}],4:[function(require,module,exports){
class Transaction {

  constructor(amount, current_balance, credit) {
    this._created_at = new Date().toDateString();
    this._value = (Math.round(amount * 100) / 100).toFixed(2);
    this._current_balance = (Math.round(current_balance * 100) / 100).toFixed(2);
    this._credit = credit;
  }
}

module.exports = Transaction;

},{}]},{},[1])(1)
});
