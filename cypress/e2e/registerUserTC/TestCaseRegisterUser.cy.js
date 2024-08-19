import validCredentials from '../../logicFolder/ValidCredentials'
import notValidCredentials from '../../logicFolder/notValidCredentials'
import action from '../../logicFolder/actions'

describe('Pruebas Inlaze', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
        cy.viewport(1280, 720);
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })   
    });

    it('Test Case #1', () => {
        cy.visit('https://test-qa.inlaze.com/');
        action.clickAnchor();
        validCredentials.typeFullName();
        validCredentials.typeEmail();
        validCredentials.typePassword();
        validCredentials.typeConfirmPassword();
        action.clickViewPassword();
        action.clickButtonSubmit();
        action.validatonMessageSuccessfulregistration();
    });
    it('Test Case #2', () => {
        cy.visit('https://test-qa.inlaze.com/');
        action.clickAnchor();
        notValidCredentials.typeFullNameOnlyWord();
        validCredentials.typeEmail();
        validCredentials.typePassword();
        validCredentials.typeConfirmPassword();
        action.clickViewPassword();
        action.ButtonSubmitDisabled();
    });
    it('Test Case #10', () => {
        cy.visit('https://test-qa.inlaze.com/');
        action.clickAnchor();
        notValidCredentials.typeFullNameWithNumber();
        validCredentials.typeEmail();
        validCredentials.typePassword();
        validCredentials.typeConfirmPassword();
        action.clickViewPassword();
        action.ButtonSubmitDisabled();
    });
    it('Test Case #11', () => {
        cy.visit('https://test-qa.inlaze.com/');
        action.clickAnchor();
        notValidCredentials.typeFullNameNotLimit();
        validCredentials.typeEmail();
        validCredentials.typePassword();
        validCredentials.typeConfirmPassword();
        action.clickViewPassword();
        action.ButtonSubmitDisabled();
    });
    it('Test Case #3', () => {
        cy.visit('https://test-qa.inlaze.com/');
        action.clickAnchor();
        validCredentials.typeFullName();
        notValidCredentials.typeEmailNotFormat();
        validCredentials.typePassword();
        validCredentials.typeConfirmPassword();
        action.clickViewPassword();
        action.ButtonSubmitDisabled();
    });
    it('Test Case #4', () => {
        cy.visit('https://test-qa.inlaze.com/');
        action.clickAnchor();
        validCredentials.typeFullName();
        validCredentials.typeEmail();
        validCredentials.typePassword();
        validCredentials.typeConfirmPassword();
        action.clickViewPassword();
        action.ButtonSubmitDisabled();
    });
    it('Test Case #5', () => {
        cy.visit('https://test-qa.inlaze.com/');
        action.clickAnchor();
        validCredentials.typeFullName();
        validCredentials.typeEmail();
        notValidCredentials.typePasswordNotSymbol();
        notValidCredentials.typeConfirmPasswordNotSymbol();
        action.clickViewPassword();
        action.ButtonSubmitDisabled();
    });
    it('Test Case #6', () => {
        cy.visit('https://test-qa.inlaze.com/');
        action.clickAnchor();
        validCredentials.typeFullName();
        validCredentials.typeEmail();
        notValidCredentials.typePasswordNotMay();
        notValidCredentials.typeConfirmPasswordNotMay();
        action.clickViewPassword();
        action.ButtonSubmitDisabled();
    });
    it('Test Case #7', () => {
        cy.visit('https://test-qa.inlaze.com/');
        action.clickAnchor();
        validCredentials.typeFullName();
        validCredentials.typeEmail();
        notValidCredentials.typePasswordNotNumber();
        notValidCredentials.typeConfirmPasswordNotNumber();
        action.clickViewPassword();
        action.ButtonSubmitDisabled();
    });
    it('Test Case #8', () => {
        cy.visit('https://test-qa.inlaze.com/');
        action.clickAnchor();
        validCredentials.typeFullName();
        validCredentials.typeEmail();
        notValidCredentials.typePasswordNotMin();
        notValidCredentials.typeConfirmPasswordNotMin();
        action.clickViewPassword();
        action.ButtonSubmitDisabled();
    });
    it('Test Case #9', () => {
        cy.visit('https://test-qa.inlaze.com/');
        action.clickAnchor();
        validCredentials.typeFullName();
        validCredentials.typeEmail();
        notValidCredentials.typePasswordSixtDate();
        notValidCredentials.typeConfirmPasswordSixtDate();
        action.clickViewPassword();
        action.ButtonSubmitDisabled();
    });
    it('Test Case #12', () => {
        cy.visit('https://test-qa.inlaze.com/');
        action.clickAnchor();
        validCredentials.typeFullName();
        validCredentials.typeEmail();
        validCredentials.typePassword();
        notValidCredentials.typeConfirmPasswordSixtDate();
        action.clickViewPassword();
        action.validationMessageNotMatchPassword();
        action.ButtonSubmitDisabled();
    });



});