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
