Feature: Talent tests

I want to perform bunch of actions as a Talent user

Scenario: Run “book of dead”

When I focus on search field
And Enter game name
    |  gameName  |
    |Book of Dead| 
Then I see that game name match
    |  gameName  |
    |Book of Dead| 
Then Run “book of dead”

Scenario: Language Switching

Then Language dropdown is shown in header
And I click language dropdown
# Then Selecting Finnish
# And I click language dropdown
# Then Selecting Estonian
# And I click language dropdown
# Then Selecting Russian

@iphone8
Scenario: Main Site Navigation

When I open burger menu in top left corner
And I can see "Casino" tab
And I can see "Live Casino" tab
And I can see "Sports Betting" tab
And I can see "Live Betting" tab
And I can see "Promotions" tab
And I can see "Customer Support" tab
Then I open "Ninja Treasures"
And I validate page "Ninja Treasures" URL
When I open burger menu in top left corner
Then I navigate to ALL Promotions
And I validate page "ALL Promotions" URL
When I open burger menu in top left corner

@iphone8
@openBurger
@CasinoDropdown
Scenario: Casino dropdown list validation

When I open "Casino" tab
Then I can see "Popular" tab
And I can see "New" tab
And I can see "Slots" tab
And I can see "Live Casino" tab
And I can see "Jacpots" tab
And I can see "Table Games" tab
And I can see "Megaways" tab


@iphone8
@openBurger
@CasinoDropdown
Scenario: Validate "Popular" page URL
When I open "Popular"
Then I am navigating on "Popular" page

@iphone8
@openBurger
@CasinoDropdown
Scenario: Validate "New" page URL
When I open "New"
Then I am navigating on "New" page

@iphone8
@openBurger
@CasinoDropdown
Scenario: Validate "Slots" page URL
When I open "Slots"
Then I am navigating on "Slots" page

@iphone8
@openBurger
@CasinoDropdown
Scenario: Validate "Live Casino" page URL
When I open "Live Casino"
Then I am navigating on "Live Casino" page

@iphone8
@openBurger
@CasinoDropdown
Scenario: Validate "Jackpots" page URL
When I open "Jackpots"
Then I am navigating on "Jackpots" page

@iphone8
@openBurger
@CasinoDropdown
Scenario: Validate "Table Games" page URL
When I open "Table Games"
Then I am navigating on "Table Games" page

@iphone8
@openBurger
@CasinoDropdown
Scenario: Validate "Megaways" page URL
When I open "Megaways"
Then I am navigating on "Megaways" page


