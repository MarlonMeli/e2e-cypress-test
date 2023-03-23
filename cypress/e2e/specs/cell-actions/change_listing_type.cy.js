const { baseUrl } = require("../../../../config");

const EMON_ROUTE = 'https://www.mercadolibre.com.ar/publicaciones/editor-masivo/';
const PRODUCT_INDEX = 0;


describe('EMON | Change Stock Column', () => {
    beforeEach(() => {
        cy.viewport(1920,1080);
        cy.visit(baseUrl);
    });

    it('Mercadolibre | Should change classic listing type to premium', () => {
        cy.Login().wait(500); 
        cy.visit(EMON_ROUTE);

        cy.get('.fixedDataTableRowLayout_rowWrapper').get('.sc-bulk-cell__text--listing_type_config').parent().eq(PRODUCT_INDEX).then(($comment) => {
            cy.log($comment);
            cy.get('.fixedDataTableRowLayout_rowWrapper').get('.sc-bulk-cell__text--listing_type_config').parent().eq(PRODUCT_INDEX).trigger('mouseover').wait(3000).click();
            cy.focused().click();
            cy.get('.andes-list__item-with-secondary').click();
        });
        
        /* cy.get('.fixedDataTableRowLayout_rowWrapper').eq(PRODUCT_INDEX).get('.sc-bulk-cell__variation').then(($cellVariationContainer) => {
            const isProductVariation = $cellVariationContainer.find('.sc-ui-chevron--down');
            if (isProductVariation.length > 0) {
                cy.addStock(STOCK_TO_ADD, PRODUCT_INDEX, true);
            } else {
                cy.addStock(STOCK_TO_ADD, PRODUCT_INDEX, false);
            }
        }); */
    });
});
