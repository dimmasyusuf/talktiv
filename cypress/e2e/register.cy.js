/* eslint-disable no-undef */

/**
 * register spec testing scenario
 *
 * - should display register page correctly
 * - should display alert when email has been registered
 * - should display login page when name, email, and password are correct
 */

describe('Register spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/register');
  });

  it('should display register page correctly', () => {
    // verify page element that should be displayed at register page
    cy.get('input[type="text"]').should('be.visible');
    cy.get('input[type="email"]').should('be.visible');
    cy.get('input[type="password"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
  });

  it('should display alert when email has been registered', () => {
    // fill name
    cy.get('input[type="text"]').type('Dimas Yusuf Qurohman');

    // fill email
    cy.get('input[type="email"]').type('dimmasyusuf@gmail.com');

    // fill password
    cy.get('input[type="password"]').type('potato');

    // click submit button
    cy.get('button[type="submit"]').click();

    // verify alert message content
    cy.on('window:alert', (str) => {
      expect(str).to.equal('email is already taken');
    });
  });

  it('should display login page when name, email, and password are correct', () => {
    // fill name
    cy.get('input[type="text"]').type('Potato Day');

    // fill email
    cy.get('input[type="email"]').type('potatoday@gmail.com');

    // fill password
    cy.get('input[type="password"]').type('potato');

    // click submit button
    cy.get('button[type="submit"]').click();

    // verify page element that should be displayed at login page
    cy.get('input[type="email"]').should('be.visible');
    cy.get('input[type="password"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
  });
});
