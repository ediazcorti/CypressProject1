# CypressProject - Linkedin Automation: Add 100 Contacts with a specific "Role" (such as "IT Recruiters")

 Linkedin Automatic Contacts Add for "IT Recruiters" (Not Working!)

This is a demonstration for a small application to test and automate adding contacts of a specified role in Linkedin, which breaks due to the website's security

##  Intented Functionality:
It has several testcases that perform actions imitating a real Linkedin User who wants to search and add 100 Contacts that work as IT Recruiters

## Obstacles / Blockers: Linkedin Automation Prevention:
Linkedin has a loop of infinite fetch requests when detecting the Cypress testing environment; therefore this testsuite does not work after logging in, since it gets paused waiting for all those never ending loops of security fetchs. Still, the rest of logic for all the actions is written in the code.
## Features include actions like: 
* login
* search
* locate "Connect"(with user) buttons
* Press Next Page if User finished cilcking all available "Connect Buttons"
* Stopping the test if the user added 100 contacts (or if tests reach a timeout)

## Instructions:
1. Edit the "User" and "Password" variables found in jsconfig.json
2. Run this project with npx cypress open on your IDE's terminal
3. Observe how it breaks after logging into your user, with a chain of fetch requests for security against automated attacks (video example: https://youtu.be/jZQDxB7bZow) 
