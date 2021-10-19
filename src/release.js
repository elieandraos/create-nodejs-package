require('dotenv').config()
import * as worker from './../src/tasks/release'

async function run() {
    // pre requisites
    await worker.checkIfGitIsInitialized()
    await worker.checkIfGitDirectoryIsClean()
    await worker.checkIfEnvironmentVariablesAreSet()
}

run()
