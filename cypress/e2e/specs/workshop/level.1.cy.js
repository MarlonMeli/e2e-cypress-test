describe('EMON', () => {

  beforeEach(() => {
    cy.viewport(1920,1080);
    cy.visit('https://mercadolibre.com.ar');
  });

  it('Mercadolibre is there', () => {
    cy.contains('Ingresa');
  });

  it('Search Iphone', () => {
    cy.get('.nav-search-input').type('Iphone 14');
    cy.get('.nav-search-btn').click();
    cy.get(".ui-search-breadcrumb__title").should("contain", "Iphone 14");
  });
});