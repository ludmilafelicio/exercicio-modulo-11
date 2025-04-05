///<reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('ludmilatestes@ebac.com.br')
        cy.get('#password').type('testando!#')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, ludmilatestes (não é ludmilatestes? Sair)' )
    
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('ludmila@teste.com.br')
        cy.get('#password').type('testeludmila123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('ludmilatestes@ebac.com.br')
        cy.get('#password').type('testeludmila1')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail ludmilatestes@ebac.com.br está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')
    });
})