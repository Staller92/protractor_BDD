@all
Feature: Search

  Background:
    Given User opens the main page

  @smoke
  Scenario Outline: Slick slider should be displayed
    When User searches for "<searchTerm>"
    Then Slick slider is displayed
    Examples:
      | searchTerm |
      | disk       |
      | storage    |

  @my
  Scenario: Filter should have 7 checkbox items
    When User searches for "disk"
    Then Filter section with '7' checkboxes are displayed

