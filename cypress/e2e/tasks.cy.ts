/// <reference types="Cypress" />

describe("manipulating tasks", () => {
  it("should enter task creation and exit", () => {
    cy.visit("https://taking-notes.vercel.app");
    cy.get(".btn-primary").contains("Create").click();
    cy.get(".btn-outline-secondary").contains("Cancel").click();
  });
});
