import execa from 'execa'
import chalk from 'chalk'
import { getRootDir, dirExists } from './../../utils/fileSystem'
import { respondOk, abortWithMessage } from './../../utils/console'

const checkIfGitIsInitialized = async () => {
    try {
        dirExists(`${getRootDir()}/.git`)
            ? await respondOk('git is initialized')
            : abortWithMessage('git is not initialized')
    } catch (e) {
        abortWithMessage(e)
    }
}

const checkIfGitDirectoryIsClean = async () => {
    try {
        const { stdout } = await execa('git', ['diff', '--stat'], {
            cwd: getRootDir(),
        })

        stdout
            ? abortWithMessage('git directory is not clean, push your changes')
            : await respondOk('git directory is clean')
    } catch (e) {
        abortWithMessage(e)
    }
}

const checkIfEnvironmentVariablesAreSet = async () => {
    try {
        let vars = [
            'GITHUB_PERSONAL_ACCESS_TOKEN',
            'NPM_TOKEN',
            'RELEASE_BRANCH',
            'REPO_OWNER',
            'REPO_NAME',
        ]
        let missing = []

        vars.forEach((variable) => {
            if (!process.env[variable]) missing.push(variable)
        })

        missing.length
            ? abortWithMessage(
                  `These .env variables are not set: ${chalk.cyan(
                      missing.join(', ')
                  )}`
              )
            : await respondOk('all .env variables are set')
    } catch (e) {
        abortWithMessage(e)
    }
}

const checkIfLocalBranchIsTheReleaseBranchConfigured = async () => {
    try {
        const { stdout } = await execa('git', ['branch', '--show-current'], {
            cwd: getRootDir(),
        })

        stdout !== process.env.RELEASE_BRANCH
            ? abortWithMessage(
                  'Your current local branch is different than the one configrued in your .env file'
              )
            : await respondOk(
                  'local branch is the same as the one configrued in your .env file'
              )
    } catch (e) {
        abortWithMessage(e)
    }
}

export {
    checkIfGitIsInitialized,
    checkIfGitDirectoryIsClean,
    checkIfEnvironmentVariablesAreSet,
    checkIfLocalBranchIsTheReleaseBranchConfigured,
}
