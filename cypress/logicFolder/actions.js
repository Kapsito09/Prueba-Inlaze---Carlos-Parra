import elements from '../elementsFolder/elements'

class action {
    clickAnchor = () => elements.anchorSignUp().click();
    clickViewPassword = () => elements.buttonViewPassword().click({ multiple: true });
    clickButtonSubmit = () => elements.buttonSubmit().click();
    validatonMessageSuccessfulregistration = () => elements.messageSuccessfulregistration().should('be.visible');
    validationMessageNotMatchPassword = () => elements.messageNotMatchPassword().should('be.visible');
    ButtonSubmitDisabled = () => elements.buttonSubmit().should('be.disabled');
    validationMessageUserNotFound = () => elements.messageUserNotFound().should('be.visible');
    clickProfileUser = () => elements.imgUser().click();
    clickLogout = () => elements.anchorLogout().click();
}
module.exports = new action();