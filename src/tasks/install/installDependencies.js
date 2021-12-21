import { projectInstall } from 'pkg-install'
import _ from '@elieandraos/cli-tools'

const installDependencies = async (packageInfo) => {
    try {
        await _.respondOk(`Installing package dependencies...`)

        await projectInstall({
            cwd: packageInfo.root,
        })
    } catch (e) {
        _.abortWithMessage(`Something wrong happened\n${e}`)
    }
}

export default installDependencies
