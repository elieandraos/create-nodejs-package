require('dotenv').config()

import chalk from 'chalk'
import * as worker from './../src/tasks/release'

async function run() {
    console.log(chalk.magenta('Checking prerequisites:\n'))

    // check pre-requisites
    await worker.checkIfGitIsInitialized()
    await worker.checkIfGitDirectoryIsClean()
    await worker.checkIfEnvironmentVariablesAreSet()
    await worker.checkIfLocalBranchIsTheReleaseBranchConfigured()

    console.log(chalk.magenta('\nStarting the release flow:\n'))

    // release flow
    const releaseType = await worker.pickReleaseType()
    const version = await worker.bumpPackageVersion(releaseType)
}

run()
