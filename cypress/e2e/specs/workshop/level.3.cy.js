describe('EMON LEVEL 3', () => {

  beforeEach(() => {
      cy.viewport(1920,1080);
      cy.visit('https://mercadolibre.com.ar');
  });

  it('Test: itemsActive + itemsInactive = totalItems', () => {
      let activas;
      let inactivas;
      let total;
      cy.Login();
      cy.waitForReact();
      cy.visit('https://mercadolibre.com.ar/publicaciones/editor-masivo');
      cy.totalItems().then(totalItems => {
        total = get_number(totalItems);
        cy.log("total = " + total);

        cy.activeItems().then(activeItems => {
          activas = get_number(activeItems);
          cy.log("activas = " + activas);
          
          cy.inactiveItems().then(inactiveItems => {
          inactivas = get_number(inactiveItems);
          cy.log("inactivas = " + inactivas);

          expect(activas + inactivas).eq(total);
          
          });
        });
      })
  }); 
});

function get_number(text){
  var number = Number((text.split(' '))[0]);
  return number;
};
