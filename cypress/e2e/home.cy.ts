import HomePage from "../page_objects/HomePage";

const homePage = new HomePage();
const environment = homePage.envToRun;

describe(`[${environment}] Home page test`, () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/jobs?only-active=true", {
      fixture: "jobs.json",
    }).as("getVagas");

    cy.visitUrl(environment, "/");
    cy.wait("@getVagas");

    cy.get(homePage.getHeroTitle, { timeout: 30000 }).should(
      "have.text",
      "trabalhe no elo7"
    );
  });

  it("should ensure open positions section is visible", () => {
    cy.get(homePage.getOpenPositionsSection).should("be.visible");
  });

  it("should successfully list jobs", () => {
    cy.get(homePage.getListJobs).should("be.visible");

    cy.get(homePage.getListItems)
      .should("be.visible")
      .each(($el) => {
        cy.wrap($el).find("a").should("have.attr", "href");
      });
  });

  it("verifies if the job search field is visible and functional", () => {
    cy.get(homePage.getInputSearch).should("be.visible");

    cy.get(homePage.getInputSearch).type("Pessoa");
    cy.get(homePage.getInputSearch).should("have.value", "Pessoa");
    cy.get(homePage.getListItems).should("have.length", 6);

    cy.get(homePage.getInputSearch).clear();
    cy.get(homePage.getListItems).should("have.length", 9);
  });

  it("verifies page accessibility", () => {
    cy.get(homePage.getOpenPositionsSection).should(
      "have.attr",
      "aria-label",
      "seção de vagas abertas"
    );

    cy.get(homePage.getListItems).each(($link) => {
      cy.wrap($link).should("have.attr", "aria-label", "vaga disponível");
    });
  });
});
