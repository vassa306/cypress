/// <reference types="cypress" /> 


describe("Test Contact US via Store", ()=>{


    let firstname = 'vasek';
    
    it('Send data via contact us form', () => {
        cy.visit("/");
        cy.get("a[href$='contact']").click();
        cy.url().should('eq','/index.php?rt=content/contact')
        cy.get('#ContactUsFrm_first_name').type("vasek")
        cy.get('#ContactUsFrm_first_name').should("have.value", firstname)
    });
})
