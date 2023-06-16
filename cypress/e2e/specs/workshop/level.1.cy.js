describe('EMON LEVEL 1', () => {

  beforeEach(() => {
    cy.viewport(1920,1080); //Tamaño de pantalla
    cy.visit('https://mercadolibre.com.ar');//Pagina a testear
  });

  it('Visit and Search product', () => {
    // Level One
    cy.get('.nav-search-input').type('Iphone 14');
    cy.get('.nav-search-btn').click();
    cy.wait(2000);
    cy.get('.ui-search-breadcrumb__title').contains('Iphone 14');
  });   
});