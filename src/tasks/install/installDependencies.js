import { projectInstall } from 'pkg-install'
import { respondOk, abortWithMessage } from '@elieandraos/cli-tools'

const installDependencies = async (packageInfo) => {
    try {
        await respondOk(`Installing package dependencies...`)

        await projectInstall({
            cwd: packageInfo.root,
        })
    } catch (e) {
        abortWithMessage(`Something wrong happened\n${e}`)
    }
}

export default installDependencies
