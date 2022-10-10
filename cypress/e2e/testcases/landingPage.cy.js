/// <reference types="cypress" />

import locators from '../../locators/locators.json'

describe('Landing Page', () => {

    before(() => {
        cy.visit('')
        cy.fixture("data").then((jsondata) => {

            globalThis.data = jsondata
        })
    })

    it('Verify Start free trial link on landing page', () => {
        
        cy.get(locators.LandingPage.startFreTrialLink).should('be.visible')
        cy.get(locators.LandingPage.startFreTrialLink).then((ele) => {

            expect(ele.text()).equal(data.LandingPage.freeTrialText)
        })


    })


})