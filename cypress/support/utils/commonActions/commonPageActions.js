Cypress.Commands.add('selectProductAttribute', (attributeNumber, value) => {
    cy.get(`select[name='product_attribute_${attributeNumber}']`).select(value);
  });
  
  Cypress.Commands.add('linkText', () => {
    cy.get("a[href*='/']");
  });

  Cypress.Commands.add("addToCart", () => {
    cy.get('button:contains("Add to cart")');
  });

  import { faker } from "@faker-js/faker";
  const email = faker.internet.email();
  Cypress.Commands.add("checkOutAsGuest", () => {
    cy.get('.checkout-as-guest-button').click()
    cy.get('#ShipToSameAddress').click()
    cy.get('#BillingNewAddress_FirstName').type('Jane')
    cy.get('#BillingNewAddress_LastName').type('Doe')
    cy.get('#BillingNewAddress_Email').type(email)
    cy.get('#BillingNewAddress_CountryId').select('235')
    cy.get('#BillingNewAddress_StateProvinceId').select('626')
    cy.get('#BillingNewAddress_City').type('Greater Manchester')
    //cy.get('#BillingNewAddress_City').type('Manchy')
    cy.get('#BillingNewAddress_Address1').type('2 Moss Grange')
    cy.get('#BillingNewAddress_Address2').type('Moss Grange')
    cy.get('#BillingNewAddress_ZipPostalCode').type('M20 7RJ')
    cy.get('#BillingNewAddress_PhoneNumber').type('0162261085')
    cy.get('#billing-buttons-container > .new-address-next-step-button').click()
    cy.get('#shipping-method-buttons-container > .button-1')
    cy.get('#shipping-buttons-container > .new-address-next-step-button').click()
    cy.get('#shipping-method-buttons-container > .button-1').click()
    cy.get('#payment-method-buttons-container > .button-1').click()
    cy.get('#payment-info-buttons-container > .button-1').click()
    cy.get('#confirm-order-buttons-container > .button-1').click()
    cy.get('.section > .title > strong').should('have.text', 'Your order has been successfully processed!')
    cy.get('.buttons > .button-1').click()
    
  })
  