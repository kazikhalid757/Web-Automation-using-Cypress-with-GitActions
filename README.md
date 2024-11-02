# Cypress Web Automation Project

This project contains automated UI tests for the [Gozayaan website](https://gozayaan.com) using Cypress and integrates with GitHub Actions to ensure continuous testing with detailed reporting via screenshots and videos.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [GitHub Actions CI/CD](#github-actions-ci-cd)
- [Artifacts & Reports](#artifacts--reports)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

The goal of this project is to automate web application testing for the Gozayaan platform, ensuring the accuracy of crucial functions like region and currency selection, flight search, tour search, and visa search functionality. Cypress enables reliable, easy-to-debug test automation, while GitHub Actions supports a continuous testing setup to validate changes promptly.

## Features

- Automated tests for key website functionalities, including:
  - Region and currency verification
  - Default flight search functionality
  - Tour option selection and search validation
  - Visa search validation
- Automatic artifact generation (screenshots & videos) for failed test cases.
- Continuous integration with GitHub Actions.

## Tech Stack

- **Cypress**: For test automation and UI validations.
- **GitHub Actions**: For CI/CD to automate test runs on each code push.
- **Allure Reports** (Optional): To provide enhanced test reporting.

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/kazikhalid757/Web-Automation-using-Cypress-).git
   cd Web-Automation-using-Cypress-
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run Tests Locally:**

   - Run all tests:
     ```bash
     npx cypress run
     ```
   - Run tests in interactive mode:
     ```bash
     npx cypress open
     ```

## Usage

To run specific test cases or modify configurations:

- **Custom Test Case**: You can create new test cases by adding files in the `cypress/e2e` directory.
- **Environment Configurations**: Modify `cypress.config.js` to customize environment settings, like the base URL.

## GitHub Actions CI/CD

GitHub Actions automates test runs for every push to the main branch. Each run generates screenshots and videos for failed tests, providing a straightforward way to verify application functionality without manual intervention.

The workflow file (`.github/workflows/cypress.yml`) sets up:

- **Test Runs**: Executes Cypress tests on each push.
- **Artifact Upload**: Captures and uploads screenshots and videos of failed tests.

### Workflow Example

Below is a sample workflow configuration:

```yaml
name: Cypress Tests

on: [push, pull_request]

jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v2

      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '16'

      - name: Install Dependencies
        run: npm install

      - name: Run Cypress Tests
        run: npx cypress run

      - name: Upload Artifacts
        if: failure()
        uses: actions/upload-artifact@v2
        with:
          name: cypress-artifacts
          path: cypress/screenshots
```

## Artifacts & Reports

All screenshots and videos from failed tests are uploaded as GitHub Actions artifacts. To view:

1. Go to the **Actions** tab.
2. Select a workflow run.
3. Download **cypress-artifacts** from the **Artifacts** section.

## Contributing

Contributions are welcome! Please open an issue first to discuss any major changes. To contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

---
### GitActions CI Integration Faild because the Gozayaan website has Cloudflare protection when tested in headless Cloudflare blocks the website. You can check screenshots or videos of Git Actions.
With this `README.md`, you can easily set up and run the project, understand the CI/CD setup, and leverage artifacts for detailed test results. Let me know if you need further customization!
