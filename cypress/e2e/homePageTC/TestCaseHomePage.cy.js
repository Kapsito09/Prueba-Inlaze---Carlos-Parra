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

    it('Test Case #17', () => {
        cy.visit('https://test-qa.inlaze.com/');
        validCredentials.typeEmail();
        validCredentials.typePassword();
        action.clickViewPassword();
        action.clickButtonSubmit();
        action.clickProfileUser();
        action.clickLogout();
    });
});