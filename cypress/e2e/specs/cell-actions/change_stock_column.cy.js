const { baseUrl } = require("../../../../config");

const EMON_ROUTE = 'https://www.mercadolibre.com.ar/publicaciones/editor-masivo/';
const STOCK_TO_ADD = 1;
const PRODUCT_INDEX = 0;


describe('EMON | Change Stock Column', () => {
    beforeEach(() => {
        cy.viewport(1920,1080);
        cy.visit(baseUrl);
    });

    it('Mercadolibre | Should login on homepage go to EMON and add stock of a simple product or product variation', () => {
        cy.Login().wait(500); 
        cy.visit(EMON_ROUTE);
        
        cy.get('.fixedDataTableRowLayout_rowWrapper').eq(PRODUCT_INDEX).get('.sc-bulk-cell__variation').then(($cellVariationContainer) => {
            const isProductVariation = $cellVariationContainer.find('.sc-ui-chevron--down');
            if (isProductVariation.length > 0) {
                cy.addStock(STOCK_TO_ADD, PRODUCT_INDEX, true);
            } else {
                cy.addStock(STOCK_TO_ADD, PRODUCT_INDEX, false);
            }
        });
    });
});
