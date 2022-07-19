const fs =require('fs')
const inquirer = require('inquirer');
const generateReadMe = ({ projectName, description, installation, usage, license, contribute, tests, email }) =>
`##  ${projectName}


## Description

${description}


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Contribute?](#credits)
- [Tests](#tests)
- [Questions](#questions)


## Installation

${installation}


## Usage

${usage}


## License

${license}


## How to Contribute

${contribute}


## Tests

${tests}


## Questions

Any questions that you may have about this project, can reach out to me by contacting me through my E-mail: ${email} `;

inquirer
.prompt([
    {
        type: 'input',
        message: 'what is the name of your project?',
        name: 'projectName',
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Provide a step-by-step description of how to get the development environment running.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
        name: 'usage',
    },
    
    {
        type: 'input',
        message: 'The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).',
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter contributor(s)',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Enter an E-mail users can reach you for any questions about the project',
        name: 'email',
    },
]).then((answers) => {
    const htmlPageContent = generateReadMe(answers)
fs.writeFile("README.md",
generateReadMe(answers),
(err) => err ? console.log(err) :console.log('Success!')
);
});