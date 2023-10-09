// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'Boost':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    case 'BSD':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case 'Creative Commons':
      return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
    case 'Eclipse':
      return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
    case 'GNU':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'IBM':
      return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Mozilla':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    case 'Open Data Commons':
      return '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)';
    case 'Perl':
      return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
    case 'Zlib':
      return '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)';
    case 'NONE':
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'Boost':
      return 'https://www.boost.org/LICENSE_1_0.txt';
    case 'BSD':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    case 'Creative Commons':
      return 'http://creativecommons.org/publicdomain/zero/1.0/';
    case 'Eclipse':
      return 'https://opensource.org/licenses/EPL-1.0';
    case 'GNU':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'IBM':
      return 'https://opensource.org/licenses/IPL-1.0';
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Mozilla':
      return 'https://opensource.org/licenses/MPL-2.0';
    case 'Open Data Commons':
      return 'https://opendatacommons.org/licenses/by/';
    case 'Perl':
      return 'https://opensource.org/licenses/Artistic-2.0';
    case 'Zlib':
      return 'https://opensource.org/licenses/Zlib';
    case 'NONE':
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) { 
    let sectionText = 
      `\n\n## License
      \n
      \nCopyright 2023
      \nLicensed under the ${license} License (the \"License\")
      \nyou may not use this file except in compliance with the License.
      \nYou may obtain a copy of the License at 
      \n
      \n` + renderLicenseLink(license) + `
      \n
      \nUnless required by applicable law or agreed to in writing, software 
      \ndistributed under the License is distributed on an \"AS IS\" BASIS,
      \nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      \nSee the License for the specific language governing permissions and
      \nlimitations under the License.
      \n
      \n`;
    return sectionText;
  } else {
      return '';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);
  return `# ${data.title} 
  \n
  \n ${badge}
  \n
  \n## Description
  \n
  \n${data.description}
  \n
  \n## Table of Contents
  \n
  \n- [Installation](#installation)
  \n- [Usage](#usage)
  \n- [Contributing](#contributing)
  \n- [License](#license)
  \n
  \n## Installation
  \n
  \n${data.installation}
  \n
  \n## Usage
  \n
  \n${data.usage}
  \n
  \n## Contributing
  \n
  \n${data.contribution}
  \n${licenseSection}
  \n## Tests
  \n
  \n${data.test}
  \n
  \n## Questions
  \n
  \n${data.username}  
`;
}

module.exports = generateMarkdown;
