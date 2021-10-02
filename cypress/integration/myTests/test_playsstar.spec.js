describe('Testing header buttom', () => {
    it('german site test', () => {
        cy.visit('https://playsstar.com/worldwide');
        cy.get('button[<a href="https://playsstar.com/disclaimer">Disclaimer</a>]').should('have.text', 'Disclaimer');
    });
});