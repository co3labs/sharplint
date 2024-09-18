#!/usr/bin/env node
"use strict";
const { execSync } = require('child_process');
// Run TypeScript checks
execSync('npm run type-check', { stdio: 'inherit' });
// Run prettier
execSync('npm run format', { stdio: 'inherit' });
// Run eslint
execSync('npm run lint', { stdio: 'inherit' });
