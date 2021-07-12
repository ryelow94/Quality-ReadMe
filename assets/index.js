
const inquirer = require ("inquirer") 
const fs = require("fs")

function displayLicenseBadge (license) {
    if (license !== "none") {
        return `"![License](https://img.shields.io/static/v1?label=License&message=${license}&color=BLUE)"`
    } 
    return ""
} 

function displayLicenseLink (license) {
    if (license !== "none") {
        return `\n* [License](#license)\n`
    } 
    return ""
} 

function displayLicenseSection (license){
    if (license !=="none") {
        return `## License 
        
This project is licensed under ${license}`
    } 
    return ""
}

 inquirer 
    .prompt([
        {
            type: "input",
            message: "what is your project title?",
            name:"title",
        },
        {
            type: "input", 
            message: "Provide a short description of your project",
            name:"description",
        }, 
        {
            type: "list",
            message:"which license should your project have?",
            name:"license", 
            choices: ["MIT", "ISC", "Apache-2.0", "GPL", "none"],
        }, 
        {
            type: "input", 
            message:"Which command should be used to install dependencies?",
            name: "installation",
        },
        {
            type: "input",
            message:"which command should be used to run tests?",
            name:"test",
        },
        {
            type:"input",
            message:"What does the user need to know about using this repo?",
            name:"usage",
        }, 
        {
            type:"input",
            message: "Who worked on this project?", 
            name:"credit",
        },
        {
            type:"input",
            message:"What does the user need to know about contributing to this repo?",
            name:"contribute",
        },
        {
            type:"input",
            message:"What is your GitHub username?",
            name:"GitHub",
        },
        {
            type:"input",
            message:"What is your email address?",
            name:"email",
        },
    ]) 
    .then((response) => {
        fs.writeFile("./readMe.md", createReadMe(response), (err)=> console.log(err))
    } 
    ); 

    const createReadMe = (response) => 
    `# ${response.title}
${displayLicenseBadge(response.license)}

## Project Description 
${response.description} 

## Table of Contents: 
* [License](#license)
* [Installation](#installation) 
* [Tests](#tests) 
* [Usage](#usage) 
* [Credit](#credit)
* [Contributions](#contributions)
* [GitHub](#github) 
* [Email](#email)

${displayLicenseSection(response.license)}
 

## Installation: 
${response.installation} 

## Tests: 
${response.test} 

## Usage: 
${response.usage} 

## Credit: 
${response.credit}

## Contributions:  
${response.contribute} 

## GitHub: 
www.github.com/${response.GitHub} 

## Email: 
${response.email}`