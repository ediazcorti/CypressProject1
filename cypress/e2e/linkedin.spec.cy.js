/* const { describe } = require("mocha"); */
let AddedContacts = 0;
let PageNumber = 1;
let hasClickedAllAddButtonsOfThisPage = false;





describe('User Logs In to linkedin', () => {

    // Before starting the test, checks that the user is not logged in, and then proceed to login:

    // 0. Prerrequisite: User is not logged in
    before('Visits Linkedin Unlogged', () => {
        cy.visit('www.linkedin.com/feed/')
        // Check that the user is not logged in yet by checking that session cookies do NOT exist
        cy.getCookie('session_id').should('not.exist');
        // Verify that Login inputs are loaded
        cy.get('input#username', { timeout: 10000 }).should('be.visible');
        cy.get('input#password').should('be.visible');

    })


    // 1. After Checking User is not logged in, Proceed to login:
    it('Logins Successfully', () => {
        cy.get('#username').type(Cypress.env('username'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('button[type="submit"]').click();
        // Check that the user logged successfully: by checking that session ID cookies exist
        cy.getCookie('session_id').should('exist');
       

        // OBSOLETE: Invalid solutions to skip infinite fetch requests;
        /*
                cy.get('header').should('be.visible');
                cy.log('Forcing this test to pass by skipping remaining assertions.');
        return
         // Resolve a promise to pass the test
         Cypress.Promise.resolve().then(() => {
            // Optional: Add any additional logic if needed
          }); */


    }

    )


})
describe('User clicks Search and writes "IT RECRUITER"', () => {
    // 2. After Logging, now the user gets to the search input and writes in IT RECRUITER and presses enter
    it("Clicks on Search button", () => {
        cy.get('.search-global-typeahead__input')
            .type('IT RECRUITER{enter}');
        cy.wait(2000);
        // Wait until next page loads, then clicks on the text to "View all results"
        cy.contains('a', 'Ver todos los resultados de personas').click();
        cy.title().should('include', 'it recruiter');
    }

    )
},

    describe('User verifies and clicks every ADD button on page', () => {

        function clickNextPageIfNeeded() {
            // We can only arrive to this function if the user somehow added every contact in a results page
            // So, we will check if the Added contact reached the limit, if this is false, we will stop the test
            // Also, we will check the variable to only run this function if the user has successfully clicked all the "ADD" buttons first, for more security
            if (hasClickedAllAddButtonsOfThisPage && AddedContacts < 100) {
                cy.get('[class$="-pagination__button--next"]').click();


                // Reset the flag
                hasClickedAllAddButtonsOfThisPage = false;

                // Optionally, re-evaluate the page after clicking "Next Page"
                cy.wait(2000); // Wait for the page to load or adjust based on your application
                cy.reload(); // Reload or navigate to the new page

                // After navigation, re-run the process
                clickAllAddButtons();
            }
            else {
                cy.log(`Total contacts added is ${AddedContacts}`);
                cy.stop();

            }
        }

        function ClickAllAddButtons() {
            // 3. Search CSS Label with "Invita a"--- "a conectar"; to search the ADD buttons
            cy.get('[aria-label*="Invita a "][aria-label*=" a conectar"]')
                // 4. For each found button, ask if the AddedContacts number is less than 100, if true, add the next contact
                .each(($el) => {
                    if (AddedContacts < 100) {
                        // Click on the element
                        cy.wrap($el).click();
                        cy.wait(200);
                        cy.get('aria-label="Enviar sin nota"').click();
                        cy.wait(200);
                        // Increment the AddedContacts variable
                        AddedContacts++;
                    }

                }).then(() => {
                    // Log the final count
                    cy.log(`Total contacts added in Page Number ${PageNumber}: ${AddedContacts}`);
                    hasClickedAllAddButtonsOfThisPage = true;

                    // Now call the function to check if we still have contacts to ADD; 
                    // IF we have more contacts to add today, the function will go to next page and then re-call the "ADD" clicking function
                    clickNextPageIfNeeded()


                }

                )

        }

        it("Clicks on every ADD button --- and Clicks on NEXT Page if they still have less than 100 contacts added in this run", () => {
            ClickAllAddButtons();
        })
    },


    )










)
