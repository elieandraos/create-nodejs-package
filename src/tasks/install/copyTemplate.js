import chalk from 'chalk'
import { copy, abortWithMessage, respondOk } from '@elieandraos/cli-tools'

const copyTemplate = async (packageInfo) => {
    try {
        copy(packageInfo.templateDir, packageInfo.root)

        await respondOk(
            `Scaffolded package files and directories in ${chalk.cyan(
                packageInfo.root
            )}`
        )
    } catch (e) {
        abortWithMessage(`Something wrong happened\n${e}`)
    }
}

export default copyTemplate
