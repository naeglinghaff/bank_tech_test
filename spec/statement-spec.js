describe('Statement', () => {
  let statement;
  let transaction;
  let baseDate;

  beforeEach( () => {
    Statement = require('../src/statement');
    Transaction = require('../src/transaction');
    statement = new Statement;
  // mocks the date
    jasmine.clock().install();
    baseDate = new Date(2020, 2, 22);
    jasmine.clock().mockDate(baseDate);
  })

  describe('initializes', () => {
    it('with an empty array', () => {
      expect(statement.transactions).toBeInstanceOf(Array);
    })
  })

  describe('format', () => {
     it('returns a string with transaction properites', () => {
       //stubs transaction object
       let fakeTransaction = new Transaction;
       fakeTransaction._value = "15.00";
       fakeTransaction._current_balance = "20.00";
       statement.transactions.push(fakeTransaction);
       expect(statement.format()).toEqual("   date || credit || debit || balance\nSun Mar 22 2020 15.00 20.00\n");
     })
  })

  afterEach( () => {
    jasmine.clock().uninstall();
  })
})
