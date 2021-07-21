import dayjs from 'dayjs';
const todayDate = dayjs().format('D');
import { sideNav, matSelect, removeAssignee } from '../support/util';

export class TeamPage {
  static addTeam(teamName:string[], teamMembers:string[]) {
    cy.log('**Adding Team**');
    cy.datacy('teamName').type(teamName[0]);
    calendar();
    cy.fixture('signUpData').then( data => {
      matOption('teamLeadOption', `${data.firstName} ${data.lastName}`);
      cy.datacy('addTeamButton').click();
      matOption('teamMember', `${data.firstName} ${data.lastName}`);
    });
    matSelect('teamMember', teamMembers, 'addMemberBtn');
    cy.datacy('addTeamButton').click();
    cy.log('**Checking whether new team is being created**');
    assertions(teamName[0]);
    }

    static editTeam(teamName:string[], teamLead:string[], teamMembers:string[]) {
      cy.log('***Editing Team***');
      cy.datacy(teamName[0]).first().find('a').click();
      cy.datacy('editBtn').click();
      cy.datacy('teamName').clear().type(teamName[1]);
      calendar();
      matSelect('teamLeadOptions', teamLead);
      matSelect('teamMemberOptions', teamMembers, 'addMemberBtn');
      removeAssignee(teamMembers[1], 'Remove', 'updateBtn');
      cy.log('**Checking whether edited team is reflected**');
      assertions(teamName[1]);
    }
}

export function matOption(dropOption:string, name:string) {
  cy.datacy(dropOption).click();
  cy.get('mat-option').contains(name).click();
}

function calendar() {
  cy.datacy('datePicker').find('svg').click();
  cy.get('mat-calendar').find('td').contains(todayDate).click();
}

function assertions (teamName:string) {
  sideNav('teams');
  cy.datacy(teamName).should('be.visible');
}
