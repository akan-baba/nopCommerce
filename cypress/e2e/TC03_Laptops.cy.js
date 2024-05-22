import { Environment } from "../support/utils/commonActions/environs";
const baseUrl = Environment.getBaseUrl();


describe('Laptop Basket', () => {

    beforeEach(() => {
        cy.visit(baseUrl);
        cy.linkText().contains('Computers').click({ force: true })
        cy.linkText().contains('Laptops').click({ force: true })
    });

    it('Apple MacBook Pro 13-inch', () => {
        cy.addToCart().eq(0).click()
        cy.selectProductAttribute('29', '98')
        cy.selectProductAttribute('30', '100')
        cy.selectProductAttribute('31', '105')
        cy.selectProductAttribute('32', '110')
        cy.selectProductAttribute('33', '113')
        cy.get('#product_attribute_34_115').click()
        cy.get('#product_enteredQuantity_4').clear().type('10')
        cy.get('#add-to-cart-button-4').click()
        cy.get('#termsofservice').wait(2000).click({ force: true })
        cy.get('#checkout').click()
        cy.checkOutAsGuest()
    });

    it('Asus N551JK-XO076H Laptop', () => {
        cy.addToCart().eq(1).click()
        cy.selectProductAttribute('35', '119')
        cy.selectProductAttribute('36', '122')
        cy.selectProductAttribute('37', '126')
        cy.selectProductAttribute('39', '133')
        cy.get('#product_attribute_40_137').click()
        cy.get('#product_enteredQuantity_5').clear().type('10')
        cy.get('#add-to-cart-button-5').click()
        cy.get('#termsofservice').wait(2000).click({ force: true })
        cy.get('#checkout').click()
        cy.checkOutAsGuest()
    });

    it('Galaxy Book Carbon Laptop', () => {
        cy.addToCart().eq(2).click()
        cy.selectProductAttribute('59', '207')
        cy.selectProductAttribute('60', '213')
        cy.selectProductAttribute('61', '214')
        cy.selectProductAttribute('62', '218')
        cy.selectProductAttribute('63', '223')
        cy.get('#product_attribute_64_226').click()
        cy.get('#product_enteredQuantity_9').clear().type('10')
        cy.get('#add-to-cart-button-9').click()
        cy.get('#termsofservice').wait(2000).click({ force: true })
        cy.get('#checkout').click()
        cy.checkOutAsGuest()
    });

    it('HP Envy 6-1180ca 15.6-Inch Sleekbook', () => {
        cy.addToCart().eq(3).click()
        cy.selectProductAttribute('53', '186')
        cy.selectProductAttribute('54', '188')
        cy.selectProductAttribute('55', '191')
        cy.selectProductAttribute('56', '196')
        cy.selectProductAttribute('57', '200')
        cy.get('#product_attribute_58_204').click()
        cy.get('#product_enteredQuantity_8').clear().type('10')
        cy.get('#add-to-cart-button-8').click()
        cy.get('#termsofservice').wait(2000).click({ force: true })
        cy.get('#checkout').click()
        cy.checkOutAsGuest()
    });


    it('HP Spectre XT Pro UltraBook', () => {
        cy.addToCart().eq(4).click()
        cy.selectProductAttribute('47', '164')
        cy.selectProductAttribute('48', '165')
        cy.selectProductAttribute('49', '169')
        cy.selectProductAttribute('50', '173')
        cy.selectProductAttribute('51', '179')
        cy.get('#product_attribute_52_182').click()
        cy.get('#product_enteredQuantity_7').clear().type('10')
        cy.get('#add-to-cart-button-7').click()
        cy.get('#termsofservice').wait(2000).click({ force: true })
        cy.get('#checkout').click()
        cy.checkOutAsGuest()
    });

    it('Samsung Series 9 NP900X4C Premium Ultrabook', () => {
        cy.addToCart().eq(5).click()
        cy.selectProductAttribute('41', '142')
        cy.selectProductAttribute('42', '143')
        cy.selectProductAttribute('43', '150')
        cy.selectProductAttribute('44', '151')
        cy.selectProductAttribute('45', '155')
        cy.get('#product_attribute_46_158').click()
        cy.get('#product_enteredQuantity_6').clear().type('10')
        cy.get('#add-to-cart-button-6').click()
        cy.get('#termsofservice').wait(2000).click({ force: true })
        cy.get('#checkout').click()
        cy.checkOutAsGuest() 
        
    });


});