import path from 'path'
import chalk from 'chalk'
import { copy } from './../utils/fileSystem'

const copyTemplate = async (packageInfo) => {
    const cwd = process.cwd()
    const root = path.join(cwd, packageInfo.packageName)
    const template = 'vanilla'
    const templateDir = path.join(__dirname, `../templates/${template}`)

    try {
        console.log(`\nScaffolding project in ${chalk.green(root)}`)
        copy(templateDir, root)
    } catch (e) {
        console.log(e)
        process.exit(1)
    }
}

export default copyTemplate
