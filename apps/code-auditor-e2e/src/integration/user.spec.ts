/// <reference path = '../../support/index.d.ts/'>
import { UserPage } from '../pageObject/userPage';
import { sideNav } from '../support/util';

const user: Array<any> = [['firstName','Karma'],['lastName','Wangmo'],['email','karma@karma.com'],['password','karma123'],
  ['confirmPasswd','karma123']];

const editDetail: Array<any> = [['editFName', 'Kelzang'], ['editLName', 'Wangchuk'], ['editProfileName', 'Kelzang Wangchuk'],
  ['editEmail', 'kelzang@test.com']];

const roleOption = ['QA', 'FE'];

describe('ADU-01 | User module', () => {
  beforeEach( () => {
    cy.login('admin');
  });

  afterEach(() => {
    sideNav('logOut');
  });

  it('ADU-01-A | Adding user', () => {
    sideNav('addUser');
    UserPage.addUser(user, roleOption);
  });

  it.only('Editing User Details', () => {
    UserPage.editUser(editDetail, roleOption);
  });
});
