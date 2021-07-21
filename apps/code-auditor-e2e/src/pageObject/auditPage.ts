import dayjs from 'dayjs';
import { sideNav, matSelect, auditName, removeAssignee } from '../support/util';

const todayDate = dayjs().format('D');

export class AuditPage {
  static addAudit(auditDetail: string[]) {
    cy.log('***Adding Audit Details***');
    matSelect('auditee',auditDetail);
    matSelect('auditorOptions',auditDetail,'addAuditorBtn');
    cy.datacy('datePicker').find('svg').click();
    cy.get('mat-calendar').find('td').contains(todayDate).click();
    removeAssignee(auditDetail[2], 'Remove', 'createAuditBtn');
    cy.log('**checking whether new audit is being added**');
    sideNav('audits');
    cy.datacy(auditDetail[0]).should('be.visible');
    }

  static auditMemo(auditDetail:string[], assignees: string[]) {
    cy.log('***Creating Audit Memo***');
    auditName(auditDetail[0]);
    cy.datacy('memoDescription').type('Memo Test');
    matSelect('assignee',assignees,'addAssigneeBtn');
    removeAssignee(assignees[1], 'Remove', 'addMemoBtn');
  }

  static editAuditMemo(auditSection:string[], assignees:string[], auditDetail:string[]) {
    cy.log('***Editing Audit Memo***');
    auditName(auditDetail[0]);
    cy.datacy('editMemoDescription').clear().type('Edited Name');
    matSelect('sectionDropDown', auditSection);
    matSelect('editAssignee', assignees, 'editAssigneeBtn');
    removeAssignee(assignees[2], 'Remove', 'memoUpdateBtn');
  }

  static removeAuditMemo(auditDetail:string[]) {
    cy.log('***Removing the Audit Memo***');
    auditName(auditDetail[0]);
    cy.datacy('removeMemoBtn').click();
  }
}



