import elements from '../elementsFolder/elements'

class validCredentials {
    typeFullName = () => elements.inputFullName().type(Cypress.env('fullNameCorrect'));
    typeEmail = () => elements.inputEmail().type(Cypress.env('emailCorrect'));
    typeSecondEmail = () => elements.inputEmail().type(Cypress.env('secondEmail'));
    typePassword = () => elements.inputPassword().type(Cypress.env('passwordCorrect'));
    typeSecondPassword = () => elements.inputPassword().type(Cypress.env('secondPassword'));
    typeConfirmPassword = () => elements.inputConfirmPassword().type(Cypress.env('passwordCorrect'));
    comparateFullName = () => elements.nameUser().should('contain', Cypress.env('fullNameCorrect'));
}
module.exports = new validCredentials();

