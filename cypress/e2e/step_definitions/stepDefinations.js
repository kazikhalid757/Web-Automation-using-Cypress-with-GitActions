import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import locatorsPage from "../../Locators/locators";
import allData from '../../data/data'
import 'cypress-file-upload';
Cypress.config('defaultCommandTimeout', 60000)
const locator = new locatorsPage();
const data = new allData();

Given('Open Browser and Visit Website',()=> {
    cy.visit(data.gozayaan_url);
    });

    
When('Check that Region bangladesh is selected', () => {
     cy.wait(2000);
     cy.xpath(locator.arrow).click()
     cy.wait(3000);
     cy.xpath(locator.resone_name).should('be.visible')
     
     });


Then('Check that currency is BDT selected', ()=> {
    cy.xpath(locator.currency).should('be.visible'); 
  });


When('Select Tour option', () => {
    
    cy.wait(2000);
    cy.xpath(locator.tour).click()
    
    });
Then('Search with Sundarbans',  ()=> {
    cy.wait(1000);
    cy.xpath(locator.serch_option).click()
    cy.xpath(locator.search_input).type('Sundarbans')
    cy.xpath(locator.select).click()
    cy.wait(1000);
    cy.xpath(locator.search_button).click()
    cy.wait(2000)
   });

Then('Check that all location is Khulna', () => {
    cy.wait(3000);
    cy.xpath(locator.khulna).should('be.visible')
     
    });
When('Select Tag Eco Tours', () => {
        
        cy.wait(2000);
        cy.xpath(locator.show_more).click()
        cy.wait(1000);
        cy.xpath(locator.Eco_tour).click()
        cy.wait(2000);
        });