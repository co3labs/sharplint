#!/usr/bin/env node
"use strict";
const { execSync } = require('child_process');
function runCommand(command) {
    try {
        console.log(`Running command: ${command}`);
        execSync(command, { stdio: 'inherit' });
    }
    catch (error) {
        console.error(`Error running command: ${command}`);
        console.error(error.message); // Log more details about the error
        process.exit(1); // Exit with failure if any command fails
    }
}
// Run TypeScript checks
runCommand('npm run type-check');
// Run prettier
runCommand('npm run format');
// Run eslint
runCommand('npm run lint');
