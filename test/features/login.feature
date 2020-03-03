@all
Feature: Login

  Scenario: Verify error message is displayed in case of incorrect data
    Given User opens the main page
    Given User clicks on the "login"
    When User is logged in with following details
      | email    | incorrect@email.com |
      | password | incorrect_password  |
    Then Error message "Your username or password was incorrect." is displayed

