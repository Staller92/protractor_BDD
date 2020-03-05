@all
Feature: Login

  Background:
    Given User opens the main page

  Scenario: Url of the page is not correct
    Then Page with url "https://shop.westerndigital.com/" is opened

  @my
  Scenario: Verify error message is displayed in case of incorrect data
    Given User clicks "Header>login button"
    When User is logged in with following details
      | email    | incorrect@email.com |
      | password | incorrect_password  |
    Then Error message "Your username or password was incorrect." is displayed

  Scenario: Should display the popover-content on mouseover
    When User mouses over on shop button
    When User mouses over on san disk Button
    Then All san disk product items are displayed

