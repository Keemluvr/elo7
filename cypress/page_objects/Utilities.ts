class Utilities {
  get envToRun() {
    return Cypress.env("ENVIRONMENT") ?? "local";
  }
}

export default Utilities;
