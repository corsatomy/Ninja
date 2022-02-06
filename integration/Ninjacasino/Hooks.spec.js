
const {
  Before,
  After,
  Given,
  Then
} = require('cypress-cucumber-preprocessor/steps')

Before(function () {
  cy.log('This hook will navigates to the homepage and clicks "I agree" before each scenario')
    cy.on('uncaught:exception', (e) => {
      if (e.message.includes('Script error')){
        return false
      }
    })
    .visit(Cypress.env('homePage'))
    .get('#search', { timeout: 10000 })
    .should('be.visible')
    .wait(5000)
    .get("button[type='button']").find("div").contains('I agree')
    .click()
})
Before({ tags: '@iphone8' }, function () {
  // This hook will be executed before targeted scenario
  cy.log('User uses iPhone 8')
  .viewport("iphone-8")
})

Before({ tags: '@openBurger' }, function () {
  // This hook will be executed before targeted scenario
  cy.log('Open burger menu')
  .get("section > label > span > span ")
  .click()
})

Before({ tags: '@CasinoDropdown' }, function () {
  // This hook will be executed before targeted scenario
  cy.log('Open Casino dropdown')
  .get("li[cursor='pointer']")
        .find("span").contains("CASINO")
        .click({force: true})
})
// After( function () {
//   // This hook will be executed after all scenarios
// })
// After({ tags: '@logout' }, function () {
//   // This hook will be executed after targeted scenario
//   cy.log('Happy end')
//     .get('#navBarProfileNameId', { timeout: 10000 }).should('be.visible')
//     .click()
//     .get("button[type='button']").contains('Log out', { timeout: 10000 }).should('be.visible')
//     .click()
//     .get("button[type='button']").contains('Log out')
//     .click()
// })
// Before({ tags: '@RegisterPage' }, function () {
//   // This hook will be executed before targeted scenario
//   cy.log('This hook will be executed before this scenario')
//     .visit('https://mobolise-dev.nw.r.appspot.com/register')
// })
