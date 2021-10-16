import chalk from 'chalk'
import { copy } from './../utils/fileSystem'

const copyTemplate = async (packageInfo) => {
    try {
        copy(packageInfo.templateDir, packageInfo.root)
        console.log(`\nScaffolded package files and directories in ${chalk.green(packageInfo.root)}`)
    } catch (e) {
        console.log(e)
        process.exit(1)
    }
}

export default copyTemplate
