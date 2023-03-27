class RegisterPage {

    get RegisterText() {
        return cy.get('.title-style')

    }

    get firstNameText() {
        return cy.get('label[for= "first-name"]')
    }

    get firstNameInputField() {
        return cy.get("#first-name")
    }

    get lastNameText() {
        return cy.get('label[for="last-name"]')
    }

    get lastNameInputField() {
        return cy.get("#last-name")
    }

    get emailText() {
        return cy.get('label[for="email"]')
    }

    get emailInputField() {
        return cy.get("#email")
    }

    get passwordText() {
        return cy.get('label[for="password"]')
    }

    get passwordInputField() {
        return cy.get("#password")
    }

    get conf_passwordText() {
        return cy.get('label[for="password-confirmation"]')
    }

    get conf_passwordInputField() {
        return cy.get("#password-confirmation")
    }
    get checkbox() {
        return cy.get(".form-check-input")
    }

    get checkboxText() {
        return cy.get('label[for="exampleCheck1"]')
    }

    get submittBtn() {
        return cy.get(".btn")
    }
    get alert() {
        return cy.get(".alert alert-danger")

    }


}

export const registerpage = new RegisterPage()