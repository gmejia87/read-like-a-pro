const fs = require("fs");
const path = require("path");

const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/README.md", fileContent, (err) => {
      //if there's an error reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        //return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }

      //if everythng went well, resolve the Promise and send the successful data to the `.than()` method
      resolve({
        message: "File created!",
      });
    });
  });
};

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
  ${addLicenseBadge(licenseChoice)}

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
  ${renderLicenseLink(license)}

  ### Questions
  If you have any question, you can contact me at:
  ${data.github},
  ${data.about}
`;
}

module.exports = { writeFile };
