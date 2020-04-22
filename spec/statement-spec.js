describe('Statement', () => {
  let statement;
  let transaction;
  let baseDate;
  let account;

  beforeEach( () => {
    Statement = require('../src/statement');
    Transaction = require('../src/transaction');
    statement = new Statement;
  // mocks the date
    jasmine.clock().install();
    baseDate = new Date(2020, 2, 22);
    jasmine.clock().mockDate(baseDate);
    //stubs transaction object
    let fakeTransaction = new Transaction;
    fakeTransaction._value = "15.00";
    fakeTransaction._current_balance = "20.00";
    statement.transactions.push(fakeTransaction);
  })

  describe('initializes', () => {
    it('with an empty array', () => {
      expect(statement.transactions).toBeInstanceOf(Array);
    })
  })

  describe('format', () => {
     it('returns a string with transaction properites', () => {
       expect(statement.format()).toContain("Sun Mar 22 2020");
       expect(statement.format()).toContain("20.00");
       expect(statement.format()).toContain("15.00");
     })

     it('adds a column to the left for a debit transaction', () => {
       expect(statement.format()).toEqual("||            date || credit || debit || balance ||\n || Sun Mar 22 2020 ||    || 15.00 || 20.00 || \n")
     })
  })

  afterEach( () => {
    jasmine.clock().uninstall();
  })
})
