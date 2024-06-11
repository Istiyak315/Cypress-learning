Feature: simple form
Scenario: To fill the form
Given enter URL
When User enter first name
And Last name
And Email
And Number
Then click on submit user should be displayed alert message
