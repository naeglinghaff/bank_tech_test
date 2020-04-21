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
    expect(transaction.created_at).toEqual(baseDate);
  })

  afterEach( () => {
    jasmine.clock().uninstall();
  })

})
