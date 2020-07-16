describe('form test', () => {
  it('test that the form is working properly', () => {
    cy.visit('/') // visiting the site since we made our baseUrl in cypress.json

    // making an assertion to make sure that the button should be disabled
    cy.get('button#submit')
    .should('be.disabled')
    
    const name = 'Noah Niesen';
    cy.get('[for="name"] > input')
    .type(name)
    .should('have.value', name)

    const email = 'niesen.noah@gmail.com';
    cy.get('[for="email"] > input')
    .type(email)
    .should('have.value', email)

    const motivation = 'I want to help the community';
    cy.get('textarea#motivation') // made custom id in Form.js
    .type(motivation)
    .should('have.value', motivation)

    const position = 'Yard Work';
    cy.get('select#positions') // made custom id in Form.js
    .select(position)
    .should('have.value', position)

    cy.get('[data-cy="terms"]') // made custom data-cy in Form.js
    .click()
    .should('have.checked', true)

    cy.get('button#submit') // made custom id in Form.js
    .should('not.be.disabled')
  })

  it('error messages are being displayed properly', () => {
    cy.get('[for="email"] > input')
    .clear()
    
    cy.get('[cy-data="email-error-msg"]') // made custom data-cy in Form.js
    .contains('Must include email address.')
  })
})