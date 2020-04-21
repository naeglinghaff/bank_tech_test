describe('Transaction', () => {
  let Transaction;

  beforeEach(() => {
    Transaction = require('../src/transaction.js')
    jasmine.clock().install();
  })

  it('initializes with a timestamp', () => {
    var baseDate = new Date(2020, 2, 12);
    jasmine.clock().mockDate(baseDate);
    transaction = new Transaction;
    expect(transaction._created_at).toEqual(baseDate);
  })

  it('initializes with a value', () => {
    transaction = new Transaction(25);
    expect(transaction._value).toEqual("25.00");
  })

  afterEach( () => {
    jasmine.clock().uninstall();
  })

})
