#!/usr/bin/env node
const { execSync } = require('child_process')

function runCommand(command: string): void {
  try {
    console.log(`Running command: ${command}`)
    execSync(command, { stdio: 'inherit' })
  } catch (error: any) {
    console.error(`Error running command: ${command}`)
    console.error(error.message) // Log more details about the error
    process.exit(1) // Exit with failure if any command fails
  }
}

// Run TypeScript checks directly with `tsc`
runCommand('npx tsc --noEmit')

// Run prettier directly
runCommand('npx prettier --write .')

// Run eslint directly
runCommand('npx eslint .')
