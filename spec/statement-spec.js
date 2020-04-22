describe('Statement', () => {
  let statement;

  beforeEach( () => {
    Statement = require('../src/statement');
    statement = new Statement;
  })

  it('initializes with an empty array', () => {
    expect(statement.transactions).toBeInstanceOf(Array);
  })
})
