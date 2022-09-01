// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link

// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README

// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}
  
  ### Table of contents
  - Usage
  - Installation
  - Test
  - License
  - Contribution guidelines
  - Questions
  - About /contact me

  ### Usage
  ${data.information}

  ### Installation
  ${data["install instructions"]}

  ### Test
  ${data.test}

  ### License
  ${data.license}

  ### Contribution Guidelines
  ${data.contribution}

  ### Questions
  ${data.about}
`;
}

module.exports = generateMarkdown;
