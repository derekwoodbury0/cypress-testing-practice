// syntax example
describe('my first test', () => {
    it('does not do much', () => {
        expect(true).to.equal(true)
    })
})

// tests for our to-do list

describe('to-do list tests', () => {
    // test first to make sure connects to website
    it('visits localhost:3000', () => {
        cy.visit('http://localhost:3000')

    })

    // remove first to do from list
    it('removes first item from to-do list', () => {
        cy.visit('http://localhost:3000')
        cy.get('.todo-list-container')
            .first()
            .contains('done')
            .click()
    })

    // add new todo and remove it
    it('add new todo', () => {
        cy.visit('http://localhost:3000')
        cy.get('.todo-input')
            .type('sleep')
            .should('have.value', 'sleep')

        cy.get('.add-btn')
            .click()

        cy.get('.todo-container')
            .last()
            .contains('done')
            .click()
    })
})