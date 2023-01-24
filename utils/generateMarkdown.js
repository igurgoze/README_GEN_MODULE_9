// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let license = '';
  switch (data.license) {
    case 'MIT':
            license='[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        case 'Apache':
            license='[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
            break;
        case 'GNU':
            license='[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
            break;
        default:
          break;
  }
  return license;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data)}
## Description\n${data.description}\n
## Table of contents\n
- [Installation](#Insallation)\n
- [Usage](#Usage)\n
- [Contribution](#Contributing)\n
- [Test](#Test)\n
- [Questions](#Questions)\n
## Installation\n${data.userInstall}\n
## Usage\n${data.userUsage}\n
## Contributing\n${data.contributors}\n
## Test\n${data.tests}\n
## Questions\n
GitHub Username: [${data.userName}](https://github.com/${data.userName})\n
Email Address: [${data.userEmail}](${data.userEmail})`;
}
module.exports = generateMarkdown;