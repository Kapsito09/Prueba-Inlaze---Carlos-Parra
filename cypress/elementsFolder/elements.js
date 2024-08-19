class elements {
    inputFullName = () => cy.get('[id="full-name"]');
    inputEmail = () => cy.get('[id="email"]');
    inputPassword = () => cy.get('input[id="password"]');
    inputConfirmPassword = () => cy.get('input[id="confirm-password"]');
    buttonViewPassword = () => cy.get('[type="button"]');
    buttonSubmit = () => cy.get('[type="submit"]');
    anchorSignUp = () => cy.get('[class="font-bold text-primary"]');
    messageSuccessfulregistration  = () => cy.get('div[class="ml-3 text-sm font-normal"]');
    messageNotMatchPassword = () => cy.get('[class="label-text-alt text-error"]');
    nameUser = () => cy.get('[class="font-bold"]');
    messageUserNotFound = () => cy.get('[class="ml-3 text-sm font-normal"]');
    imgUser = () => cy.get('[class="w-10 rounded-full"]');
    anchorLogout = () => cy.get('a').contains('Logout');
}

module.exports = new elements();