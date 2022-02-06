import { When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import NinjaHome from '../../../support/pages/NinjaHome'


When('I focus on search field', () =>{
  NinjaHome.clickSearchIcon()
})

When('I open burger menu in top left corner', () =>{
  NinjaHome.openBurgerMenu()
})

And('Enter game name', (datatable) =>{
  datatable.hashes().forEach(element => {
    NinjaHome.enterGameName(element.gameName)
  }) 
})

Then('Run “book of dead”', () =>{
  NinjaHome.selectBookOfDead()
})


Then('I see that game name match', (datatable) =>{
  datatable.hashes().forEach(element => {
    NinjaHome.validateGameName(element.gameName)
  }) 
})

Then('Language dropdown is shown in header', () =>{
  NinjaHome.validateForLanguagesDropdown()
})

And('I click language dropdown', () =>{
  NinjaHome.clickLanguageDropDown()
})

And('I can see "Casino" tab', () =>{
  NinjaHome.findCasinoTab()
})

And('I can see "Live Casino" tab', () =>{
  NinjaHome.findLiveCasinoTab()
})

And('I can see "Sports Betting" tab', () =>{
  NinjaHome.findSportBettingTab()
})

And('I can see "Live Betting" tab', () =>{
  NinjaHome.findLiveBettingTab()
})


And('I can see "Promotions" tab', () =>{
  NinjaHome.findPromotionsTab()
})

And('I can see "Customer Support" tab', () =>{
  NinjaHome.findCustomerSupportTab()
})

Then('I navigate to ALL Promotions', () =>{
  NinjaHome.openAllPromotions()
})

Then('I open "Ninja Treasures"', () =>{
  NinjaHome.openNinjaTreasures()
})

And('I validate page "Ninja Treasures" URL', () =>{
  NinjaHome.validatePage(Cypress.env('ninjaTreasuresPage'))
})

And('I validate page "ALL Promotions" URL', () =>{
  NinjaHome.validatePage(Cypress.env('promotionsPage'))
})

Then('I am navigating on "Popular" page', () =>{
  NinjaHome.validatePage(Cypress.env('popularPage'))
})

Then('I am navigating on "New" page', () =>{
  NinjaHome.validatePage(Cypress.env('newPage'))
})

Then('I am navigating on "Slots" page', () =>{
  NinjaHome.validatePage(Cypress.env('slotsPage'))
})

Then('I am navigating on "Live Casino" page', () =>{
  NinjaHome.validatePage(Cypress.env('liveCasinoPage'))
})

Then('I am navigating on "Jackpots" page', () =>{
  NinjaHome.validatePage(Cypress.env('jackpotsPage'))
})

Then('I am navigating on "Table Games" page', () =>{
  NinjaHome.validatePage(Cypress.env('tableGamesPage'))
})

Then('I am navigating on "Megaways" page', () =>{
  NinjaHome.validatePage(Cypress.env('MegawaysPage'))
})

When('I open "Casino" tab', () =>{
  NinjaHome.openCasinoDropdown()
})

Then('I can see "Popular" tab', () =>{
  NinjaHome.validateForPopular()
})

And('I can see "New" tab', () =>{
  NinjaHome.validateForNew()
})

And('I can see "Slots" tab', () =>{
  NinjaHome.validateForSlots()
})

And('I can see "Live Casino" tab', () =>{
  NinjaHome.validateForLiveCasino()
})

And('I can see "Jacpots" tab', () =>{
  NinjaHome.validateForJackpots()
})

And('I can see "Table Games" tab', () =>{
  NinjaHome.validateForTableGames()
})

And('I can see "Megaways" tab', () =>{
  NinjaHome.validateForMegaways()
})

When('I open "Popular"', () =>{
  NinjaHome.openPopular()
})

When('I open "New"', () =>{
  NinjaHome.openNew()
})

When('I open "Slots"', () =>{
  NinjaHome.openSlots()
})

When('I open "Live Casino"', () =>{
  NinjaHome.openLiveCasino()
})

When('I open "Jackpots"', () =>{
  NinjaHome.openJackpots()
})

When('I open "Table Games"', () =>{
  NinjaHome.openTableGames()
})

When('I open "Megaways"', () =>{
  NinjaHome.openMegaways()
})