/// <reference path = '../../support/index.d.ts/'>

describe('LOGIN | User login', () => {

  it('INVALID USER | Validation check', () => {
    cy.log('**Invalid user login validation check**');
    cy.login('newUser');
    cy.get("span[class='ng-star-inserted']").should('contain.text', 'Sorry :( Credentials Dont Match!');
  })

  it('ADMIN | Admin Login', () => {
    cy.login('admin');
  });
});

