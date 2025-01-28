// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types = "cypress" />

/// <reference types = "cypress-xpath" />

// custom command by me for Iframe , just pass 1 locator of iframe 
Cypress.Commands.add ('getIframebyMasaidZeb', (iframe) => { 
  return cy.get (iframe).its('0.contentDocument.body').should ( 'be.visible').then (cy.wrap);

})

//

Cypress.Commands.add('clickLinkByLabel', (label) => { // TC no 34
  cy.contains('a', label).click();
});


// Tc 34
/*Cypress.Commands.overwriteQuery('contains', (originalFn, subject, filter, text, options = {}) => {
// Ensure the text is a string and handle the case-insensitive match
if (typeof text === 'string') {
  const caseInsensitiveText = new RegExp(text, 'i'); // Create a regex with case-insensitive flag
  return originalFn(subject, filter, caseInsensitiveText, options);
}

// Fallback to the original function if text is not a string
return originalFn(subject, filter, text, options);
});*/
