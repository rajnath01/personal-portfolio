const { execSync } = require('child_process');
const fs = require('fs');

// Function to execute commands and log output
function runCommand(command) {
  console.log(`\n\n==== Running: ${command} ====`);
  try {
    const output = execSync(command, { stdio: 'inherit' });
    console.log(`==== Command completed successfully ====\n`);
    return true;
  } catch (error) {
    console.error(`==== Command failed with error: ====`);
    console.error(error.message);
    return false;
  }
}

// Main build process
console.log('Starting build debug process...');

// Check environment
console.log('Node version:');
runCommand('node -v');
console.log('NPM version:');
runCommand('npm -v');

// Install dependencies with detailed logging
console.log('Installing dependencies...');
if (!runCommand('npm install --no-package-lock --force')) {
  console.error('Failed to install dependencies');
  process.exit(1);
}

// Build the app with detailed logging
console.log('Building the app...');
try {
  process.env.CI = 'false';
  if (!runCommand('npm run build')) {
    console.error('Build failed');
    process.exit(1);
  }
} catch (error) {
  console.error('Build failed with error:', error);
  process.exit(1);
}

console.log('Build completed successfully!');