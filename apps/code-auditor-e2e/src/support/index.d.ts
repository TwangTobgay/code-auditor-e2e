declare namespace Cypress {
  export interface Chainable<T> {
    datacy(selector:string): Chainable<Element>
  }
}
