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
  } else {
    return "- [License](#license)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseChoice) {
  if (licenseChoice === "none") {
    return "";
  } else if (licenseChoice === "IPL1") {
    return `### License
    This project uses the IPL1 license.`;
  } else if (licenseChoice === "ISC") {
    return `### License
    This project uses the ISC license.`;
  } else if (licenseChoice === "MIT") {
    return `### License
    This project uses the MIT license.`;
  }
}

//generate markdown for README function
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${addLicenseBadge(data.license)}

  ## Description
  ${data.description}
  
  ### Table of contents
  - [Usage](#usage)
  - [Installation](#installation)
  - [Test](#test)
 ${renderLicenseLink(data.license)}
  - [Contribution Guidelines](#contribution-guidelines)
  - [Questions](#questions)

  ### Installation
  ${data["install instructions"]}

  ### Usage
  ${data.information}

  ### Contribution Guidelines
  ${data.contribution}

  ### Test
  ${data.test}

  ${renderLicenseSection(data.license)}

  ### Questions
  If you have any question, you can contact me at:
  https://github.com/${data.github},
  Email:${data.about}
`;
}

module.exports = generateMarkdown;
