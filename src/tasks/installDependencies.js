import path from 'path'
import chalk from 'chalk'
import { projectInstall } from 'pkg-install'
import { respondOk, abortWithMessage } from './../utils/console'

const installDependencies = async (packageInfo) => {
    try {
        respondOk(`Installing package dependencies, please be patient...`)
        projectInstall({
            cwd: packageInfo.root,
        })
    } catch (e) {
        abortWithMessage(`Something wrong happened\n${e}`)
    }
}

export default installDependencies
