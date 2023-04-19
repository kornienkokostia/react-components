describe('SearchBar', () => {
  it('dispatches setSearch action on Enter key press', () => {
    cy.visit('http://localhost:5173/'); // assuming the component is rendered on the '/' route

    cy.get('.search-bar-input').type('avengers{enter}');

    cy.window().its('store').invoke('getState').its('movies.search').should('eq', 'avengers');
  });
});
it('Does not do much', () => {
  expect(true).to.equal(true);
});
