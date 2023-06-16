const { baseUrl } = require("../../../../config");
beforeEach(() => {
  cy.viewport(1920, 1080);
  cy.visit("https://mercadolibre.com.ar");
});
describe("Level Three", () => {
  it("active and inactive filters", () => {
    cy.Login();
    cy.waitForReact();
    cy.visit(baseUrl);
    cy.waitForReact();
    cy.get(".sc-bulk-items-quantity__text").then(($el) => {
      const text = $el.text();
      const number = text.replace("publicaciones", "").trim();
      cy.wrap(number).as("total");
    });
    cy.wait(3000)
    cy.get(".sc-bulk-hover-button").contains("Filtros").click();
    cy.get("#ACTIVE").click();
    cy.get(".andes-button").contains("Aplicar").click();
    cy.wait(5000);
    cy.get(".sc-bulk-items-quantity__text").then(($el) => {
      const text = $el.text();
      const number = text.replace("publicaciones", "").trim();
      cy.wrap(number).as("active");
    });
    cy.get(".sc-bulk-hover-button").contains("Filtros").click();
    cy.get("#ACTIVE").click();
    cy.get("#INACTIVE").click();
    cy.get(".andes-button").contains("Aplicar").click();
    cy.wait(5000);
    cy.get(".sc-bulk-items-quantity__text").then(($el) => {
      const text = $el.text();
      const number = text.replace("publicaciones", "").trim();
      cy.wrap(number).as("inactive");
    });
    cy.get("@total").then((total) => {
      cy.get("@active").then((active) => {
        cy.get("@inactive").then((inactive) => {
          const sum = parseInt(active) + parseInt(inactive);
          expect(parseInt(total)).to.equal(sum);
        });
      });
    });
  });
});