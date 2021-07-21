import { role } from '../support/util';

export class SignUpPage {
  static userSignUP(roleOption:string) {
    cy.log('**User Signing Up**');
    cy.fixture('signUpData').then(data => {
      const userdata: Array<any> = [['firstName',data.firstName],['lastName',data.lastName],['email',data.email],
        ['password',data.password],['confirmPasswd',data.password]];
      userdata.forEach(key => {
        cy.datacy(key[0]).type(key[1]);
      });
    });
    role('dropDown', roleOption, 'registerBtn');
  }
}


