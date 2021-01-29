describe("PizzaOrderForm app", () => {
    beforeEach(() => {
        //arbitrary code you want running before your tests start
        cy.visit('http://localhost:3000/pizza');
    });
    it('Try name input', () => {
        cy.get('input[name="name"]')
          .should("have.value", "")
          .type("Jalpa Shah")
          .should("have.value","Jalpa Shah");
    });
    it('lets select size', () => {
        cy.get('select')
          .select('large')
          .should("have.value", "large");
    });
    it('let us select sauce',() => {
        cy.get('[type="radio"]')
          .check('bbqSauce');
    });
    it('let us select some toppings', () => {
        cy.get('input[name="onion"]')
        .check()
        .should('be.checked')

        cy.get('input[name="roastedGarlic"]')
          .check()
          .should('be.checked')
    })
    it('let select gluten free', () => {
        cy.get('input[name="glutenFree"]')
          .check()
          .should('be.checked')
    })
    it('should disabled the submit button', () => {
        cy.get('input[name="name"]')
          .should("have.value", "")
          .type("Jalpa Shah")
          .should("have.value","Jalpa Shah");

        cy.get('select')
          .select('large')
          .should("have.value", "large");

        cy.get('[type="radio"]')
          .check('bbqSauce');

        cy.get('button')
          .click()
        
    })
})