Cypress.Commands.add('addStock', (stockAdd, productIndex, isProductVariation) => {
    cy.get('.fixedDataTableRowLayout_rowWrapper').eq(productIndex).get('.sc-bulk-cell__number').parentsUntil('.sc-bulk-cell-container').parent().then(($cellDataContainerParent) => {
        const numberStock = parseInt($cellDataContainerParent.find('.sc-bulk-cell__number').find('.sc-bulk-cell__text').html());
        cy.wait(500);
        if (isProductVariation) {
            cy.get('.fixedDataTableRowLayout_rowWrapper').eq(productIndex).get('.sc-bulk-cell__variation').eq(productIndex).click().wait(3000);
            cy.get('.fixedDataTableRowLayout_rowWrapper').eq(productIndex).get('.sc-bulk-cell__number').eq(productIndex + 1).as('firstCell');                            
        } else {
            cy.get('.fixedDataTableRowLayout_rowWrapper').eq(productIndex).get('.sc-bulk-cell__number').eq(productIndex).as('firstCell');  
        }
        cy.get('@firstCell').click().wait(500).click();
        cy.get('@firstCell').find('.andes-form-control__field').as('inputCell');
        cy.get('@inputCell').then(($inputCell) => {
            cy.get('@inputCell').clear().type(parseInt($inputCell.val()) + stockAdd).then(() => {
                cy.contains('publicaciones').click();
                cy.contains('Guardar').wait(3000).click().wait(10000);
                cy.reload().wait(2500);  
                cy.get('.fixedDataTableRowLayout_rowWrapper').eq(productIndex).get('.sc-bulk-cell__number').eq(productIndex).should('have.text', numberStock + stockAdd);
            });
        });
    });
});
