import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import locatorsPage from "../../Locators/locators";
import allData from '../../data/data'
import 'cypress-file-upload';
Cypress.config('defaultCommandTimeout', 60000)
const locator = new locatorsPage();
const data = new allData();

Given('Open Browser and Visit Website', () => {
    cy.visit(data.gozayaan_url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36'
      },
      failOnStatusCode: false
    });
    cy.get('.backdrop', { timeout: 10000 }).should('not.exist');
  });
  

    
When('Check that Region bangladesh is selected', () => {
     cy.wait(3000);
     cy.xpath(locator.arrow).click()
     cy.wait(3000);
     cy.xpath(locator.resone_name).should('be.visible')
     
     });


Then('Check that currency is BDT selected', ()=> {
    cy.wait(3000);
    cy.xpath(locator.currency).should('be.visible'); 
  });
When('Click that Search Button', () => {
    cy.wait(3000);
    cy.xpath(locator.search_button).click()

});

Then('Check that Flight search results show properly', ()=> {
        cy.wait(3000);
        cy.xpath(locator.one_way).should('be.visible');
        cy.wait(2000); 
    });


When('Select Tour option', () => {
    
    cy.wait(3000);
    cy.xpath(locator.tour).click()
    
    });
Then('Search with Sundarbans',  ()=> {
    cy.wait(3000);
    cy.xpath(locator.serch_option).click()
    cy.xpath(locator.search_input).type('Sundarbans')
    cy.xpath(locator.select).click()
    cy.wait(1000);
    cy.xpath(locator.search_button).click()
    cy.wait(2000)
   });

Then('Check that search results page show properly', () => {
    cy.wait(3000);
    cy.xpath(locator.khulna).should('be.visible')
     
    });
When('Select Tag Eco Tours', () => {
        
        cy.wait(3000);
        cy.xpath(locator.show_more).click()
        cy.wait(1000);
        cy.xpath(locator.Eco_tour).click()
        cy.wait(2000);
        });


When('Select Visa option', () => {
    cy.wait(3000);
    cy.xpath(locator.tour_visa).click()

});



Then('Search with India', () => {
    cy.wait(1000);
    cy.xpath(locator.serch_option_visa).click()
    cy.xpath(locator.search_input).type('India')
    cy.xpath(locator.select_india).click()
    cy.wait(1000);
    cy.xpath(locator.search_button).click()
    cy.wait(2000)

});


Then('Check that Visa search page show properly', () => {
        cy.wait(3000);
        cy.xpath(locator.visa_page).should('be.visible')
    
});




When('Select Summary show properly', () => {
    cy.wait(3000);
    cy.xpath(locator.summary).should('be.visible')
        
    });