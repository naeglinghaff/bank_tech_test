class Statement {
  constructor() {
    this.transactions = [];
  }

  format() {
    let row = "date || credit || debit || balance\n"
    for(var i = 0; i < this.transactions.length; i ++){
      row += this.transactions[i]._created_at + " " + this.transactions[i]._value + " " + this.transactions[i]._balance;
    }
  }
}
module.exports = Statement;
