// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// declare namespace Cypress {
//   interface Chainable<Subject> {
//     login(email: string, password: string): void;
//   }
// }
//

Cypress.Commands.add('login', (userType, email, password) => {
  const types = {
    admin: {
      email: 'admin@admin.com',
      password: 'admin123',
    },

    newUser: {
      email: 'invalid@test.com',
      password: 'test123'
    }
  };

  const user = types[userType];
  cy.visit('/auth/login');
  cy.log('**Logging In**');
  cy.get("[formcontrolname='email']").type(user.email);
  cy.get("[type='password']").type(user.password);
  cy.datacy('login').click();

});

Cypress.Commands.add('datacy', (value) => {
  cy.get(`[data-cy="${value}"]`);
})
