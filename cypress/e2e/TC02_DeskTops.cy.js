import { Environment } from "../support/utils/commonActions/environs";
const baseUrl = Environment.getBaseUrl();

describe('Desktop Basket', () => {

  beforeEach(() => {
    cy.visit(baseUrl);
    cy.linkText().contains('Computers').click({force: true})
    cy.linkText().contains('Desktops').click({force: true})
});
  
  it('Digital Storm VANQUISH 3 Custom Performance PC', () => {
    cy.addToCart().eq(0).click()
    cy.selectProductAttribute('19', '60')
    cy.selectProductAttribute('20', '62')
    cy.selectProductAttribute('21', '66')
    cy.selectProductAttribute('22', '70')
    cy.get('#product_attribute_23_72').click()
    cy.get('#product_enteredQuantity_2').clear().type('10')
    cy.get('#add-to-cart-button-2').click()
    cy.get('#termsofservice').wait(2000).click({force: true})
    cy.get('#checkout').click()
    cy.checkOutAsGuest()
  });

  it('HP Desktop Slim Core 2023. HP. PC Desktops & All-in-Ones', () => {
    cy.addToCart().eq(1).click()
    cy.selectProductAttribute('14', '41')
    cy.selectProductAttribute('15', '43')
    cy.selectProductAttribute('16', '48')
    cy.selectProductAttribute('17', '51')
    cy.get('#product_attribute_18_54').click()
    cy.get('#product_enteredQuantity_1').clear().type('10')
    cy.get('#add-to-cart-button-1').click()
    cy.get('#termsofservice').wait(2000).click({force: true})
    cy.get('#checkout').click()
    cy.checkOutAsGuest()
  });

  it('Lenovo IdeaCentre 600 All-in-One PC', () => {
    cy.addToCart().eq(2).click()
    cy.selectProductAttribute('24', '79')
    cy.selectProductAttribute('25', '81')
    cy.selectProductAttribute('26', '86')
    cy.selectProductAttribute('27', '90')
    cy.get('#product_attribute_28_93').click()
    cy.get('#product_enteredQuantity_3').clear().type('10')
    cy.get('#add-to-cart-button-3').click()
    cy.get('#termsofservice').wait(2000).click({force: true})
    cy.get('#checkout').click()
    cy.checkOutAsGuest()
  });
});