describe('Bank Account', () => {
  let account;
  let transaction;

// initializes new bank account
  beforeEach(() => {
    account = require('../src/bank-account.js');
    transaction = require('../src/transaction.js')
  })

  it('should initialise with a balance of 0', () => {
    expect(account._balance).toEqual(0);
  })

  it('should create a new transaction when money is added', () => {
    expect(account.addMoney(100)).toEqual(transaction);
  })
})
