import { matSelect, role } from '../support/util';

export class UserPage {
  static addUser(user:string[], roleOption:string[]){
    cy.log('**Adding new user**');
    user.forEach(key => {
      cy.datacy(key[0]).type(key[1]);
    });
    role('dropDown', roleOption[0], 'addBtn');
    // matSelect('dropDown', roleOption, 'addBtn');
  }

  static approveUser() {
    cy.log('**Admin approving users**');
    cy.login('admin');
    cy.fixture('signUpData').then(data => {
      cy.datacy(`${data.firstName} ${data.lastName}`).find('button').first().click();
    });
  }

  static editUser(editDetail:string[], roleOption:string[]) {
    cy.log('***Editing user***');
    cy.fixture('signUpData').then(data => {
      cy.datacy(`${data.firstName} ${data.lastName}`).find('a').click();
    });
    cy.datacy('editBtn').click();
    editDetail.forEach(key => {
      cy.datacy(key[0]).clear().type(key[1]);
    });
    role('editRole', roleOption[1], 'updateBtn');
  }
}

