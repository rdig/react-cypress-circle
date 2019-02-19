describe('Claims a username', () => {
  it('Connect to the default webpage', () => {
    cy.visit('/');
  });

  it('Ensure it says React', () => {
    cy.get('[data-test="react-link"]')
      .contains('React');
  });
});
