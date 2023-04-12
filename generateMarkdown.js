// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license != 'none') {
    return `[license](http://img.shields.io/badge/license-${license}-blue.svg)`;
  }else {
    return " ";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license != 'none') {
    return`[license](#license)`
  }else {
    return " ";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license != 'none') {
    return `## License section of ReadMe ${license}.`;
  }else {
    return " ";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  from ${data.name}
  ## Table of Contents:
  - [Description](#description)
  - [Installations](#installations)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [Test](#test)
  - [Bio](#bio)
  - [Contact info](#contact info)

  ## Description:
  ${data.description}
  
  ## Installations:
  ${data.installations}

  ## Usage:
  ${data.usage}

  ## Contributors:
  ${data.contributors}

  ## Test:
  ${data.test}

  ## Bio:
  ${data.bio}

  ## Contact Me:
  Name:${data.name}
  Linkdin account:${data.linkdin}
  Github account:${data.github}
  Email:${data.email}




`;
}

module.exports = generateMarkdown;
