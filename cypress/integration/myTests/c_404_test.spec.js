describe('Testing 404 version', () => {
    it('site with 404 visit', () => {
        cy.request({url: 'https://playsstar.com/404-example-it', failOnStatusCode: false}).its('status').should('equal', 404)
        cy.visit('https://playsstar.com/404-example-it', {failOnStatusCode: false})
    });
    
    it('Disclaymer check', () => {
        cy.get('#menu-item-1819 > a').should('contain', 'Smentita');
    });

    it('privacy test', () => {
        cy.get('#menu-item-1818 > a').should('contain', 'Informativa sulla Privacy');
    });

    it('Advertise With Us test', () => {
        cy.get('#menu-item-1820 > a').should('contain', 'Pubblicizzare con noi');
    });

    it('Impressum test', () => {
        cy.get('#menu-item-9785 > a').should('contain', 'Imprimere');
    });

    it('Health test', () => {
        cy.get('#menu-item-1248 > a').should('contain', 'Salute');
    });

    it('Fitness test', () => {
        cy.get('#menu-item-1246 > a').should('contain', 'Fitness');
    });

    it('Sports test', () => {
        cy.get('#menu-item-6313 > a').should('contain', 'Sport');
    });
});
