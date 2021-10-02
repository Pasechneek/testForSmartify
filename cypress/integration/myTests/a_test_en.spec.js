describe('Testing english version', () => {
    it('website visit', () => {
        cy.visit('https://playsstar.com/worldwide');
    });
    
    it('Disclaymer check', () => {
        cy.get('#menu-item-1819 > a').should('contain', 'Disclaimer');
    });

    it('privacy test', () => {
        cy.get('#menu-item-1818 > a').should('contain', 'Privacy Policy');
    });

    it('Advertise With Us test', () => {
        cy.get('#menu-item-1820 > a').should('contain', 'Advertise With Us');
    });

    it('Impressum test', () => {
        cy.get('#menu-item-9785 > a').should('contain', 'Impressum');
    });

    it('Health test', () => {
        cy.get('#menu-item-1248 > a').should('contain', 'Health');
    });

    it('Fitness test', () => {
        cy.get('#menu-item-1246 > a').should('contain', 'Fitness');
    });

    it('Sports test', () => {
        cy.get('#menu-item-6313 > a').should('contain', 'Sports');
    });
});
