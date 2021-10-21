require('dotenv').config()

import chalk from 'chalk'
import * as worker from './../src/tasks/release'

async function run() {
    // pre requisites
    console.log(chalk.magenta('Checking prerequisites:\n'))
    await worker.checkIfGitIsInitialized()
    await worker.checkIfGitDirectoryIsClean()
    await worker.checkIfEnvironmentVariablesAreSet()
    await worker.checkIfLocalBranchIsTheReleaseBranchConfigured()

    console.log(chalk.magenta('Starting the release flow:\n'))
}

run()
