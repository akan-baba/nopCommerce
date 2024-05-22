import { Environment } from "../support/utils/commonActions/environs";
import { UserRegistration } from "../support/pages/userRegistration";
import { faker } from "@faker-js/faker";

const userRegistration = new UserRegistration();  // Instantiate the imported UserRegistration class
const baseUrl = Environment.getBaseUrl();
const userName = faker.internet.userName();
const email = faker.internet.email();
const firstname = faker.person.firstName();
const lastname = faker.person.lastName();


describe('User Registration', () => {

    it('Registration Page', () => {
        cy.visit(baseUrl);

        userRegistration.pageActions.clickRegisterLink().click()
        userRegistration.pageActions.clickMaleCheckBox().click()
        userRegistration.pageActions.enterFirstName().type(firstname)
        userRegistration.pageActions.enterLastName().type(lastname)
        userRegistration.pageActions.selectDOBDay().select('25')
        userRegistration.pageActions.selectDOBMonth().select('7')
        userRegistration.pageActions.selectDOBYear().select('1959')
        userRegistration.pageActions.enterEmail().type(email)
        userRegistration.pageActions.enterUserName().type(userName)
        userRegistration.pageActions.enterAddress_1().type('2')
        userRegistration.pageActions.enterAddress_2().type('Moss Grange')
        userRegistration.pageActions.enterZipCode().type('M16 7RJ')
        userRegistration.pageActions.enterRegion_County().type('Greater Manchy')
        userRegistration.pageActions.enterCity().type('Manchester')
        userRegistration.pageActions.selectCountry().select('235')
        userRegistration.pageActions.selectState().select('626')
        userRegistration.pageActions.enterPhone().type('0161261085')
        userRegistration.pageActions.enterPassword().type('red123')
        userRegistration.pageActions.enterConfirmPassword().type('red123')
        userRegistration.pageActions.clickAcceptConsent().click()
        userRegistration.pageActions.clickRegisterButton().click()
        userRegistration.pageActions.successMessageDisplayed().should('have.text', 'Your registration completed')





    });

    describe ('',  () =>{

    })

});