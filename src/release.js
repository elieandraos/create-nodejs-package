require('dotenv').config()

import chalk from 'chalk'
import * as worker from './../src/tasks/release'

async function run() {
    console.log(chalk.magenta('Checking prerequisites:\n'))

    // check pre-requisites
    await worker.checkIfGitIsInitialized()
    //await worker.checkIfGitDirectoryIsClean()
    await worker.checkIfEnvironmentVariablesAreSet()
    await worker.checkIfLocalBranchIsTheReleaseBranchConfigured()
    await worker.checkIfChangelogExists()

    console.log(chalk.magenta('\nStarting the release flow:\n'))

    // release flow
    const releaseType = await worker.pickReleaseType()
    const version = await worker.bumpPackageVersion(releaseType)
    const releaseChangelog = await worker.parseChangelog(version)
    // create github tag
    // create github release
    // publish to npm
}

run()
