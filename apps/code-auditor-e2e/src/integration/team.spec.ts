import { TeamPage, matOption } from '../pageObject/teamPage'
import { sideNav } from '../support/util';

const teamName = ['New', 'Edited Name'];
const teamLead = ['Karma Dorji'];
const teamMembers = ['karma dorji', 'sonam tashi'];
const validation: Array<any> = [['teamName', "aria-invalid", "true"], ['dateInput', "aria-invalid", "true"],
     ['teamLeadOption', "aria-invalid", "true"]];

describe('Team Member Test', () => {
  beforeEach(() => {
    cy.login('admin');
  });

  afterEach( () => {
    sideNav('logOut');
  });

  it(' Validation Check ', () => {
    sideNav('addTeam');
    cy.log('**Validation check for input fields**');
    cy.datacy('addTeamButton').click();
    validation.forEach(key => {
      cy.datacy(key[0]).focus().blur().should('have.attr', key[1], key[2]);
    });
    cy.log('**Validation message for Team lead and Team member**');
    cy.fixture('signUpData').then( data => {
      matOption('teamLeadOption', `${data.firstName} ${data.lastName}`);
      cy.datacy('addTeamButton').click();
      cy.datacy('errorMsg2').should('contain', 'There has to be atleast one team member');
      matOption('teamMember', `${data.firstName} ${data.lastName}`);
    });
    cy.contains('Add Member').click();
    cy.datacy('errorMsg1').should('contain', 'Team Lead Cannot Be A Team Member');
  });

  it('Adding Team', () => {
    sideNav('addTeam');
    TeamPage.addTeam(teamName, teamMembers);
  });

  it('Editing Team', () => {
    sideNav('teams');
    TeamPage.editTeam(teamName, teamLead, teamMembers);
  });
});
