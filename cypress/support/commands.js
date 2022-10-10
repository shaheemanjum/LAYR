import locators from '../locators/locators.json'
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

Cypress.Commands.add('Login', (email, password, dashBoardHeaderMsg) => {

    cy.get(locators.Login.email).type(email)
    cy.get(locators.Login.pwd).type(password)
    cy.get(locators.Login.signInButton).click()
    cy.get(locators.DashBoard.headerMsg, { timeout: 15000 }).should('be.visible').then((ele) => {

        expect(ele.text().trim()).equal(dashBoardHeaderMsg)
    })

})

Cypress.Commands.add('verifyDashBoardNavItems', (navArray) => {

    navArray.forEach(element => {

        cy.contains(element).should('be.visible')
    });


})

Cypress.Commands.add('createHypothesis', (data) => {
    cy.get(locators.Hypotheses.expectThatInputBox).type(data.expectThat)
    cy.get(locators.Hypotheses.willAddressInputBox).type(data.willAddress)
    cy.get(locators.Hypotheses.labelsInputBox).type(data.Label)
    if (data.Label.includes('Label1')) {
        cy.get(locators.Hypotheses.confidenceRatingCgart).first().click()
        cy.get(locators.Hypotheses.importanceRatingCgart).first().click()
        cy.get(locators.Hypotheses.easeRatingCgart).first().click()
    }

    else if (data.Label.includes('Label2')) {
        cy.get(locators.Hypotheses.confidenceRatingCgart).first().next().click()
        cy.get(locators.Hypotheses.importanceRatingCgart).first().next().click()
        cy.get(locators.Hypotheses.easeRatingCgart).first().next().click()

    }
    else {
        cy.get(locators.Hypotheses.confidenceRatingCgart).first().next().next().click()
        cy.get(locators.Hypotheses.importanceRatingCgart).first().next().next().click()
        cy.get(locators.Hypotheses.easeRatingCgart).first().next().next().click()
    }

    cy.get(locators.Hypotheses.createHypoButton).click({ force: true })
})

Cypress.Commands.add('verifyHypothesesSearch', () => {
    cy.get(locators.DashBoard.plan).click()
    cy.get(locators.DashBoard.hypotheses, { timeout: 12000 }).click()
    cy.get(locators.Hypotheses.hypothesesHeader).should('be.visible')
    cy.wait(2000)
    cy.get(locators.Hypotheses.listViewLink, { timeout: 10000 }).click({ force: true })
    cy.wait(2000)
    cy.get(locators.Hypotheses.sortByDropDown).click()
    cy.contains('Score').click()
    cy.get(locators.Hypotheses.datePicker).click()
    cy.get(locators.Hypotheses.selectedDate).click()
    cy.get(locators.Hypotheses.calenderFilterButton).click()
    cy.get(locators.Hypotheses.filterByBacklog).click()
    cy.wait(2000)
    cy.get(locators.Hypotheses.hypothesesList).should('be.visible')


})


Cypress.Commands.add('fillRegistrationForm', (signUpData) => {

    cy.get(locators.SignUpPage.firstName,{timeout:20000}).type(signUpData.firstName)
    cy.get(locators.SignUpPage.lastName).type(signUpData.lastName)
    cy.get(locators.SignUpPage.phoneNumber).type(signUpData.phone)
    cy.get(locators.SignUpPage.pwd).type(signUpData.pwd)
    cy.get(locators.SignUpPage.createAccount).eq(1).click({ multiple: true })

})