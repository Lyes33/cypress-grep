describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  it('fail', () => {
    cy.visit('https://example.cypress.io')
  })

  it('test grep', {tags: 'todo'}, () => {
    cy.visit('https://example.cypress.io')
    expect(true).to.be.true
  })

  it('test grep tow tags', {tags: ['@todo', '@todo1']}, () => {
    cy.visit('https://example.cypress.io')
    expect(true).to.be.true
  })

  it('test grep smoke using or', {tags: '@smoke'}, () => {
    cy.visit('https://example.cypress.io')
    expect(true).to.be.true
  })

  it('test grep sanity using or', {tags: '@sanity'}, () => {
    cy.visit('https://example.cypress.io')
    expect(true).to.be.true
  })
})