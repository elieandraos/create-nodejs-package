import path from 'path'
import chalk from 'chalk'
import { projectInstall } from 'pkg-install'

const installDependencies = async (packageInfo) => {
    try {
        console.log(`Installing package dependencies...`)
        projectInstall({
            cwd: packageInfo.root,
        })
    }catch (e) {
        console.log(e)
        process.exit(1)
    }
}

export default installDependencies