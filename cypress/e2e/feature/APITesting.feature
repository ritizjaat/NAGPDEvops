Feature: API Testing

Scenario: Able to add or delete a  user
Given I add a new user to the portal
And User is added successfully
When I delete the newly created user
Then User is deleted successfully

Scenario: Able to get the specific user details
Given I get all the details of the user with first name "Janet"
And User details is correct and matched with "apitestdata"
