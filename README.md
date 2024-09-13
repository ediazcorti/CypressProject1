# CypressProject - Linkedin Automation: Add 100 Contacts with a specific "Role" (such as "IT Recruiters")

 Linkedin Automatic Contacts Add for "IT Recruiters" (Not Working!)

This is a demonstration for a small application to test and automate adding contacts of a specified role in Linkedin, which breaks due to the website's security

##  Intented Functionality:
It has several testcases that perform actions imitating a real Linkedin User who wants to search and add 100 Contacts that work as IT Recruiters

## Obstacles / Blockers: Linkedin Automation Prevention:
Linkedin has a loop of infinite fetch requests when detecting the Cypress testing environment; therefore this testsuite does not work after logging in, since it gets paused waiting for all those never ending loops of security fetchs. Still, the rest of logic for all the actions is written in the code.
## Features include actions like: 
* Login at the start
* Search "IT Recruiter" (or whatever needed) and show results
* Locate and click All "Connect" (with "X" user) buttons in the result page before going to the next one
* Press Next Page if User finished clicking all available "Connect Buttons"; and the user did not add 100 people yet (Weekly Linkedin Limit is 100)
* Stopping the test if the user added 100 contacts (or if tests reach a timeout)

## Instructions:
1. Edit the "User" and "Password" variables found in jsconfig.json (I know it could also be taken from Fixture files yes)
2. Run this project with npx cypress open on your IDE's terminal
3. Observe how it breaks after logging into your user, with a chain of fetch requests for security against automated attacks (video example: https://youtu.be/jZQDxB7bZow) 

### Things that can be optimized:
A couple of locators are searched by text labels which appear in the DOM as text generated in the user's system language, which has to be replaced with Class/ID Locators, has not been optimized yet for demonstration and practical reasons. I could set the user and password variables in fixture files instead of as environment variables.
