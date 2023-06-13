describe('EMON', () => {

  beforeEach(() => {
    cy.viewport(1920,1080);
      cy.visit('https://mercadolibre.com.ar');
  });

  it('Mercadolibre is there', () => {
    cy.contains('Ingresa');
  });

  it('Login into Meli', () => {
    cy.Login().wait(500);
    cy.visit('https://mercadolibre.com.ar/publicaciones/editor-masivo');
    cy.wait(1500);
    cy.get('input[placeholder="Buscar por # o título"]').type('hola').type('{enter}');
    cy.contains('Remera Test Talle H1 Hola /h1 - Check');
  });
});