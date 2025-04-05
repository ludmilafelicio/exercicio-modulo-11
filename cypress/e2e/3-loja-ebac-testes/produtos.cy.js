///<reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
    
    it('Deve selecionar um produto da lista', () => {
        cy.get('.block-inner')
            .eq(6)
            .click()
            cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.block-inner')
            .first()
            .click()
            cy.get('.posted_in > a').should('contain', 'Hoodies & Sweatshirts')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.block-inner')
            .last()
            .click()
            cy.get('.posted_in > a').should('contain', 'Eco Friendly|Clothing')
    });
});