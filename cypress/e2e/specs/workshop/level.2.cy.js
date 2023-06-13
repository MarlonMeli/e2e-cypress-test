describe('EMON', () => {

  beforeEach(() => {
    cy.viewport(1920,1080);
      cy.visit('https://mercadolibre.com.ar');
  });
  //data-link-id="login"

  it('Go to editor masivo', () => {
    cy.get('#nav-header-menu > a:nth-child(2)').click();
    cy.get('.andes-form-control__field').type('TETE7160223');
    cy.get('.login-form__submit').click();
    cy.waitForReact();
    cy.contains('Ingresá tu contraseña de Mercado Libre');
    cy.get('[data-testid="password"]').type('ogr~bg|4ist9xf9d');
    cy.get('[data-testid="action-complete"]').click();
    cy.waitForReact();
    cy.visit('https://mercadolibre.com.ar/publicaciones/editor-masivo');
    cy.waitForReact();
    cy.get('.andes-form-control__field').type('1149142594{enter}');
  }); 
});