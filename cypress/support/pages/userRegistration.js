

export class UserRegistration {

     //------------------Selectors --------------------------------
    webSelectors = {

        registerLink: '.ico-register',
        maleCheckBox: '#gender-male',
        femaleCheckBox: '#gender-female',
        firstName: '#FirstName',
        lastName: '#LastName',
        dobDayDropdown: "select[name='DateOfBirthDay']",
        dobMonthDropdown: "select[name='DateOfBirthMonth']",
        dobYearDropdown: "select[name='DateOfBirthYear']",
        email: '#Email',
        userName: '#Username',
        address_1: '#StreetAddress',
        address_2: '#StreetAddress2',
        zipCode: '#ZipPostalCode',
        region_county: '#County',
        city: '#City',
        countryDropdown: '#CountryId',
        stateDropdown: '#StateProvinceId',
        phone: '#Phone',
        password: '#Password',
        confirmPassword: '#ConfirmPassword',
        accept_consent: '#accept-consent',
        registerButton: '#register-button',
        successMessage: '.result'


    }
//-----------------------------Actions-----------------------------  
    pageActions = {

        clickRegisterLink: () => cy.get(this.webSelectors.registerLink),
        clickMaleCheckBox: () => cy.get(this.webSelectors.maleCheckBox),
        clickFemaleCheckBox: () => cy.get(this.webSelectors.femaleCheckBox),
        enterFirstName: () => cy.get(this.webSelectors.firstName),
        enterLastName: () => cy.get(this.webSelectors.lastName),
        selectDOBDay: () => cy.get(this.webSelectors.dobDayDropdown),
        selectDOBMonth: () => cy.get(this.webSelectors.dobMonthDropdown),
        selectDOBYear: () => cy.get(this.webSelectors.dobYearDropdown),
        enterEmail: () => cy.get(this.webSelectors.email),
        enterUserName: () => cy.get(this.webSelectors.userName),
        enterAddress_1: () => cy.get(this.webSelectors.address_1),
        enterAddress_2: () => cy.get(this.webSelectors.address_2),
        enterZipCode: () => cy.get(this.webSelectors.zipCode),
        enterRegion_County: () => cy.get(this.webSelectors.region_county),
        enterCity: () => cy.get(this.webSelectors.city),
        selectCountry: () => cy.get(this.webSelectors.countryDropdown),
        selectState: () => cy.get(this.webSelectors.stateDropdown),
        enterPhone: () => cy.get(this.webSelectors.phone),
        enterPassword: () => cy.get(this.webSelectors.password),
        enterConfirmPassword: () => cy.get(this.webSelectors.confirmPassword),
        clickAcceptConsent: () => cy.get(this.webSelectors.accept_consent),
        clickRegisterButton: () => cy.get(this.webSelectors.registerButton),
        successMessageDisplayed: () => cy.get(this.webSelectors.successMessage)







    }
}