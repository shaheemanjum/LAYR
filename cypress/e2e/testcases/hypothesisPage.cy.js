/// <reference types="cypress" />

import locators from '../../locators/locators.json'

describe('HypoThesis', () => {

    before(() => {

        cy.fixture("data").then((jsondata) => {

            globalThis.data = jsondata
        })

    })

    beforeEach(() => {

        cy.visit('')
        cy.Login(data.Login.username, data.Login.pwd, data.DashBoard.headerMsg)
    })
    it('Navigate to Hypotheses', () => {

        cy.get(locators.DashBoard.plan).click()
        cy.get(locators.DashBoard.hypotheses, { timeout: 12000 }).click()
        cy.get(locators.Hypotheses.hypothesesHeader).should('be.visible')


    })

    it('Verify Create Hypotheses', () => {
        cy.get(locators.DashBoard.plan).click()
        cy.get(locators.DashBoard.hypotheses, { timeout: 12000 }).click()
        cy.get(locators.Hypotheses.hypothesesHeader).should('be.visible')
        cy.wait(1000)
        cy.get(locators.Hypotheses.createHypoPlusIcon).click({ force: true })
        cy.createHypothesis(data.Hypotheses.hypothesesData[0].dataSet1)
        cy.wait(2000)
        cy.get(locators.Hypotheses.createHypoPlusIcon).click()
        cy.createHypothesis(data.Hypotheses.hypothesesData[1].dataSet2)
        cy.wait(2000)
        cy.get(locators.Hypotheses.createHypoPlusIcon).click()
        cy.createHypothesis(data.Hypotheses.hypothesesData[2].dataSet3)

    })

    it('Verify Hypotheses search functionality ', () => {
        cy.verifyHypothesesSearch()
    })



})