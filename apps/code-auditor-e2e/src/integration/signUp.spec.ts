/// <reference path = '../../support/index.d.ts/'>

import { UserPage } from '../pageObject/userPage'
import { SignUpPage } from '../pageObject/signUpPage';
import { sideNav } from '../support/util';

const roleOption = 'QA';
const signUpForm = ['firstName', 'lastName', 'email', 'password', 'confirmPasswd']

describe('ADU-01 | User module', () => {
  it('Form Validation', () => {
    cy.visit('/');
    cy.log('**Validation check for sign up form**');
    cy.datacy('signUp').click();
    signUpForm.forEach(ele => {
      cy.datacy(ele).find('input').focus().blur().then( $el => {
        expect($el).to.have.attr('aria-invalid', 'true');
      });
    });
    cy.datacy('dropDown').focus().blur().should('have.attr', "aria-invalid", "true");
  });

  it.only('ADU-01-A | User Signing Up', () => {
    cy.visit('/');
    cy.datacy('signUp').click();
    SignUpPage.userSignUP(roleOption);
  });

  it('Approve the New Signed up user', () => {
    cy.login('admin');
    sideNav('pendingApproval');
    UserPage.approveUser();
    sideNav('logOut');
  });

  it('Log in to application using Approved user credential', () => {
    cy.fixture('signUpData').then(data => {
      cy.login('newUser', data.email, data.password);
    });
    sideNav('logOut');
  });
});
