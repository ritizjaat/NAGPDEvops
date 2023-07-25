Feature: Login Feature

    Testing the Login Functionality
Background: 
    Given I navigate to the application

@regression
Scenario: Verify If user is able to login successfully
Given I login to the application
And I am able to login successfully

Scenario: Verify User not able to login with incorrect credentials
When I try to login to the application with incorrect credentials
Then "Invalid credentials" message is displayed

@regression
Scenario: User is able to logout successfully
Given I login to the application
And I am able to login successfully
And I click on "userdropdown" menu
When I click on "Logout" Button
Then I am on "Login" page screen