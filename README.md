# CypressProject - Linkedin Automation: Add 100 Contacts with a specific "Role" (such as "IT Recruiters")

 Linkedin Automatic Contacts Add for "IT Recruiters" (Not Working!)

This is a demonstration for a small application to test and automate adding contacts of a specified role in Linkedin

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
