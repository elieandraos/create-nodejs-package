import chalk from 'chalk'
import _ from '@elieandraos/cli-tools'
import fs from 'fs'

const copyTemplate = async (packageInfo) => {
    try {
        await _.copy(packageInfo.templateDir, packageInfo.root)

        fs.rename(packageInfo.root + '/.gitignore.example', packageInfo.root + '/.gitignore', (err) => {
            if(err) console.log(err)
        })

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
