import { admin } from "../page/admin"
import { dataLogin } from "../page/dados"
import { dashboard } from "../page/dashboard"
import { login } from "../page/login"

describe('Teste automatizado de sistema de RH da OrangeHRM', () => {
  it('Scenario 1', () => {
    cy.log('Realizo o login e verifico se foi feito com sucesso verificando se acessou o dashboard')

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(login.input.user).type(dataLogin.input.user);
    cy.get(login.input.password).type(dataLogin.input.password);
    cy.contains('button', 'Login').click();

    cy.get(dashboard.labelDashboard).contains('Dashboard')

    cy.log('acesso a tela de admin e verifico todos os admin cadastrados')
    cy.get(admin.menuAdmin).contains('Admin').click();
    cy.contains('.oxd-select-option', 'Admin').click();
  })
})