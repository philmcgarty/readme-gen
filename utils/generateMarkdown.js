// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // var to hold badge info for end of hyperlink
  let badge = "";
  // switch statement based on license type chosen
  switch(license){
    case "GPL":
      badge = "GPL-brightgreen";
      break;
    case "Apache":
      badge = "Apache-yellowgreen";
      break;
    case "Ms-PL":
      badge = "Ms--PL-yellow";
      break;
    case "BSD":
      badge = "BSD-orange";
      break;
    case "CDDL":
      badge = "CDDL-red";
      break;
    case "EPL":
      badge = "EPL-lightgrey";
      break;
    case "MIT":
      badge = "MIT-blue";
      break;
    default: // if user managed to not enter a license an empty string is returned
      badge = "";
  }
  if (badge === ""){
    return "";
  }
  return `![${license} License](https://img.shields.io/badge/License-${badge})`;
};


// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // var to hold relevant hyperlink for license info
  let link = "";
  // switch statement based on license type chosen
  switch(license){
    case "GPL":
      link = "https://opensource.org/licenses/GPL-3.0";
      break;
    case "Apache":
      link = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "Ms-PL":
      link = "https://opensource.org/licenses/MS-PL";
      break;
    case "BSD":
      link = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "CDDL":
      link = "https://opensource.org/licenses/CDDL-1.0";
      break;
    case "EPL":
      link = "https://opensource.org/licenses/EPL-2.0";
      break;
    case "MIT":
      link = "https://opensource.org/licenses/MIT";
      break;
    default: // if user managed to not enter a license an empty string is returned
      link = "";
  }
  return link;
};


// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // var to hold relevant text for license info
  let text = "";
  // switch statement based on license type chosen
  switch(license){
    case "GPL":
      text = "GNU General Public License (GPL)";
      break;
    case "Apache":
      text = "The Apache License";
      break;
    case "Ms-PL":
      text = "Microsoft Public License (Ms-PL)";
      break;
    case "BSD":
      text = "Berkeley Software Distribution License (BSD)";
      break;
    case "CDDL":
      text = "Common Development and Distribution License (CDDL)";
      break;
    case "EPL":
      text = "Eclipse Public License (EPL)";
      break;
    case "MIT":
      text = "Massachusetts Institute of Technology License (MIT)";
      break;
    default:
      text = "";
  }
  // if no license chosen then the license section is not created, empty string returned instead
  if (text === "") {
    return text;
  } else {
    // creates markdown for license section - text, and link to more info about license
    return`

  ## License
  
  ${text} - For more information [click here](${renderLicenseLink(license)})`};
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // variables extracted from data object created from user input
  const {title, description, installation, usage, license, contributors, tests, githubUser, email} = data;
  // markdown template
  return`
  # ${title}

  ${renderLicenseBadge(license)}
  
  ## Description

  ${description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  
  ${installation}

  ## Usage

  ${usage}
  ${renderLicenseSection(license)}

  ## Contributing

  ${contributors}

  ## Tests

  ${tests}

  ## Questions

  [GitHub](https://github.com/${githubUser})

  If you have any questions regarding this project, or require any further information, please email: ${email}
`;
};

// export function to make available to index.js
module.exports = generateMarkdown;
