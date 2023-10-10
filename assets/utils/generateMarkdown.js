// Function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
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

// Function that returns the license link
// If there is no license, returns an empty string
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

// Function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  if(license) { 
    let sectionText = 
      `\n## License
      
      Copyright 2023
      Licensed under the ${license} License (the \"License\") you may not use this file except in compliance with the License.
      You may obtain a copy of the License at 
      
      ` + renderLicenseLink(license) + `
      
      Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and limitations under the License.
      \n`;
    return sectionText;
  } else {
      return '';
    }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);
  return `# ${data.title} 
  
  ${badge}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Contributing
  
  ${data.contribution}
  ${licenseSection}
  ## Tests
  
  ${data.test}
  
  ## Questions
  
  ${data.username}  
`;
}

module.exports = generateMarkdown;
