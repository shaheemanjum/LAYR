/// <reference types="cypress" />

describe('DashBoard Page', () => {

    before(() => {
        cy.fixture("data").then((jsondata) => {

            globalThis.data = jsondata
        })

    })

    beforeEach(() => {
        cy.visit('')
        cy.Login(data.Login.username, data.Login.pwd, data.DashBoard.headerMsg)
    })

    it('Verify Dashboard page navigation items', () => {
        cy.verifyDashBoardNavItems(data.DashBoard.navArray)
    })


})