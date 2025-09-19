Feature: Autenticar usuário
    Como um usuário que possui conta no sistema
    Eu quero realizar autenticação
    Para que eu possa acessar minha conta
    
Scenario: Login de usuário com sucesso
    Given Eu acesso a página de login
    When Eu preencho os dados e solicito acesso
    Then Sistema faz a autenticação com sucesso