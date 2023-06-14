describe('EMON LEVEL 3', () => {

  beforeEach(() => {
      cy.viewport(1920,1080);
      cy.visit('https://mercadolibre.com.ar');
  });

  it('...', () => {
      // Level Three
      cy.Login();
      cy.waitForReact();
      cy.visit('https://mercadolibre.com.ar/publicaciones/editor-masivo');
      cy.waitForReact();
      cy.contains('Filtros');
      cy.get('[type="button"]').contains('Filtros').click();
      cy.waitForReact();
      cy.get('[id="ACTIVE"]').click();
      cy.get('[id="INACTIVE"]').click();
      cy.get('.andes-button').contains('Aplicar').click();
      cy.waitForReact();
      cy.get('.sc-bulk-items-quantity__text').then($totalItems => {
        const items = $totalItems.text();
        cy.log(items);
        expect(items).eq('562 publicaciones')
      })
  }); 
});
