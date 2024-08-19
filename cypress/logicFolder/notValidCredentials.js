import elements from '../elementsFolder/elements'

class notValidCredentials {
    typeFullNameOnlyWord = () => elements.inputFullName().type(Cypress.env('fullNameOnlyOneWord'));
    typeFullNameWithNumber = () => elements.inputFullName().type(Cypress.env('fullNameWithNumber'));
    typeFullNameNotLimit = () => elements.inputFullName().type(Cypress.env('fullNameWithSeventyDates'));
    typeEmailNotFormat = () => elements.inputEmail().type(Cypress.env('emailNotCorrect'));
    typePasswordNotSymbol = () => elements.inputPassword().type(Cypress.env('passwordNotSymbol'));
    typeConfirmPasswordNotSymbol = () => elements.inputConfirmPassword().type(Cypress.env('passwordNotSymbol'));
    typePasswordNotMay = () => elements.inputPassword().type(Cypress.env('passwordNotMay'));
    typeConfirmPasswordNotMay = () => elements.inputConfirmPassword().type(Cypress.env('passwordNotMay'));
    typePasswordNotNumber = () => elements.inputPassword().type(Cypress.env('passwordNotNumber'));
    typeConfirmPasswordNotNumber = () => elements.inputConfirmPassword().type(Cypress.env('passwordNotNumber'));
    typePasswordNotMin = () => elements.inputPassword().type(Cypress.env('passwordNotMin'));
    typeConfirmPasswordNotMin = () => elements.inputConfirmPassword().type(Cypress.env('passwordNotMin'));
    typePasswordSixtDate = () => elements.inputPassword().type(Cypress.env('passwordOnlySixDate'));
    typeConfirmPasswordSixtDate = () => elements.inputConfirmPassword().type(Cypress.env('passwordOnlySixDate'));


}
module.exports = new notValidCredentials();