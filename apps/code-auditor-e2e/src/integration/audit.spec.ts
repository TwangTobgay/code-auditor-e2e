import { AuditPage } from '../pageObject/auditPage';
import { sideNav } from '../support/util';

const auditDetail = ['New', 'Updated Name', 'hope'];
const assignees = ['Sonam Dorji', 'sonam tashi', 'karma dorji'];
const auditSection = ['resolved', 'memos'];

describe('Audit Test', () => {
  beforeEach(function () {
    cy.login('admin');
  });

  afterEach(() => {
    sideNav('logOut');
  });

  it('Audit Form Validation', () => {
    sideNav('addAudit');
    cy.datacy('createAuditBtn').click();
    cy.datacy('auditee').focus().blur().should('have.attr', "aria-invalid", "true");
    cy.datacy('dateInput').focus().blur().should('have.attr', "aria-invalid", "true");
  });

  it('Adding Audit', () => {
    sideNav('addAudit');
    AuditPage.addAudit(auditDetail);
  });

  it('Adding Audit Memo', () => {
    sideNav('audits');
    AuditPage.auditMemo(auditDetail, assignees);
  });

  it('Editing Audit Memo', () => {
    sideNav('audits');
    AuditPage.editAuditMemo(auditSection, assignees, auditDetail);
  });

  it('Removing the Audit Memo', () => {
    sideNav('audits');
    AuditPage.removeAuditMemo(auditDetail);
  });
});
