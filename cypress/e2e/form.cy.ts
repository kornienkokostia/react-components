import 'cypress-file-upload';

describe('Form component', () => {
  it('submits the form with valid input values', () => {
    const firstName = 'John';
    const lastName = 'Doe';
    const emailAddress = 'john.doe@example.com';
    const phoneNumber = '1234567890';
    const birthday = '1990-01-01';
    const country = 'United States of America';

    cy.visit('/forms'); // Change this to the URL of your page where the form is rendered

    // Fill in form fields
    cy.get('[name="firstName"]').type(firstName);
    cy.get('[name="lastName"]').type(lastName);
    cy.get('[name="emailAddress"]').type(emailAddress);
    cy.get('[name="phoneNumber"]').type(phoneNumber);
    cy.get('[name="birthday"]').type(birthday);
    cy.get('[name="country"]').select(country);
    cy.get('[name="file"]').attachFile('test.jpg');
    cy.get('[data-testid="send-notif-two"]').click();
    cy.get('[name="contestToData"]').click();

    // Submit the form
    cy.get('.form').submit();

    // Check that the form was submitted successfully
    cy.get('.user-added-popup.active').should('exist');

    // Check that the form fields were reset
    cy.get('[name="firstName"]').should('have.value', '');
    cy.get('[name="lastName"]').should('have.value', '');
    cy.get('[name="emailAddress"]').should('have.value', '');
    cy.get('[name="phoneNumber"]').should('have.value', '');
    cy.get('[name="birthday"]').should('have.value', '');
    cy.get('[name="country"]').should('have.value', 'Afghanistan');
    cy.get('[name="file"]').should('have.value', '');

    cy.get('.form-card-name').should('contain.text', `${firstName} ${lastName}`);
    cy.get('.form-card-email').should('contain.text', emailAddress);
    cy.get('.form-card-info').should('contain.text', `Phone: ${phoneNumber}`);
    cy.get('.form-card-info').should('contain.text', `Date of the birth: 01/01/1990`);
    cy.get('.form-card-info').should('contain.text', `Country: ${country}`);
    cy.get('.form-card-info').should(
      'contain.text',
      `I want to receive notifications about new products`
    );
    cy.get('.form-card-info').should('contain.text', `I consent to my personal data`);
  });
  it('Does not do much', () => {
    expect(true).to.equal(true);
  });
});
