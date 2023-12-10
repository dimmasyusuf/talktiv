/* eslint-disable no-undef */

/**
 * login spec testing scenario
 *
 * - should display login page correctly
 * - should display alert when email and password are wrong
 * - should display homepage when email and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5174/');
  });

  it('should display login page correctly', () => {
    // verify page element that should be displayed at login page
    cy.get('input[type="email"]').should('be.visible');
    cy.get('input[type="password"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
  });

  it('should display alert when email and password are wrong', () => {
    // fill email
    cy.get('input[type="email"]').type('testuser@mail.com');

    // fill password
    cy.get('input[type="password"]').type('123456');

    // click submit button
    cy.get('button[type="submit"]').click();

    // verify alert message content
    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong');
    });
  });

  it('should display homepage when email and password are correct', () => {
    // fill email
    cy.get('input[type="email"]').type('dimasyusufqurohman@gmail.com');

    // fill password
    cy.get('input[type="password"]').type('potato');

    // click submit button
    cy.get('button[type="submit"]').click();

    // verify page element that should be displayed at homepage
    cy.get('a').contains('Talktiv.').should('be.visible');
    cy.get('button').contains('Create Thread').should('be.visible');
  });
});
