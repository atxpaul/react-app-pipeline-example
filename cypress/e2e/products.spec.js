describe('Products component smoke test', () => {
    beforeEach(() => {
        const baseUrl = Cypress.env('BASE_URL') || 'http://localhost:5732';
        cy.visit(baseUrl);
    });

    it('Should load the products component and display it correctly', () => {
        cy.get('input.product-id-input').should('exist');
        cy.get('button.fetch-button').should('exist');
        cy.get('button.clear-button').should('exist');
    });

    it('Should fetch and display a list of products', () => {
        cy.get('button.fetch-button').click();

        cy.get('table.products-table').should('exist');
        cy.get('tbody > tr').should('have.length.greaterThan', 0);
    });

    it('Should fetch and display details of a specific product', () => {
        cy.get('input.product-id-input').type('1');

        cy.get('button.fetch-button').click();

        cy.get('div.product-detail').should('exist');
        cy.get('h3').should(
            'contain',
            'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
        );
    });

    it('Should clear the products and details when clear button is clicked', () => {
        cy.get('button.clear-button').click();

        cy.get('table.products-table').should('not.exist');
        cy.get('div.product-detail').should('not.exist');
    });
});
