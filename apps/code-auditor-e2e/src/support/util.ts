export function sideNav(sideNavName:string) {
  cy.datacy(sideNavName).click();
}

export function matSelect(which:string, options:string[], btnName?:string) {
  options.forEach(key => {
    cy.datacy(which).click();
    cy.get('mat-option').contains(key).click();
  });
  if(btnName) {
    cy.datacy(btnName).click();
  }
}

export function removeAssignee(name:string, removeBtn:string, updateBtn:string) {
  cy.datacy(name).contains(removeBtn).click();
  cy.datacy(updateBtn).click();
}

export function auditName(audit) {
  cy.datacy(audit).find('a').click();
}

export function role(selector:string, roleName:string, btnName:string) {
  cy.datacy(selector).click();
  cy.get('mat-option').contains(roleName).click();
  cy.datacy(btnName).click();
}
