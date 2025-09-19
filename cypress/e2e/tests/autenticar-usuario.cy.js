//importando as bibliotecas
import {
Given, When, Then
} from 'cypress-cucumber-preprocessor/steps';

//Importando a biblioteca xpath
import 'cypress-xpath';

Given("Eu acesso a página de login", () => {
    cy.visit('https://the-internet.herokuapp.com/login');
});

When("Eu preencho os dados e solicito acesso", () => {
    
    cy.xpath('//*[@id="username"]').type('tomsmith');
    cy.xpath('//*[@id="password"]').type('SuperSecretPassword!');
    cy.xpath('//*[@id="login"]/button').click();
});

Then("Sistema faz a autenticação com sucesso", () => {
    cy.url().should('include',
              'https://the-internet.herokuapp.com/secure');
cy.screenshot({ overwrite : true });
});