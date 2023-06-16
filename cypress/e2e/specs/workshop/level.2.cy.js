describe('EMON LEVEL 2', () => {

  beforeEach(() => {
    cy.viewport(1920,1080);
      cy.visit('https://mercadolibre.com.ar');
  });

  it('Filters in Emon', () => {
    cy.get('[data-link-id=\"login\"]').click();
    cy.get('[data-testid=\"user_id\"]').type('TESTGIUVKO9N');
    cy.get('.login-form__submit').click();
    cy.wait(2000);
    cy.get('[data-testid=\"password\"]').type('fbrcyw4b)n8kg1z=');
    cy.get('.login-form__actions--complete').click();
    cy.wait(2000);
    cy.visit('https://mercadolibre.com.ar/publicaciones/editor-masivo');
    cy.wait(2000);
    cy.get('.andes-form-control__field').type('Otros{enter}');
  }); 
});