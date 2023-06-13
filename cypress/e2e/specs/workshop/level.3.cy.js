
describe('EMON', () => {

  beforeEach(() => {
      cy.viewport(1920,1080);
      cy.visit('https://mercadolibre.com.ar');
  });

  it('Mercadolibre is there', () => {
      cy.contains('Ingresa');
  });

  it('filters_and_columns', () => {
      cy.Login().wait(500);

      cy.visit('https://www.mercadolibre.com.ar/publicaciones/editor-masivo/');
      cy.wait(1000);

      cy.get('.sc-bulk-items-quantity__text').then(($quantity) => {
          const total = parseInt($quantity.text());
          cy.contains('Filtros').parent().click();
          cy.wait(1000);

          cy.get('#ACTIVE').then(($activeCheck) => {
              $activeCheck.click();
              cy.contains('Aplicar').then(($applyBtn) => {
                $applyBtn.click();
                cy.wait(3000);
                cy.get('.sc-bulk-items-quantity__text').then(($quantity) => {
                    const itemsActive = parseInt($quantity.text());
                    cy.log(itemsActive);
                    cy.contains('Filtros').parent().click();
                    cy.wait(3000);
                    cy.get('#ACTIVE').click();
                    cy.get('#INACTIVE').then(($inactiveCheck) => {                          
                      $inactiveCheck.click();
                      cy.wait(1000);
                      cy.contains('Aplicar').then(($applyBtn) => {
                        $applyBtn.click();
                        cy.wait(5000);
                        cy.get('.sc-bulk-items-quantity__text').then(($quantity) => {
                            const itemsInactive = parseInt($quantity.text());
                            cy.log(itemsInactive);
                            cy.log(itemsActive);
                            cy.log(total);
                            expect(total).eq(itemsActive + itemsInactive);
                        });
                      });
                    });
                });
              });
          });
      });  
  });
});
