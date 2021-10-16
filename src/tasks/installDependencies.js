import path from 'path'
import chalk from 'chalk'
import { projectInstall } from 'pkg-install'

const installDependencies = async (packageInfo) => {
    try {
        const cwd = process.cwd()
        const root = path.join(cwd, packageInfo.packageName)

        console.log(`Installing package dependencies...`)
        projectInstall({
            cwd: root,
        })
    }catch (e) {
        console.log(e)
        process.exit(1)
    }
}

export default installDependencies