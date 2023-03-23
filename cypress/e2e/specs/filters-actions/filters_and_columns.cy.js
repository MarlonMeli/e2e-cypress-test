
describe('EMON', () => {

    beforeEach(() => {
        cy.viewport(1800,1000)
        cy.visit('https://mercadolibre.com.ar');

    });

    it('Mercadolibre is there', () => {
        cy.contains('Ingresa');
    });

    it('filters_and_columns', () => {
        cy.Login();
        cy.contains('Hola Test');

        // Go to Listings page with clicks
/*      
        cy.wait(500);
        cy.get('.nav-header-user-myml').click()
        cy.get('[data-id="listings"]').click()
*/

        // Go to EMON
        cy.visit('https://www.mercadolibre.com.ar/publicaciones/editor-masivo/');
        cy.wait(1000);

        cy.get('.sc-bulk-items-quantity__text').then(($quantity) => {
            const total = $quantity.text();
            
            // Test Filters
            cy.contains('Filtros').parent().click();
            cy.wait(1000);

            // Filter by Active
            cy.get('#ACTIVE').then(($activeCheck) => {
                $activeCheck.click();
                cy.contains('Aplicar').then(($applyBtn) => {
                    $applyBtn.click();

                    cy.get('.sc-bulk-items-quantity__text').then(($quantity) => {
                        const itemsActive = $quantity.text();

                        cy.contains('Filtros').parent().click();
                        cy.wait(1000);

                        // Filter by Inactive
                        cy.get('#INACTIVE').then(($activeCheck) => {
                            $activeCheck.click();
                            cy.contains('Aplicar').then(($applyBtn) => {
                                $applyBtn.click();
                                cy.get('.sc-bulk-items-quantity__text').then(($quantity) => {
                                    const itemsInactive = $quantity.text();
                                    expect(itemsActive + itemsInactive).eq(total)
                                });
                            });
                        });
                    });
                });
            });

            

        });

        
        
    });
});
