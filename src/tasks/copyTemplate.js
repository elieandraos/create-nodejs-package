import path from 'path'
import chalk from 'chalk'
import { copy } from './../utils/fileSystem'

const copyTemplate = async (packageInfo) => {
    try {
        const cwd = process.cwd()
        const root = path.join(cwd, packageInfo.packageName)
        const template = 'vanilla'
        const templateDir = path.join(__dirname, `../templates/${template}`)

        copy(templateDir, root)
        console.log(`\nScaffolded package files and directories in ${chalk.green(root)}`)
    } catch (e) {
        console.log(e)
        process.exit(1)
    }
}

export default copyTemplate
