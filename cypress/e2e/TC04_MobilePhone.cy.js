import { Environment } from "../support/utils/commonActions/environs";
const baseUrl = Environment.getBaseUrl();



describe('Mobile Phone Basket', () => {
    beforeEach(() => {
        cy.visit(baseUrl);
        cy.linkText().contains('Electronics').click({ force: true })
        cy.linkText().contains('Mobile Phones').click({ force: true })
    });

    it('HTC One M8 Android L 5.0 Lollipop', () => {
        cy.addToCart().eq(0).click()
        cy.selectProductAttribute('65', '230')
        cy.get('#product_attribute_66_231').click()
        cy.get('#product_enteredQuantity_18').clear().type('100')
        cy.get('#add-to-cart-button-18').click()
        cy.get('#termsofservice').wait(2000).click({ force: true })
        cy.get('#checkout').click()
        cy.checkOutAsGuest()
    });

    it('HTC One Mini Blue', () => {
        cy.addToCart().eq(1).click()
        cy.selectProductAttribute('67', '235')
        cy.get('#product_attribute_68_239').click()
        cy.get('#product_enteredQuantity_19').clear().type('100')
        cy.get('#add-to-cart-button-19').click()
        cy.get('#termsofservice').wait(2000).click({ force: true })
        cy.get('#checkout').click()
        cy.checkOutAsGuest()
    });

    it('Nokia Lumia 1020', () => {
        cy.addToCart().eq(2).click()
        cy.selectProductAttribute('69', '244')
        cy.get('#product_attribute_70_247').click()
        cy.get('#product_enteredQuantity_20').clear().type('100')
        cy.get('#add-to-cart-button-20').click()
        cy.get('#termsofservice').wait(2000).click({ force: true })
        cy.get('#checkout').click()
        cy.checkOutAsGuest()
    });

});