class NinjaHome {

    enterGameName(gameName){
    cy.get('#search')
        .type(gameName, {force: true})
    }

    clickSearchIcon(){
    cy.get('#search')
        .click({force: true})
    }

    selectBookOfDead(){
    cy.get("img[alt='BookofDeadThumbnail']").trigger('mouseover')
        .click()
    }

    validateGameName(GName){
        cy.get("figure > figcaption >h6")
        .invoke('text')
        .then((name) => {
            expect(name).to.include(GName)
        })
    }
    validateForLanguagesDropdown(){
        cy.viewport(1500, 1000)
        .get("header").find(".active-item").find('picture')
    }

    openBurgerMenu(){
        cy.get("section > label > span > span ")
        .click()
    }

    openNinjaTreasures(){
        cy.get("li[cursor='pointer']")
        .find("span").contains("PROMOTIONS")
        .click({force: true})
        .get("span").contains("NINJA TREASURES")
        .click({force: true})
    }

    openCasinoDropdown(){
        cy.get("li[cursor='pointer']")
        .find("span").contains("CASINO")
        .click({force: true})
    }

    validateForPopular(){
        cy.get("a[href='/popular-games']").find("span").find("span").contains("POPULAR", { timeout: 30000 })
        .should('be.visible')
    }
    
    validateForNew(){
        cy.get("a[href='/popular-games']").find("span").find("span").contains("NEW", { timeout: 30000 })
        .should('be.visible')
        }

    validateForSlots(){
        cy.get("a[href='/popular-games']").find("span").find("span").contains("SLOTS", { timeout: 30000 })
        .should('be.visible')
        }

    validateForLiveCasino(){
        cy.get("a[href='/popular-games']").find("span").find("span").contains("LIVE CASINO", { timeout: 30000 })
        .should('be.visible')
        }

    validateForJackpots(){
        cy.get("a[href='/popular-games']").find("span").find("span").contains("JACKPOTS", { timeout: 30000 })
        .should('be.visible')
        }

    validateForTableGames(){
        cy.get("a[href='/popular-games']").find("span").find("span").contains("TABLE GAMES", { timeout: 30000 })
        .should('be.visible')
        }

    validateForMegaways(){
        cy.get("a[href='/popular-games']").find("span").find("span").contains("MEGAWAYS", { timeout: 30000 })
        .should('be.visible')
        }

    openPopular(){
        cy.get("a[href='/popular-games']")
        .click()
    }

    openNew(){
        cy.get("a[href='/new-games']")
        .click()
    }

    openSlots(){
        cy.get("a[href='/slots']")
        .click()
    }

    openLiveCasino(){
        cy.get("a[href='/live-casino']")
        .click()
    }

    openJackpots(){
        cy.get("a[href='/jackpot-games']")
        .click()
    }

    openTableGames(){
        cy.get("a[href='/casino-games']")
        .click()
    }

    openMegaways(){
        cy.get("span[to='/megaways-games']")
        .click({force: true})
    }
    
    openAllPromotions(){
        cy.get("li[cursor='pointer']")
        .find("span").contains("PROMOTIONS")
        .click({force: true})
        .get("span").contains("ALL PROMOTIONS")
        .click({force: true})
    }

    findCasinoTab(){
        cy.get("li[cursor='pointer']")
        .find("span").contains("CASINO")
        .should("be.visible")
    }

    clickLanguageDropDown(){
      cy.get("header").find(".active-item").find('picture')
    .click()
    }

    findLiveCasinoTab(){
        cy.get("li[cursor='pointer']")
        .find("span").contains("LIVE CASINO")
        .should("be.visible")
    }

    findSportBettingTab(){
        cy.get("span").contains("SPORTS BETTING")
        .should("be.visible")
    }

    findLiveBettingTab(){
        cy.get("span").contains("LIVE BETTING")
        .should("be.visible")
    }

    findPromotionsTab(){
        cy.get("li[cursor='pointer']")
        .find("span").contains("PROMOTIONS")
        .should("be.visible")
    }

    findCustomerSupportTab(){
        cy.get("span").contains("CUSTOMER SUPPORT")
        .should("be.visible")
    }

    validatePage(URL){
        cy.url()
        .should('eq', URL)
    }

}
export default new NinjaHome();