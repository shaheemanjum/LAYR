/// <reference types="cypress" />

describe('Login', () => {

    before(() => {
        cy.visit('')
        cy.fixture("data").then((jsondata) => {
            globalThis.data = jsondata
        })
    })

    it('Verify User is able to login with valid credentials', () => {

        cy.Login(data.Login.username, data.Login.pwd, data.DashBoard.headerMsg)


    })


})