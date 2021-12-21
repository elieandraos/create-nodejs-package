import chalk from 'chalk'
import _ from '@elieandraos/cli-tools'

const copyTemplate = async (packageInfo) => {
    try {
        _.copy(packageInfo.templateDir, packageInfo.root)

        await _.respondOk(
            `Scaffolded package files and directories in ${chalk.cyan(
                packageInfo.root
            )}`
        )
    } catch (e) {
        _.abortWithMessage(`Something wrong happened\n${e}`)
    }
}

export default copyTemplate
