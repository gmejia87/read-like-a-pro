//license badge at top of readme
function addLicenseBadge(licenseChoice) {
  if (licenseChoice === "none") {
    return "";
  } else if (licenseChoice === "IPL1") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
  } else if (licenseChoice === "ISC") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  } else if (licenseChoice === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "none") {
    return "";
  } else if (license === "IPL1") {
    return "![link](https://opensource.org/licenses/IPL-1.0)";
  } else if (license === "ISC") {
    return "![link](https://opensource.org/licenses/ISC)";
  } else if (license === "MIT") {
    return "![link](https://opensource.org/licenses/ISC)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

//generate markdown for README function
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${addLicenseBadge(data.license)}

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

  ### Installation
  ${data["install instructions"]}

  ### Usage
  ${data.information}

  ### Contribution Guidelines
  ${data.contribution}

  ### Test
  ${data.test}

  ### License
  ${data.license}
  ${renderLicenseLink(data.license)}

  ### Questions
  If you have any question, you can contact me at:
  ${data.github},
  ${data.about}
`;
}

module.exports = generateMarkdown;
