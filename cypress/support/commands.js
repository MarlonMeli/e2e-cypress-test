const { user, password } = require('../../config');
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Login', () => {
    // Página principal 
    cy.waitForReact();
    cy.get('#nav-header-menu').contains('Ingresá').click();

    //Página login
    cy.waitForReact();
    cy.contains('Ingresá tu e‑mail, teléfono o usuario de Mercado Libre');
    cy.get('[data-testid="user_id"]').type(user);
    cy.get('.andes-button').contains('Continuar').click();

    cy.waitForReact();
    cy.contains('Ingresá tu contraseña de Mercado Libre');
    cy.get('[data-testid="password"]').type(password);
    cy.get('[data-testid="action-complete"]').click();
});

Cypress.Commands.add('waitForReact', () => {
    cy.wait(500);
});

Cypress.Commands.add('activeItems', () => {
    cy.filtersClick();
    cy.get('#ACTIVE').click();
    cy.aplicateClick();
    cy.filtersClick();
    cy.aplicateClick();
    return cy.get('.sc-bulk-items-quantity__text').invoke('text');
});

Cypress.Commands.add('inactiveItems', () => {
    cy.filtersClick();
    cy.get('#ACTIVE').click();
    cy.waitForReact();
    cy.get('#INACTIVE').click();
    cy.aplicateClick();
    cy.filtersClick();
    cy.aplicateClick();
    return cy.get('.sc-bulk-items-quantity__text').invoke('text');
});

Cypress.Commands.add('totalItems', () => {
    return cy.get('.sc-bulk-items-quantity__text').invoke('text');
});

Cypress.Commands.add('filtersClick', () => {
    cy.waitForReact();
    cy.get('[type="button"]').contains('Filtros').click();
    cy.waitForReact();
});

Cypress.Commands.add('aplicateClick', () => {
    cy.waitForReact();
    cy.get('.andes-button').contains('Aplicar').click();
    cy.waitForReact();
});

Cypress.Commands.add('QuitFilters', () => {
    cy.waitForReact();
    cy.filtersClick();
    cy.get('#INACTIVE').click();
    cy.aplicateClick();
    cy.filtersClick();
    cy.aplicateClick();
    cy.waitForReact();
});