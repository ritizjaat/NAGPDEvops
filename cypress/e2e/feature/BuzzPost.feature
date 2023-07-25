Feature: BuzzPost Feature

Background:
    Given I navigate to the application
    And I login to the application
    And I am able to login successfully
    And I click on "Buzz" on the left side panel
    And I am on "Buzz" page

@regression
Scenario: User should be able to post on buzz
 Given I am on "Buzz" page
 And I enter "{randomString}Hello Automation engineer{randomString}" in "buzz post input box"
 When I tap on "Post" button in Buzz Page
 Then "{randomString}Hello Automation engineer{randomString}" is displayed in buzz post

 Scenario: User should be able to delete post from buzz
 Given I am on "Buzz" page
 And I enter "{randomString}Hello Automation engineer{randomString}" in "buzz post input box"
 And I tap on "Post" button in Buzz Page
 And "{randomString}Hello Automation engineer{randomString}" is displayed in buzz post
 And I tap on three icon button for the post "{randomString}Hello Automation engineer{randomString}"
 And I tap on "Delete Post" button in Buzz Page
 And Confirmation popup is displayed
 When I click on "Yes, Delete" on the popup
 Then "{randomString}Hello Automation engineer{randomString}" post is not visible in the buzz

