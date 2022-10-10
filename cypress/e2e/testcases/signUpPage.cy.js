/// <reference types="cypress" />
import locators from '../../locators/locators.json'

describe('SignUP', () => {

    before(() => {
        cy.fixture("data").then((jsondata) => {

            globalThis.data = jsondata
        })
    })

    beforeEach(() => {

        cy.visit('')

    })

    it('Navigate to SignUp page', () => {

        cy.get(locators.LandingPage.startFreTrialLink).click()
        cy.contains(data.SignUpPage.freeTrialAccountText).should('be.visible')

    })

    it('Verify Email already registered', () => {

        cy.get(locators.LandingPage.startFreTrialLink).click()
        cy.get(locators.SignUpPage.workEmail).type(data.SignUpPage.workEmail)
        cy.get(locators.SignUpPage.signUpButton).click()
        expect(cy.contains(data.SignUpPage.accountAlreadyRegistered).should('be.visible'))

    })


})