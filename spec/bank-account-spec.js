describe('Bank Account', () => {
  let account;

// initializes new bank account
  beforeEach(() => {
    account = require('../src/bank-account.js');
  })

  it('should initialise with a balance of 0', () => {
    expect(account._balance).toEqual(0);
  })
})
