#!/usr/bin/env node

// Import necessary modules
const spawn = require('cross-spawn');
const fs = require('fs');
const path = require('path');
const { log } = console;

// Get project name from command line arguments
const projectName = process.argv[2];
if (!projectName) {
    log("Usage: create-frontless-app your-app-name")
    process.exit(1);
}

try {
    // Get current working directory path
    const currentDir = process.cwd();
    // Calculate the path of the project directory
    const projectDir = path.resolve(currentDir, projectName);
    // Create directory at specified path (if not exists), recursive option ensures creation of all parent directories
    fs.mkdirSync(projectDir, { recursive: true });

    // Define path of template directory
    const templateDir = path.resolve(__dirname, 'template');
    // Copy template directory to project directory, recursive option ensures copying of all subdirectories and files
    fs.cpSync(templateDir, projectDir, { recursive: true });

    // Read package.json file in project directory
    const projectPackageJson = require(path.join(projectDir, 'package.json'));

    // Set project name
    projectPackageJson.name = projectName;

    // Write updated package.json file back to project directory
    fs.writeFileSync(
        path.join(projectDir, 'package.json'),
        JSON.stringify(projectPackageJson, null, 2)
    );

    // Install project dependencies using npm
    let res = spawn.sync('npm', ['install'], { stdio: 'inherit', cwd: projectDir });
    // Check if installation failed
    if (res.err) {
        console.log('Failed to install')
    }
    else {
        console.log('Success! Your new project is ready.');
        console.log(`Created ${projectName} at ${projectDir}`);
    }

} catch (e) {
    console.log(e)
}
