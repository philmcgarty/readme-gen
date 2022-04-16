

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
  //console.log(`Title: ${data.title}`);
  const {title, description, installation, usage, license, contributors, tests, githubUser, email} = data;
return`
  # ${title}

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

  ## License

  ${license}

  ## Contributing

  ${contributors}

  ## Tests

  ${tests}

  ## Questions

  [GitHub](https://github.com/${githubUser})

  If you have any questions regarding this project, or require any further information, please email: ${email}

`;
}

module.exports = generateMarkdown;
