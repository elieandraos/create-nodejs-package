import {
    checkIfGitIsInitialized,
    checkIfGitDirectoryIsClean,
    checkIfEnvironmentVariablesAreSet,
    checkIfLocalBranchIsTheReleaseBranchConfigured,
    checkIfChangelogExists
} from './preRequisites'

import pickReleaseType from './pickReleaseType'
import bumpPackageVersion from './bumpPackageVersion'

export {
    checkIfGitIsInitialized,
    checkIfGitDirectoryIsClean,
    checkIfEnvironmentVariablesAreSet,
    checkIfLocalBranchIsTheReleaseBranchConfigured,
    checkIfChangelogExists,
    pickReleaseType,
    bumpPackageVersion,
}
