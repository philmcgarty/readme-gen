// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";

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
    default:
      badge = "";
  }
  return badge;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";

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
    default:
      link = "";
  }
  return link;
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let text = "";

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

  if (text === "") {
    return text;
  } else {
    return`

  ## License
  
  ${text} - For more information [click here](${renderLicenseLink(license)})`};
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //console.log(`Title: ${data.title}`);
  const {title, description, installation, usage, license, contributors, tests, githubUser, email} = data;
return`
  # ${title}

  ![${license} License](https://img.shields.io/badge/License-${renderLicenseBadge(license)})
  
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

module.exports = generateMarkdown;
